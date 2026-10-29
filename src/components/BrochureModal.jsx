import React, { useState } from 'react';
import './BrochureModal.css';

export default function BrochureModal({ isOpen, onClose, courseTitle = 'All Flagship Programs' }) {
  const [downloaded, setDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="brochure-modal-overlay" onClick={onClose}>
      <div className="brochure-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="brochure-modal-header">
          <div>
            <span className="brochure-pill">Official 2026 Curriculum</span>
            <h3 className="brochure-title">Download Course Brochure</h3>
            <p className="brochure-sub">Get the full syllabus, project blueprints, and hiring company list for <strong>{courseTitle}</strong></p>
          </div>
          <button type="button" className="brochure-close" onClick={onClose}>✕</button>
        </div>

        {/* Brochure Highlights Preview */}
        <div className="brochure-features-list">
          <div className="feature-item">
            <span className="feature-icon">📑</span>
            <div>
              <strong>Complete Day-by-Day Syllabus</strong>
              <p>Lecture breakdown, hands-on lab plans & architectural diagrams.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💼</span>
            <div>
              <strong>500+ Hiring Partners List</strong>
              <p>Top MNCs, Unicorns & product firms recruiting directly from QuickEd.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <div>
              <strong>Capstone Project Blueprints</strong>
              <p>Production enterprise apps you will build & deploy to your portfolio.</p>
            </div>
          </div>
        </div>

        {/* Instant Download Form */}
        {!downloaded ? (
          <form className="brochure-form" onSubmit={handleDownload}>
            <div className="input-group">
              <label>Enter your student email for instant PDF delivery:</label>
              <input 
                type="email" 
                required 
                placeholder="name@university.edu or student@gmail.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <button type="submit" className="brochure-submit-btn">
              <span>📥 Download Brochure PDF</span>
            </button>
          </form>
        ) : (
          <div className="brochure-success-state">
            <span className="success-icon">🎉</span>
            <h4>Brochure Downloaded Successfully!</h4>
            <p>A copy has also been dispatched to <strong>{emailInput || 'your inbox'}</strong>.</p>
          </div>
        )}
      </div>
    </div>
  );
}
