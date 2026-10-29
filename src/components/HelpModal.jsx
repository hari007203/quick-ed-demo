import React from 'react';
import './HelpModal.css';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Glow Header */}
        <div className="help-modal-header">
          <div className="help-header-text">
            <span className="help-tag">Instant Student Support</span>
            <h3 className="help-title">How can we help you today?</h3>
          </div>
          <button type="button" className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <p className="help-desc">
          Our admissions & academic counseling team is ready to assist you. Choose your preferred channel:
        </p>

        {/* The two core channels drawn in your sketch arrow: email, contact no */}
        <div className="help-channels-grid">
          {/* 1. Contact Number */}
          <a href="tel:+919876543210" className="help-channel-card phone-channel">
            <div className="channel-icon-circle">📞</div>
            <div className="channel-info">
              <span className="channel-label">Direct Contact Number</span>
              <strong className="channel-val">+91 98765 43210</strong>
              <span className="channel-status">● Live Now • Mon-Sun (9AM - 9PM)</span>
            </div>
            <span className="channel-action-arrow">Call Now →</span>
          </a>

          {/* 2. Email Address */}
          <a href="mailto:admissions@quickedsolutions.com" className="help-channel-card email-channel">
            <div className="channel-icon-circle">✉️</div>
            <div className="channel-info">
              <span className="channel-label">Admissions Email Support</span>
              <strong className="channel-val">admissions@quickedsolutions.com</strong>
              <span className="channel-status">⚡ Guaranteed reply within 15 minutes</span>
            </div>
            <span className="channel-action-arrow">Send Mail →</span>
          </a>

          {/* 3. WhatsApp Direct Chat */}
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="help-channel-card whatsapp-channel">
            <div className="channel-icon-circle">💬</div>
            <div className="channel-info">
              <span className="channel-label">Instant WhatsApp Chat</span>
              <strong className="channel-val">Chat with Academic Advisor</strong>
              <span className="channel-status">Instant syllabus & brochure on WhatsApp</span>
            </div>
            <span className="channel-action-arrow">Chat Now →</span>
          </a>
        </div>

        <div className="help-modal-footer">
          <span>QuickEd Solutions Education Helpline</span>
          <button type="button" className="help-done-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
