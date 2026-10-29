import React, { useState } from 'react';
import './HeroAboutAgency.css';

export default function HeroAboutAgency({ onExploreCoursesClick, onBrochureClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="about-agency-section" id="about">
      {/* Background ambient orbs in Logo Colors */}
      <div className="agency-orb orb-orange" />
      <div className="agency-orb orb-gold" />

      <div className="agency-container">
        {/* Left Column: About Agency Content */}
        <div className="agency-text-col">
          <div className="agency-badge">
            <span className="live-sparkle">🔥</span>
            <span>LEARN. BUILD. SUCCEED.</span>
          </div>

          <h1 className="agency-hero-title">
            Engineering Elite Careers with <br />
            <span className="agency-gradient-text">Quick Ed Solutions</span>
          </h1>

          <p className="agency-lead-paragraph">
                  Quick Ed Solutions is a premier corporate training & engineering agency founded by senior architects. 
            We transform students into production-ready engineers in <strong>Full Stack Python & Java</strong>, <strong>Cybersecurity</strong>, <strong>Software Testing</strong>,and <strong>Generative AI</strong>
          </p>

          {/* Key Agency Statistics */}
          <div className="agency-metrics-grid">
            <div className="metric-box">
              <span className="metric-number">98.4%</span>
              <span className="metric-label">Placement Success</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">500+</span>
              <span className="metric-label">Hiring MNCs</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">18.5 LPA</span>
              <span className="metric-label">Highest Package</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">10k+</span>
              <span className="metric-label">Engineers Placed</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="agency-actions-row">
            <button 
              type="button" 
              className="agency-primary-btn"
              onClick={onExploreCoursesClick}
            >
              <span>Explore 5 Flagship Courses</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              type="button" 
              className="agency-brochure-btn"
              onClick={onBrochureClick}
            >
              <span>📑 Download Brochure</span>
            </button>
          </div>
        </div>

        {/* Right Column: Animated Video Showcase */}
        <div className="agency-video-col">
          <div className="video-player-frame">
            {/* Top Video Header Bar */}
            <div className="video-header-bar">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="video-title-tag">Quick Ed Interactive Masterclass • Production Preview</span>
              <span className="video-live-pill">● LIVE CODING</span>
            </div>

            {/* Video Screen Content */}
            <div className={`video-screen-viewport ${isPlaying ? 'playing' : 'paused'}`}>
              {/* Simulated Animated Video Code Backdrop */}
              <div className="code-animation-bg">
                <div className="code-line glow-orange">import &#123; SpringBoot, Microservice &#125; from '@quicked/java';</div>
                <div className="code-line glow-gold">const pyEngine = new FastAPICluster(&#123; workers: 8, async: true &#125;);</div>
                <div className="code-line glow-amber">await securityAudit.penetrationTest(&#123; target: 'SOC-v2' &#125;);</div>
                <div className="code-line glow-mint">// ✓ All 58 production test suites passed in 1.2s</div>
              </div>

              {/* Central Play/Pause Trigger */}
              <div className="video-play-center" onClick={() => setIsPlaying(!isPlaying)}>
                <button type="button" className={`play-pulse-btn ${isPlaying ? 'is-active' : ''}`}>
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <span className="play-hint-text">
                  {isPlaying ? 'Click to Pause Preview' : 'Click to Watch Animated Agency Video'}
                </span>
              </div>

              {/* Animated Sound Wave Equalizer */}
              {isPlaying && (
                <div className="soundwave-equalizer">
                  <span className="bar b1" />
                  <span className="bar b2" />
                  <span className="bar b3" />
                  <span className="bar b4" />
                  <span className="bar b5" />
                  <span className="bar b6" />
                </div>
              )}

              {/* Bottom Video Controls Overlay */}
              <div className="video-timeline-controls">
                <div className="timeline-bar">
                  <div className={`timeline-progress ${isPlaying ? 'animated-progress' : ''}`} />
                </div>
                <div className="video-sub-row">
                  <span className="time-code">{isPlaying ? '02:45 / 05:00' : '00:00 / 05:00'}</span>
                  <div className="video-tags-cluster">
                    <span className="vtag">1080p 60fps</span>
                    <span className="vtag">Interactive Demo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Footer Caption */}
            <div className="video-caption-bar">
              <span className="caption-icon">🎬</span>
              <p>Experience how our corporate mentors teach high-scale architecture through real code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
