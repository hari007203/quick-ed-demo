import React from 'react';
import './HeroAboutAgency.css';

// Note: The 3D monument visual (laser, lens flare, brand text, particles)
// lives exclusively in LogoBackgroundAnimation (position: fixed) so it
// persists across the entire page during scrolling.
// The hero section right column has been removed to eliminate duplication.

export default function HeroAboutAgency({ onExploreCoursesClick, onBrochureClick }) {
  const highlights = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: 'Industry-Focused',
      subtitle: 'Curriculum'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Hands-On',
      subtitle: 'Projects'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Expert',
      subtitle: 'Mentors'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: 'Career',
      subtitle: 'Support'
    }
  ];

  return (
    <section className="about-agency-section" id="about">
      {/* Background ambient orbs in brand colors */}
      <div className="agency-orb orb-crimson" />
      <div className="agency-orb orb-forest" />

      <div className="agency-container">
        {/* Left Column: Hero Content — spans full width; global animation covers right side */}
        <div className="agency-text-col">
          {/* Pill Badge */}
          <div className="agency-badge hero-anim-badge">
            <span className="badge-bullet">●</span>
            <span>LEARN . BUILD . SUCCEED</span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="agency-hero-title hero-anim-title">
            <span className="hero-title-line1">Engineeting Elite</span> <br />
            <span className="hero-title-line1">Careers With</span><br />
            <span className="agency-gradient-text">Quick-Ed Solutions</span>
          </h1>

          {/* Hero Lead Paragraph */}
          <p className="agency-lead-paragraph hero-anim-desc">
            Get industry-relevant skills, hands-on projects, and expert guidance to help you grow in your career and achieve your goals.
          </p>

          {/* Primary Action Buttons */}
          <div className="agency-actions-row hero-anim-actions">
            <button
              type="button"
              className="agency-primary-btn"
              onClick={onExploreCoursesClick}
            >
              <span>Explore Courses</span>
              <span className="btn-arrow">→</span>
            </button>
            {/* <button
              type="button"
              className="agency-brochure-btn"
              onClick={onBrochureClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="brochure-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <span>Download Brochure</span>
            </button> */}
          </div>

          {/* Key Agency Statistics */}
          <div className="agency-metrics-grid hero-anim-metrics">
            {/* <div className="metric-box metric-stagger-1">
              <div className="metric-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              {/* <div className="metric-text-group"> */}
                {/* <span className="metric-number">500+</span>
                <span className="metric-label">Hiring MNCs</span> */}
              {/* </div> */}
            {/* </div> */} 

            {/* <div className="metric-box metric-stagger-2">
              <div className="metric-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div className="metric-text-group">
                <span className="metric-number">18.5 LPA</span>
                <span className="metric-label">Highest Package</span>
              </div>
            </div> */}

            {/* <div className="metric-box metric-stagger-3">
              <div className="metric-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="metric-text-group">
                <span className="metric-number">10k+</span>
                <span className="metric-label">Engineers Placed</span>
              </div>
            </div> */}
          </div>
        </div>
        {/* RIGHT COLUMN REMOVED — the global LogoBackgroundAnimation (position:fixed)
            renders the cinematic Quick Ed Solutions monument on the right side
            of the viewport across the entire website. No duplicate needed here. */}
      </div>

      {/* 4 Feature Highlight Cards Row at Bottom of Hero */}
      <div className="hero-highlights-wrap hero-anim-highlights">
        <div className="hero-highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon-box">
                {h.icon}
              </div>
              <div className="highlight-info">
                <span className="highlight-title">{h.title}</span>
                <span className="highlight-subtitle">{h.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
