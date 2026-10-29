import React, { useState } from 'react';
import BrochureModal from './BrochureModal';
import './CoursesSection.css';

export default function CoursesSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedBrochureCourse, setSelectedBrochureCourse] = useState('All Flagship Programs');
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

  const handleOpenBrochure = (courseTitle = 'All Flagship Programs') => {
    setSelectedBrochureCourse(courseTitle);
    setBrochureModalOpen(true);
  };

  return (
    <section className="courses-section-wrapper" id="courses">
      <div className="courses-section-header">
        <div className="section-pill-tag">
          <span className="live-pulse" />
          <span>Explore Our Courses</span>
        </div>

        <h2 className="section-main-heading">
          Explore Our <span className="heading-gradient">Signature Programs</span>
        </h2>
        <p className="section-subtitle">
          Engineered for corporate standards. Pick a domain, master high-scale architecture, and learn directly from industry leads.
        </p>

        {/* Top Brochure Banner - As prominent in wireframe sketch */}
        <div className="brochure-spotlight-bar">
          <div className="brochure-bar-text">
            <span className="brochure-icon">📑</span>
            <div>
              <strong>Looking for Full Curriculum & Placement Details?</strong>
              <p>Download our consolidated 2026 course brochure with day-wise roadmap.</p>
            </div>
          </div>
          <button 
            type="button" 
            className="global-brochure-btn"
            onClick={() => handleOpenBrochure('All 5 Flagship Curriculums')}
          >
            <span>📥 View All Brochures</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="courses-filter-pills">
          <button 
            type="button" 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Courses ({courses.length})
          </button>
          <button 
            type="button" 
            className={`filter-btn ${selectedFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('fullstack')}
          >
            Full Stack (2)
          </button>
          <button 
            type="button" 
            className={`filter-btn ${selectedFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ai')}
          >
            GenAI (1)
          </button>
          <button 
            type="button" 
            className={`filter-btn ${selectedFilter === 'security' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('security')}
          >
            Cybersecurity (1)
          </button>
          <button 
            type="button" 
            className={`filter-btn ${selectedFilter === 'testing' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('testing')}
          >
            Software Testing (1)
          </button>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="courses-cards-grid">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="interactive-course-card"
            style={{ 
              '--card-accent': course.accentColor,
              '--card-accent-rgb': course.accentRgb
            }}
          >
            {/* Top Color Accent Line */}
            <div className="card-laser-line" style={{ background: course.accentGradient }} />

            <div className="card-body-content">
              {/* Meta Row */}
              <div className="card-header-meta">
                <span 
                  className="badge-tag" 
                  style={{ 
                    color: course.accentColor, 
                    borderColor: `${course.accentColor}70`, 
                    background: `${course.accentColor}18` 
                  }}
                >
                  {course.badge}
                </span>
                <span className="duration-tag">⏱ {course.duration}</span>
              </div>

              {/* Title & Description */}
              <h3 className="course-title-text">{course.title}</h3>
              <p className="course-summary">{course.tagline}</p>

              {/* Stats Bar */}
              <div className="card-stats-box">
                <div className="stat-unit">
                  <span className="unit-label">Projects</span>
                  <span className="unit-val">{course.projects}</span>
                </div>
                <div className="stat-separator" />
                <div className="stat-unit">
                  <span className="unit-label">Level</span>
                  <span className="unit-val">{course.level}</span>
                </div>
              </div>

              {/* Key Skills */}
              <div className="skills-tag-cloud">
                {course.skills.slice(0, 5).map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
                {course.skills.length > 5 && (
                  <span className="skill-pill more">+{course.skills.length - 5} more</span>
                )}
              </div>

              {/* Split Bottom Buttons as drawn in the wireframe sketch: [ View Brochure ] | [ Enroll / Syllabus ] */}
              <div className="card-split-footer">
                <button 
                  type="button" 
                  className="split-btn brochure-btn"
                  onClick={() => handleOpenBrochure(course.title)}
                  title="View Brochure for this course"
                >
                  <span>📄 View Brochure</span>
                </button>

                <button 
                  type="button" 
                  className="split-btn enroll-btn"
                  style={{ background: course.accentGradient }}
                  onClick={() => setActiveCourseModal(course)}
                >
                  <span>⚡ Syllabus & Enroll</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brochure Modal */}
      <BrochureModal 
        isOpen={brochureModalOpen} 
        onClose={() => setBrochureModalOpen(false)} 
        courseTitle={selectedBrochureCourse}
      />

      {/* Syllabus Modal */}
      {activeCourseModal && (
        <div className="syllabus-overlay" onClick={() => setActiveCourseModal(null)}>
          <div className="syllabus-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top" style={{ borderTop: `4px solid ${activeCourseModal.accentColor}` }}>
              <div>
                <span className="modal-tag" style={{ color: activeCourseModal.accentColor }}>Curriculum Overview</span>
                <h3 className="modal-heading">{activeCourseModal.title}</h3>
              </div>
              <button type="button" className="close-x" onClick={() => setActiveCourseModal(null)}>✕</button>
            </div>

            <div className="modal-scrollable">
              <p className="modal-description">{activeCourseModal.tagline}</p>

              <h4 className="block-title">Key Architectural Highlights</h4>
              <ul className="highlights-listing">
                {activeCourseModal.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="bullet-point" style={{ background: activeCourseModal.accentColor }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="block-title">Technologies Mastered</h4>
              <div className="tech-badge-cloud">
                {activeCourseModal.skills.map((s, i) => (
                  <span key={i} className="tech-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions-bar">
              <button 
                type="button" 
                className="modal-brochure-action"
                onClick={() => {
                  handleOpenBrochure(activeCourseModal.title);
                  setActiveCourseModal(null);
                }}
              >
                Download PDF Brochure
              </button>
              <button 
                type="button" 
                className="modal-enroll-action"
                style={{ background: activeCourseModal.accentGradient }}
                onClick={() => {
                  setEnrolledCourse(activeCourseModal.title);
                  setActiveCourseModal(null);
                }}
              >
                Apply for Next Batch →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Toast Notification */}
      {enrolledCourse && (
        <div className="hud-toast">
          <span className="toast-emoji">🚀</span>
          <div>
            <strong>Application Submitted!</strong>
            <p>You applied for <span>{enrolledCourse}</span>. Our advisor will connect shortly.</p>
          </div>
          <button type="button" className="toast-dismiss" onClick={() => setEnrolledCourse(null)}>✕</button>
        </div>
      )}
    </section>
  );
}
