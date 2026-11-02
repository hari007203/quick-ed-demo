import React, { useState, useEffect, useRef } from 'react';
import './TrainersSection.css';
import Hari from '../assets/Hari.png'
import Karthik from '../assets/Karthik.png'
import Ameesha from '../assets/Ameesha.png'
import Akash from '../assets/Akash.png'

export default function TrainersSection() {
  const [mentorBooked, setMentorBooked] = useState(null);
  const sectionRef = useRef(null);

  const trainers = [
    {
  id: 1,
  name: 'Sri Hari Chilumuri',
  role: 'Java Developer | Frontend & Backend Development',
  companies: [],
  image: Hari,
  accentColor: '#A31C1B',
  mentored: '430+ Engineers',
  specialty: 'Java, HTML5, CSS3, JavaScript, React.js & SQL',
  bio: 'Computer Science graduate with a strong foundation in Java programming, frontend development and database management. Focused on building responsive web applications, developing practical software solutions and continuously strengthening technical skills.'
},
    {
  id: 2,
  name: 'Akash Katam',
  role: 'GenAI & Python Full-Stack Developer',
  companies: [],
  image: Akash,
  accentColor: '#8B5CF6',
   mentored: '380+ Engineers',
  specialty: 'Generative AI, LLMs, Prompt Engineering, Python, Django, FastAPI, REST APIs & Full-Stack Development',
  bio: 'Specializes in Generative AI concepts and Python-based application development, with a focus on building intelligent applications, developing backend services and integrating AI capabilities into modern full-stack solutions.'
},
   {
  id: 3,
  name: 'Karthik Neelagiri',
  role: 'Cybersecurity & Network Security Specialist',
  companies: [],
  image: Karthik,
  accentColor: '#10B981',
   mentored: '310+ Engineers',
  specialty: 'Ethical Hacking, Network Security, TCP/IP, Routing & Switching, Linux, SOC Operations & SIEM Tools',
  bio: 'Focuses on cybersecurity fundamentals and network infrastructure, covering ethical hacking, network defense, Linux security and security monitoring. Emphasizes hands-on lab exercises, practical troubleshooting and real-world security concepts.'
},
   {
  id: 4,
  name: 'Ameesha Gade',
  role: 'Software Testing & QA Trainer',
  companies: [],
  image: Ameesha,
  accentColor: '#F43F5E',
   mentored: '390+ Engineers',
  specialty: 'Manual Testing, Automation Testing, Selenium, Playwright, API Testing, SQL & Test Case Design',
  bio: 'Focuses on software testing fundamentals and quality assurance practices, covering manual and automation testing, test case design, API validation and defect tracking. Emphasizes practical exercises and hands-on projects to help learners develop industry-relevant testing skills.'
},
  ];

  // Scroll-triggered entrance observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Lightweight 3D tilt handler
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`trainer-card-${cardId}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    const rotateY = ((x - midX) / midX) * 4; // Max 4deg tilt
    const rotateX = -((y - midY) / midY) * 4;
    
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.setProperty('--mouseX', `${x}px`);
    card.style.setProperty('--mouseY', `${y}px`);
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(`trainer-card-${cardId}`);
    if (!card) return;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  };

  return (
    <section className="trainers-section" id="trainers" ref={sectionRef}>
      <div className="trainers-container">
        {/* Section Header with premium entrance animation */}
        <div className="trainers-header reveal-content">
          <div className="trainers-badge">
            <span className="star-glow">★</span>
            <span>Corporate Faculty & Mentors</span>
          </div>
          <h2 className="trainers-title">
            Learn from <span className="trainers-gradient">Corporate Trainers</span>
          </h2>
          <p className="trainers-sub">
            No academic theorists. Every mentor at QuickEd Solutions is a verified senior engineer or architect 
            with a proven track record at top global tech giants.
          </p>
        </div>

        {/* Trainers Grid with staggered cards */}
        <div className="trainers-grid">
          {trainers.map((trainer, index) => {
            const skills = trainer.specialty.split(',').map(s => s.trim());
            
            return (
              <div 
                key={trainer.id}
                id={`trainer-card-${trainer.id}`}
                className="trainer-card reveal-card"
                style={{ '--i': index, '--accent': trainer.accentColor }}
                onMouseMove={(e) => handleMouseMove(e, trainer.id)}
                onMouseLeave={() => handleMouseLeave(trainer.id)}
              >
                {/* Cursor-following glossy spotlight overlay */}
                <div className="card-spotlight"></div>

                {/* 60% Photo Area with Gradient Overlay blending into info */}
                <div className="trainer-photo-wrapper">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="trainer-photo"
                    style={{ objectPosition: 'center 20%' }} // Keeps faces perfectly framed
                  />
                  <div className="photo-overlay-gradient"></div>
                  <div className="photo-accent-border" style={{ borderColor: trainer.accentColor }}></div>
                </div>

                {/* 40% Info Area */}
                <div className="trainer-info-panel">
                  <div className="info-header">
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <span className="trainer-role" style={{ color: trainer.accentColor }}>{trainer.role}</span>
                  </div>

                  {/* Skills as elegant glowing tags */}
                  <div className="skills-container">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag" style={{ '--accent': trainer.accentColor }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="trainer-bio">{trainer.bio}</p>

                  <div className="trainer-footer">
                    <div className="students-count">
                      <span className="mentored-count">👥 {trainer.mentored} Mentored</span>
                    </div>
                    {/* <button 
                      type="button" 
                      className="book-mentor-btn"
                      style={{ background: trainer.accentColor, '--accent-shadow': `rgba(${trainer.accentColor.includes('#') ? '163, 28, 27' : '255, 255, 255'}, 0.4)` }}
                      onClick={() => {
                        setMentorBooked(trainer.name);
                        setTimeout(() => setMentorBooked(null), 3000);
                      }}
                    >
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Notification Toast (Preserved state logic) */}
        {mentorBooked && (
          <div className="mentor-toast">
            <span>🎉</span>
            <div>
              <strong>1-on-1 Mentorship Requested!</strong>
              <p>Admissions desk will coordinate your slot with <strong>{mentorBooked}</strong>.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}