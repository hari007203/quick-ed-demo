import React, { useState, useEffect } from 'react';
import './IntroLoader.css';

/**
 * Opening Cinematic Animation for Quick Ed Solutions
 * Theme: Charcoal Black (#171717) + Forest Green (#06110C) + Crimson Red (#A31C1B)
 */
export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stage timings
    const t1 = setTimeout(() => setPhase(1), 250);  // Logo burst & glow
    const t2 = setTimeout(() => setPhase(2), 800);  // Brand name reveal
    const t3 = setTimeout(() => setPhase(3), 1400); // Tagline reveal

    // Progress counter animation from 0 to 100
    let startTime = null;
    const duration = 1600;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCounter(Math.floor(progress * 100));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    const t4 = setTimeout(() => requestAnimationFrame(animateCount), 1200);

    // Exit transition
    const t5 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 750);
    }, 3200);

    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div className={`intro-overlay ${isExiting ? 'intro-exit' : ''}`}>
      {/* Ambient Depth Flares */}
      <div className="intro-flare intro-flare-crimson" />
      <div className="intro-flare intro-flare-forest" />

      {/* Cyber Circuit Lines */}
      <div className="intro-cyber-grid" />

      {/* Skip Button */}
      <button type="button" className="intro-skip-btn" onClick={handleSkip}>
        Skip Intro ✕
      </button>

      {/* Central Assembly Stage */}
      <div className="intro-stage">
        {/* Phase 1: Logo Photo Reveal with Pulsing Halo Ring */}
        <div className={`intro-logo-container ${phase >= 1 ? 'revealed' : ''}`}>
          <div className="intro-halo-ring" />
          <div className="intro-logo-frame">
            <img 
              src="/quick-ed-logo.jpg" 
              alt="Quick Ed Solutions" 
              className="intro-logo-img"
            />
          </div>
          <div className="intro-scan-line" />
        </div>

        {/* Phase 2: Brand Name in Sora Display */}
        <div className={`intro-brand-name ${phase >= 2 ? 'revealed' : ''}`}>
          <span className="brand-word-white">Quick Ed</span>
          <span className="brand-word-gradient">Solutions</span>
        </div>

        {/* Phase 3: Logo Tagline */}
        <div className={`intro-tagline-box ${phase >= 3 ? 'revealed' : ''}`}>
          <div className="intro-crimson-tagline">
            LEARN. BUILD. SUCCEED.
          </div>
          <div className="intro-sub-programs">
            PREMIER CORPORATE TRAINING & ENGINEERING AGENCY
          </div>
        </div>

        {/* Loading Progress Bar & Status */}
        <div className={`intro-progress-box ${phase >= 2 ? 'revealed' : ''}`}>
          <div className="intro-bar-track">
            <div 
              className="intro-bar-fill" 
              style={{ width: `${counter}%` }}
            />
          </div>

          <div className="intro-status-row">
            <span className="status-label">
              {counter < 35 ? '⚡ Initializing Enterprise Learning Portal...' :
               counter < 70 ? '🔥 Synchronizing Corporate Stacks & Mentors...' :
               counter < 95 ? '🚀 Calibrating Placement Architecture...' :
               '✓ Ready. Welcome to Quick Ed Solutions'}
            </span>
            <span className="status-pct">{counter}%</span>
          </div>
        </div>
      </div>

      {/* Tech Corner Reticles */}
      <div className="reticle reticle-tl" />
      <div className="reticle reticle-tr" />
      <div className="reticle reticle-bl" />
      <div className="reticle reticle-br" />
    </div>
  );
}
