import { useEffect, useState } from 'react';
import BrochureModal from './BrochureModal';
import './CoursesSection.css';

export default function CoursesSection() {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
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

  const currentCourse = courses[activeCourseIndex];
  const courseSymbols = {
    'java-fullstack': '☕',
    'python-fullstack': 'Py',
    genai: '✳',
    cybersecurity: '⬡',
    'software-testing': '✓',
  };

  useEffect(() => {
    if (activeCourseModal || brochureModalOpen) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveCourseIndex((index) => (index + 1) % courses.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeCourseModal, brochureModalOpen, courses.length]);

  const navigateCourse = (direction) => {
    setActiveCourseIndex((index) => (index + direction + courses.length) % courses.length);
  };

  const handleOpenBrochure = (courseTitle = 'All Flagship Programs') => {
    setSelectedBrochureCourse(courseTitle);
    setBrochureModalOpen(true);
  };

  return (
    <section className="courses-section-wrapper" id="courses">
      <div className="qe-course-carousel">
        <header className="qe-course-intro">
          <span className="qe-course-eyebrow">Learn · Build · Grow</span>
          <h2>Build your <span>future.</span></h2>
          <p>Explore practical courses designed to turn your ambition into real-world skills.</p>
          <span className="qe-course-intro-line" aria-hidden="true" />
          <span className="qe-course-caption">Your journey starts here</span>
        </header>

        <div className="qe-course-stage">
          <article
            key={currentCourse.id}
            className="qe-course-card"
            style={{ '--course-accent': currentCourse.accentColor }}
            aria-roledescription="slide"
            aria-label={`Course ${activeCourseIndex + 1} of ${courses.length}: ${currentCourse.title}`}
          >
            <div className="qe-course-card-top">
              <span className="qe-course-number">Course / {String(activeCourseIndex + 1).padStart(2, '0')}</span>
              <div className="qe-course-visual" aria-hidden="true">
                <span className="qe-course-symbol">{courseSymbols[currentCourse.id]}</span>
                <span className="qe-course-orbit qe-orbit-one" />
                <span className="qe-course-orbit qe-orbit-two" />
              </div>
            </div>

            <div className="qe-course-content">
              <span className="qe-course-featured">Featured program · {currentCourse.badge}</span>
              <h3>{currentCourse.title}</h3>
              <p className="qe-course-subtitle">{currentCourse.projects}</p>
              <p className="qe-course-description">{currentCourse.tagline}</p>
              <p className="qe-course-technologies" aria-label="Technologies">
                {currentCourse.skills.join(' / ')}
              </p>
            </div>

            <div className="qe-course-card-bottom">
              <div className="qe-course-info">
                <span>Duration</span>
                <strong>{currentCourse.duration}</strong>
              </div>
              <div className="qe-course-info">
                <span>Level</span>
                <strong>{currentCourse.level}</strong>
              </div>
              <button
                className="qe-course-explore"
                type="button"
                onClick={() => setActiveCourseModal(currentCourse)}
                aria-label={`Explore ${currentCourse.title} syllabus`}
              >
                Explore <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>

          <div className="qe-course-actions">
            <button
              type="button"
              className="qe-course-brochure"
              onClick={() => handleOpenBrochure(currentCourse.title)}
              aria-label={`View brochure for ${currentCourse.title}`}
            >
              Course brochure <span aria-hidden="true">↗</span>
            </button>
            <button
              type="button"
              className="qe-course-brochure qe-course-all-brochures"
              onClick={() => handleOpenBrochure('All 5 Flagship Curriculums')}
            >
              View all brochures <span aria-hidden="true">↗</span>
            </button>
          </div>

          <nav className="qe-course-controls" aria-label="Course carousel navigation">
            <button
              type="button"
              className="qe-course-arrow"
              onClick={() => navigateCourse(-1)}
              aria-label="Previous course"
            >
              ←
            </button>
            <div className="qe-course-indicators" role="group" aria-label="Choose a course">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  type="button"
                  className={`qe-course-indicator ${index === activeCourseIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveCourseIndex(index)}
                  aria-label={`Show course ${index + 1}: ${course.title}`}
                  aria-current={index === activeCourseIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="qe-course-arrow"
              onClick={() => navigateCourse(1)}
              aria-label="Next course"
            >
              →
            </button>
          </nav>
          <p className="qe-course-autoplay-note">Auto exploring · Every 5 seconds</p>
        </div>
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
