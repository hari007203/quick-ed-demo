import { useCallback, useEffect, useRef, useState } from 'react';
import quickLogo from '../assets/quick-ed-logo.webp';
import './ChatWidget.css';

const API_BASE = (import.meta.env.VITE_CHAT_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');
const MAX_CHARS = 500;
const HISTORY_LIMIT = 6;
const WELCOME_ID = 'welcome';
const REQUEST_TIMEOUT_MS = 60000;

const WELCOME =
  "Hi! I'm the Quick Ed Assistant. Ask me about our five programs, trainers, tools, brochure, enrollment, fees, batches or placement support.";

const SUGGESTIONS = [
  'What courses do you offer?',
  'What are the course fees?',
  'Who are the trainers?',
  'What tools will I learn?',
  'Do you provide placement support?',
];

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.4 20.4 20.9 12 3.4 3.6l.1 6.6L15 12 3.5 13.8z" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function ChatWidget({ initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen);
  const [messages, setMessages] = useState([{ id: WELCOME_ID, role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const nextId = useRef(1);

  const closeChat = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, busy, open]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 180);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeChat();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeChat]);

  const send = useCallback(
    async (raw) => {
      const text = (raw ?? input).trim();
      if (!text || busy) return;

      const history = messages
        .filter((m) => m.id !== WELCOME_ID && !m.error)
        .slice(-HISTORY_LIMIT)
        .map(({ role, content }) => ({ role, content }));

      setMessages((prev) => [...prev, { id: `u${nextId.current++}`, role: 'user', content: text }]);
      setInput('');
      if (inputRef.current) inputRef.current.style.height = 'auto';
      setBusy(true);

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      try {
        const res = await fetch(`${API_BASE}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, history }),
          signal: controller.signal,
        });

        if (!res.ok) {
          const friendly =
            res.status === 429
              ? "You're sending messages a little too fast. Please wait a minute and try again."
              : "I couldn't reach the assistant right now. Please try again in a moment.";
          throw Object.assign(new Error(friendly), { friendly: true });
        }

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { id: `a${nextId.current++}`, role: 'assistant', content: data.answer },
        ]);
      } catch (err) {
        const friendly =
          err.name === 'AbortError'
            ? 'The assistant took too long to respond. Please try again.'
            : err.friendly
              ? err.message
              : "I couldn't connect to the assistant. Please check your connection and try again.";
        setMessages((prev) => [
          ...prev,
          { id: `e${nextId.current++}`, role: 'assistant', content: friendly, error: true },
        ]);
      } finally {
        clearTimeout(timer);
        setBusy(false);
        inputRef.current?.focus();
      }
    },
    [busy, input, messages]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    send();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 110)}px`;
  };

  const clearConversation = () => {
    setMessages([{ id: WELCOME_ID, role: 'assistant', content: WELCOME }]);
    setInput('');
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div
        className={`qed-chat-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Quick Ed Assistant"
      >
        <header className="qed-chat-header">
          <span className="qed-chat-brand-logo">
            <img src={quickLogo} alt="" />
          </span>
          <div className="qed-chat-heading">
            <span className="qed-chat-title">Quick Ed Assistant</span>
            <span className="qed-chat-status">
              <i aria-hidden="true" /> Online
            </span>
          </div>
          <div className="qed-chat-actions">
            <button
              type="button"
              className="qed-chat-icon-btn"
              onClick={clearConversation}
              disabled={busy || messages.length === 1}
              title="Clear conversation"
              aria-label="Clear conversation"
            >
              <ClearIcon />
            </button>
            <button
              type="button"
              className="qed-chat-icon-btn"
              onClick={closeChat}
              title="Close chat"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>
        </header>

        <div className="qed-chat-body" role="log" aria-live="polite">
          {messages.map((m) => (
            <div key={m.id} className={`qed-chat-row ${m.role}`}>
              {m.role === 'assistant' && (
                <span className="qed-chat-avatar">
                  <img src={quickLogo} alt="" />
                </span>
              )}
              <div className={`qed-chat-bubble ${m.role} ${m.error ? 'is-error' : ''}`}>{m.content}</div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="qed-chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="qed-chat-chip"
                  onClick={() => send(s)}
                  disabled={busy}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {busy && (
            <div className="qed-chat-row assistant">
              <span className="qed-chat-avatar">
                <img src={quickLogo} alt="" />
              </span>
              <div className="qed-chat-typing" aria-label="Assistant is typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        <form className="qed-chat-composer" onSubmit={handleSubmit}>
          <textarea
            ref={inputRef}
            className="qed-chat-input"
            rows={1}
            maxLength={MAX_CHARS}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask about courses, fees, batches..."
            aria-label="Message"
          />
          <button
            type="submit"
            className="qed-chat-send"
            disabled={busy || !input.trim()}
            aria-label="Send message"
            title="Send"
          >
            <SendIcon />
          </button>
        </form>
      </div>

      <button
        ref={launcherRef}
        type="button"
        className={`qed-chat-launcher ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Chat with Quick Ed Assistant"
        aria-expanded={open}
      >
        <span className="qed-chat-launcher-avatar">
          <span className="qed-chat-launcher-photo">
            <img src={quickLogo} alt="" />
          </span>
          <span className="qed-chat-launcher-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3C6.9 3 3 6.4 3 10.6c0 2.3 1.2 4.3 3.2 5.7-.2 1.2-.8 2.3-1.7 3.2-.2.2 0 .6.3.6 2 0 3.7-.7 5-1.7 1 .3 2.1.4 3.2.4 5.1 0 9-3.4 9-7.6S17.1 3 12 3z" />
            </svg>
          </span>
        </span>
        <span className="qed-chat-launcher-copy">
          <span className="qed-chat-launcher-title">Need help?</span>
          <span className="qed-chat-launcher-sub">Let's chat</span>
        </span>
      </button>
    </>
  );
}
