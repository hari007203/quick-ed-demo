import React, { useState } from 'react';
import './CoursesPage.css';

export default function CoursesPage({ onEnrollClick }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const courses = [
    {
      id: 'java-fullstack',
      category: 'fullstack',
      title: 'Java Full Stack Development',
      badge: 'Bestseller',
      accentColor: '#A31C1B',
      accentRgb: '163, 28, 27',
      accentGradient: 'linear-gradient(135deg, #A31C1B 0%, #C02725 100%)',
      tagline: 'Enterprise-grade Java backend paired with high-performance React frontend.',
      duration: '16 Weeks',
      projects: '8 Enterprise Projects',
      level: 'Beginner to Advanced',
      skills: ['Core Java', 'Spring Boot', 'Microservices', 'React.js', 'Hibernate', 'RESTful APIs', 'MySQL', 'Docker', 'AWS'],
      highlights: [
        'End-to-End Enterprise Microservices Architecture',
        'Spring Security with JWT & OAuth2',
        'Frontend state management with Redux Toolkit',
        'CI/CD deployment pipelines on AWS Cloud'
      ]
    },
    {
      id: 'python-fullstack',
      category: 'fullstack',
      title: 'Python Full Stack Development',
      badge: 'High Demand',
      accentColor: '#06B6D4',
      accentRgb: '6, 182, 212',
      accentGradient: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)',
      tagline: 'Build ultra-fast modern web applications and scalable data backends.',
      duration: '14 Weeks',
      projects: '6+ Production Apps',
      level: 'All Levels',
      skills: ['Python 3', 'Django', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
      highlights: [
        'Async microservices using FastAPI & Pydantic',
        'Modern SSR Web Apps with Next.js & React',
        'Database optimization with PostgreSQL & Redis caching',
        'Automated testing with PyTest & GitHub Actions'
      ]
    },
    {
      id: 'genai',
      category: 'ai',
      title: 'GenAI & Large Language Models',
      badge: 'Trending #1',
      accentColor: '#8B5CF6',
      accentRgb: '139, 92, 246',
      accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
      tagline: 'Master Generative AI, Retrieval Augmented Generation (RAG), and Autonomous Agents.',
      duration: '10 Weeks',
      projects: '5 Production AI Deployments',
      level: 'Intermediate',
      skills: ['LLMs', 'Prompt Engineering', 'LangChain', 'LlamaIndex', 'RAG Pipelines', 'Vector DBs (Pinecone)', 'OpenAI APIs', 'Fine-Tuning'],
      highlights: [
        'Building Enterprise Context-Aware RAG Systems',
        'Multi-Agent Collaboration with LangGraph & CrewAI',
        'Vector Embeddings & Semantic Search optimization',
        'Custom Fine-Tuning of Open-Source Models (Llama 3)'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'security',
      title: 'Cybersecurity & Ethical Hacking',
      badge: 'Career Accelerator',
      accentColor: '#10B981',
      accentRgb: '16, 185, 129',
      accentGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      tagline: 'Protect digital assets, analyze live threats, and master offensive security techniques.',
      duration: '12 Weeks',
      projects: '12 Hands-on Virtual Labs',
      level: 'Beginner to Advanced',
      skills: ['Kali Linux', 'Network Defense', 'Penetration Testing', 'Wireshark', 'Metasploit', 'OWASP Top 10', 'SOC Analysis', 'SIEM'],
      highlights: [
        'Real-world offensive penetration testing in isolated cyber ranges',
        'Vulnerability assessment & exploit development basics',
        'Web application security auditing (OWASP standards)',
        'Incident response, log forensics & SIEM setup'
      ]
    },
    {
      id: 'software-testing',
      category: 'testing',
      title: 'Software Testing & QA Automation',
      badge: 'Job Ready',
      accentColor: '#F43F5E',
      accentRgb: '244, 63, 94',
      accentGradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
      tagline: 'Master automation frameworks with Playwright, Selenium, and CI/CD test pipelines.',
      duration: '10 Weeks',
      projects: '4 Real Automation Suites',
      level: 'Beginner Friendly',
      skills: ['Manual Testing', 'Selenium WebDriver', 'Playwright', 'Postman API Testing', 'RestAssured', 'JUnit/TestNG', 'JIRA', 'Jenkins'],
      highlights: [
        'Modern Web Automation with Playwright & TypeScript/Java',
        'Comprehensive REST API Testing & Automation with Postman',
        'Test Design Patterns: Page Object Model (POM)',
        'Continuous Testing integration inside Jenkins CI/CD pipelines'
      ]
    }
  ];

  const filteredCourses = selectedFilter === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedFilter);

  return (
    <div className="courses-page-container">
      {/* Page Header */}
      <div className="courses-header-section">
        <div className="courses-pill-badge">
          <span className="dot-pulse" />
          <span>Industry-Accredited Curriculums</span>
        </div>
        <h1 className="courses-main-title">
          Explore Our <span className="title-gradient">Signature Programs</span>
        </h1>
        <p className="courses-subtitle">
          Engineered for high-growth tech careers. Choose your specialization and learn through hands-on industry projects.
        </p>

        {/* Interactive Filter Pills */}
        <div className="filter-tabs-wrapper">
          <button 
            type="button" 
            className={`filter-pill ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Programs ({courses.length})
          </button>
          <button 
            type="button" 
            className={`filter-pill ${selectedFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('fullstack')}
          >
            Full Stack (2)
          </button>
          <button 
            type="button" 
            className={`filter-pill ${selectedFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ai')}
          >
            GenAI (1)
          </button>
          <button 
            type="button" 
            className={`filter-pill ${selectedFilter === 'security' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('security')}
          >
            Cybersecurity (1)
          </button>
          <button 
            type="button" 
            className={`filter-pill ${selectedFilter === 'testing' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('testing')}
          >
            Software Testing (1)
          </button>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="course-card-premium"
            style={{ 
              '--card-accent': course.accentColor,
              '--card-accent-rgb': course.accentRgb
            }}
          >
            {/* Top Color Accent Strip */}
            <div className="card-top-strip" style={{ background: course.accentGradient }} />

            <div className="card-inner-content">
              {/* Badge & Meta */}
              <div className="card-meta-row">
                <span 
                  className="course-badge-pill" 
                  style={{ 
                    color: course.accentColor, 
                    borderColor: `${course.accentColor}70`, 
                    background: `${course.accentColor}18` 
                  }}
                >
                  {course.badge}
                </span>
                <span className="course-duration">{course.duration}</span>
              </div>

              {/* Title & Tagline */}
              <h2 className="course-card-title">{course.title}</h2>
              <p className="course-card-tagline">{course.tagline}</p>

              {/* Stats Row */}
              <div className="course-stats-bar">
                <div className="stat-item">
                  <span className="stat-label">Projects</span>
                  <span className="stat-val">{course.projects}</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-label">Level</span>
                  <span className="stat-val">{course.level}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="skills-cloud">
                {course.skills.slice(0, 5).map((skill, idx) => (
                  <span key={idx} className="skill-chip">
                    {skill}
                  </span>
                ))}
                {course.skills.length > 5 && (
                  <span className="skill-chip more">+{course.skills.length - 5} more</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="card-actions-row">
                <button 
                  type="button" 
                  className="btn-syllabus"
                  onClick={() => setActiveCourseModal(course)}
                >
                  View Syllabus
                </button>
                <button 
                  type="button" 
                  className="btn-enroll"
                  style={{ background: course.accentGradient }}
                  onClick={() => {
                    setEnrolledCourse(course.title);
                    if (onEnrollClick) onEnrollClick(course);
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enrollment Success Toast */}
      {enrolledCourse && (
        <div className="enrollment-toast">
          <div className="toast-content">
            <span className="toast-icon">⚡</span>
            <div>
              <strong>Application Initialized!</strong>
              <p>You selected <span>{enrolledCourse}</span>. Our advisor will reach out shortly.</p>
            </div>
          </div>
          <button type="button" className="toast-close" onClick={() => setEnrolledCourse(null)}>✕</button>
        </div>
      )}

      {/* Syllabus Modal */}
      {activeCourseModal && (
        <div className="syllabus-modal-overlay" onClick={() => setActiveCourseModal(null)}>
          <div className="syllabus-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ borderTop: `4px solid ${activeCourseModal.accentColor}` }}>
              <div>
                <span className="modal-eyebrow" style={{ color: activeCourseModal.accentColor }}>Curriculum Overview</span>
                <h3 className="modal-title">{activeCourseModal.title}</h3>
              </div>
              <button type="button" className="modal-close-btn" onClick={() => setActiveCourseModal(null)}>✕</button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{activeCourseModal.tagline}</p>

              <h4 className="section-label">Core Modules & Architecture</h4>
              <ul className="modal-highlights-list">
                {activeCourseModal.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="highlight-bullet" style={{ background: activeCourseModal.accentColor, color: activeCourseModal.accentColor }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="section-label">Technologies Mastered</h4>
              <div className="modal-skills-grid">
                {activeCourseModal.skills.map((s, i) => (
                  <span key={i} className="modal-tech-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="modal-back-btn" onClick={() => setActiveCourseModal(null)}>
                Close
              </button>
              <button 
                type="button" 
                className="modal-enroll-btn"
                style={{ background: activeCourseModal.accentGradient, color: '#FFFFFF' }}
                onClick={() => {
                  setEnrolledCourse(activeCourseModal.title);
                  setActiveCourseModal(null);
                }}
              >
                Enroll in Program
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
