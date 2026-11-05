import { useState, useEffect, useRef } from 'react';
import './ToolsMarquee.css';

export default function ToolsMarquee({ isAppReady = true }) {
  const [isMarqueeActive, setIsMarqueeActive] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isAppReady) {
      const timer = setTimeout(() => {
        setIsMarqueeActive(true);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isAppReady]);

  // Pause horizontal marquee when scrolled out of view to save mobile GPU cycles
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tools = [
    { name: 'Java 21', icon: '☕', tag: 'Backend' },
    { name: 'Python', icon: '🐍', tag: 'AI & Backend' },
    { name: 'React.js', icon: '⚛️', tag: 'Frontend' },
    { name: 'OpenAI & LLMs', icon: '🧠', tag: 'GenAI' },
    { name: 'LangChain', icon: '🦜', tag: 'AI Agents' },
    { name: 'Kali Linux', icon: '🛡️', tag: 'Security' },
    { name: 'Wireshark', icon: '🦈', tag: 'Cyber' },
    { name: 'Playwright', icon: '🎭', tag: 'Testing' },
    { name: 'Selenium', icon: '🧪', tag: 'Automation' },
    { name: 'MYSQL,Oracle', icon: '🐘', tag: 'Database' },
  ];

  // Repeat for continuous infinite scroll
  const marqueeList = [...tools, ...tools];

  return (
    <section className="tools-marquee-section" id="tools" ref={sectionRef}>
      <div className="marquee-label-row">
        <span className="marquee-badge">Enterprise Stacks Mastered</span>
        <h4 className="marquee-title">Industry Tools & Frameworks You Will Command</h4>
      </div>

      <div className="marquee-track-container">
        {/* Gradient edge fades */}
        <div className="edge-fade left" />
        <div className="edge-fade right" />

        <div className={`marquee-track ${isMarqueeActive ? 'is-animated' : ''} ${!isInView ? 'is-paused' : ''}`}>
          {marqueeList.map((tool, idx) => (
            <div key={idx} className="tool-pill-card">
              <span className="tool-icon">{tool.icon}</span>
              <div className="tool-info">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-tag">{tool.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
