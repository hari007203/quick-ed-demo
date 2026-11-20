import { useEffect, useState } from 'react';
import { FaBrain, FaJava, FaPython, FaShieldHalved, FaVial } from 'react-icons/fa6';
import './CoursesSection.css';

export default function CoursesSection() {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [activeCourseModal, setActiveCourseModal] = useState(null);

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
      skills: ['Java, HTML5, CSS3, JavaScript, React.js & SQL'],
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
      skills: ['Generative AI, LLMs, Prompt Engineering, Python, Django, FastAPI, REST APIs & Full-Stack Development'],
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
      skills: ['Ethical Hacking, Network Security, TCP/IP, Routing & Switching, Linux, SOC Operations & SIEM Tools'],
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
      skills: ['Manual Testing, Automation Testing, Selenium, Playwright, API Testing, SQL & Test Case Design'],
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
    'java-fullstack': <FaJava aria-hidden="true" />,
    'python-fullstack': <FaPython aria-hidden="true" />,
    genai: <FaBrain aria-hidden="true" />,
    cybersecurity: <FaShieldHalved aria-hidden="true" />,
    'software-testing': <FaVial aria-hidden="true" />,
  };

  useEffect(() => {
    if (activeCourseModal) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveCourseIndex((index) => (index + 1) % courses.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeCourseModal, courses.length]);

  useEffect(() => {
    if (!activeCourseModal) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveCourseModal(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCourseModal]);

  const navigateCourse = (direction) => {
    setActiveCourseIndex((index) => (index + direction + courses.length) % courses.length);
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
              <div className="qe-course-skills-block">
                <span className="qe-course-skills-label">Core Technical Expertise:</span>
                <div className="qe-course-skills">
                  {currentCourse.skills.map((skill) => (
                    <span className="qe-course-skill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="qe-course-card-bottom">
              <div className="qe-course-info">
                <span>Level</span>
                <strong>{currentCourse.level}</strong>
              </div>
            </div>
          </article>

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

      {/* Syllabus Modal */}
      {activeCourseModal && (
        <div className="syllabus-overlay" onClick={() => setActiveCourseModal(null)}>
          <div
            className="syllabus-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-syllabus-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top" style={{ borderTop: `4px solid ${activeCourseModal.accentColor}` }}>
              <div>
                <span className="modal-tag" style={{ color: activeCourseModal.accentColor }}>Curriculum Overview</span>
                <h3 className="modal-heading" id="course-syllabus-title">{activeCourseModal.title}</h3>
              </div>
              <button type="button" className="close-x" onClick={() => setActiveCourseModal(null)} aria-label="Close course syllabus">✕</button>
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

          </div>
        </div>
      )}
    </section>
  );
}
