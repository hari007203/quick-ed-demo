import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import HelpModal from './HelpModal';
import './Navbar.css';

export default function Navbar({ activeSection = 'home', onNavigate }) {
  const [currentTab, setCurrentTab] = useState(activeSection);
  const [coursesHovered, setCoursesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setCurrentTab(activeSection);
  }, [activeSection]);

  const handleLinkClick = (tabKey) => {
    if (tabKey === 'help') {
      setHelpModalOpen(true);
      return;
    }
    setCurrentTab(tabKey);
    setCoursesHovered(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(tabKey);
    }
  };

  // Nav items exactly matching wireframe: logo, home, courses, help (email/contact), about, trainers, contact
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'courses', label: 'Courses', hasDropdown: true },
    { key: 'help', label: 'Help', isHelp: true },
    { key: 'about', label: 'About Agency' },
    { key: 'trainers', label: 'Trainers' },
    { key: 'contact', label: 'Contact' },
  ];

  const courseMenuItems = [
    { name: 'Python Full Stack', desc: 'Django, FastAPI, Next.js & REST APIs', color: '#06B6D4' },
    { name: 'Java Full Stack', desc: 'Spring Boot 3, Microservices & React', color: '#DC2626' },
    { name: 'Cybersecurity', desc: 'Ethical Hacking, SOC, PenTesting & Defense', color: '#10B981' },
    { name: 'GenAI & LLMs', desc: 'LangChain, RAG Pipelines & Autonomous Agents', color: '#8B5CF6' },
    { name: 'Software Testing', desc: 'Playwright, Selenium & QA Automation', color: '#F43F5E' },
  ];

  return (
    <>
      <nav className="qed-navbar">
        <div className="qed-navbar-content">
          {/* 1. Logo */}
          <div className="qed-logo-wrapper" onClick={() => handleLinkClick('home')}>
            <Logo />
          </div>

          {/* 2. Menu Links */}
          <ul className="qed-menu">
            {navItems.map((item) => {
              const isActive = currentTab === item.key;

              if (item.hasDropdown) {
                return (
                  <li 
                    key={item.key} 
                    className="qed-menu-item dropdown-parent"
                    ref={dropdownRef}
                    onMouseEnter={() => setCoursesHovered(true)}
                    onMouseLeave={() => setCoursesHovered(false)}
                  >
                    <button
                      type="button"
                      className={`qed-nav-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleLinkClick('courses')}
                    >
                      <span>{item.label}</span>
                      <span className="qed-courses-counter">5</span>
                      <svg 
                        className={`chevron-icon ${coursesHovered ? 'rotated' : ''}`} 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Courses Dropdown */}
                    <div className={`qed-course-dropdown ${coursesHovered ? 'visible' : ''}`}>
                      <div className="dropdown-header">
                        <span>Flagship Programs</span>
                        <button 
                          type="button" 
                          className="see-all-courses-link"
                          onClick={() => handleLinkClick('courses')}
                        >
                          Explore All →
                        </button>
                      </div>

                      <div className="dropdown-courses-list">
                        {courseMenuItems.map((course, idx) => (
                          <div 
                            key={idx}
                            className="dropdown-course-row"
                            onClick={() => handleLinkClick('courses')}
                          >
                            <span className="course-dot" style={{ background: course.color, boxShadow: `0 0 8px ${course.color}` }} />
                            <div className="course-row-info">
                              <span className="course-row-name">{course.name}</span>
                              <span className="course-row-desc">{course.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              if (item.isHelp) {
                return (
                  <li key={item.key} className="qed-menu-item">
                    <button
                      type="button"
                      className="qed-nav-btn help-btn"
                      onClick={() => setHelpModalOpen(true)}
                      title="Direct Support: Email & Contact details"
                    >
                      <span className="help-icon">📞</span>
                      <span>{item.label}</span>
                      <span className="help-quick-tag">Direct Support</span>
                    </button>
                  </li>
                );
              }

              return (
                <li key={item.key} className="qed-menu-item">
                  <button
                    type="button"
                    className={`qed-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.key)}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side: Mobile Toggle only */}
          <div className="qed-nav-actions">
            {/* Mobile Toggle */}
            <button 
              type="button" 
              className="qed-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="qed-mobile-drawer">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`qed-mobile-link ${currentTab === item.key ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.key)}
              >
                <span>{item.label}</span>
                {item.key === 'courses' && <span className="mobile-badge">5 Programs</span>}
                {item.key === 'help' && <span className="mobile-badge" style={{ color: '#DC2626', borderColor: '#DC2626' }}>Phone / Mail</span>}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Help Modal displaying Email & Contact No as per wireframe arrow */}
      <HelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
    </>
  );
}
