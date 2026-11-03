import Hero3DVisual from './Hero3DVisual';
import './HeroAboutAgency.css';

export default function HeroAboutAgency({ onExploreCoursesClick }) {
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
        {/* Left Column: Hero Content */}
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
          </div>
        </div>

        {/* Right Column: Sophisticated 3D Visual */}
        <div className="agency-visual-col">
          <Hero3DVisual />
        </div>
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
