import React, { useState } from 'react';
import './TrainersSection.css';

export default function TrainersSection() {
  const [mentorBooked, setMentorBooked] = useState(null);

  const trainers = [
    {
      id: 1,
      name: 'Chilumuri Sri Hari',
      role: 'Principal Java & Distributed Systems Architect',
      experience: '14+ Years Corporate Exp',
      companies: ['Ex-Amazon', 'Ex-Goldman Sachs'],
      avatar: '👨‍💻',
      accentColor: '#A31C1B',
      rating: '4.98 / 5.0',
      mentored: '4,200+ Engineers',
      specialty: 'Spring Boot 3, Microservices, High-Scale Concurrency & Kafka',
      bio: 'Former L6 architect at Amazon Payments. Designed high-throughput financial microservices processing $40M+ daily transactions.'
    },
    {
      id: 2,
      name: 'Neelagiri Karthik',
      role: 'Chief AI Research & GenAI Specialist',
      experience: '11+ Years AI Research',
      companies: ['Ex-Microsoft Research', 'IIT Delhi Ph.D.'],
      avatar: '👩‍🔬',
      accentColor: '#8B5CF6',
      rating: '4.95 / 5.0',
      mentored: '3,800+ Engineers',
      specialty: 'Large Language Models, RAG Architectures, Autonomous Agents',
      bio: 'Published author in top AI venues. Specializes in productionizing multi-agent systems and fine-tuning open-source LLMs.'
    },
    {
      id: 3,
      name: 'Katam Akash',
      role: 'Lead Cybersecurity & Offensive Defense Lead',
      experience: '12+ Years Enterprise Security',
      companies: ['Ex-Cisco', 'Palo Alto Networks'],
      avatar: '🕵️‍♂️',
      accentColor: '#10B981',
      rating: '4.97 / 5.0',
      mentored: '3,100+ Engineers',
      specialty: 'Ethical Hacking, Red Team Ops, Zero Trust & SOC Defense',
      bio: 'Certified ethical hacker (OSCP, CISSP). Has conducted 100+ security audits and real-world penetration test engagements for Fortune 500s.'
    },
    {
      id: 4,
      name: 'Pooja Sundaram',
      role: 'Senior QA Architect & Test Automation Lead',
      experience: '10+ Years SDET Experience',
      companies: ['Ex-Oracle', 'Thoughtworks'],
      avatar: '👩‍💻',
      accentColor: '#F43F5E',
      rating: '4.94 / 5.0',
      mentored: '2,900+ Engineers',
      specialty: 'Playwright, Selenium Grid, CI/CD Test Pipelines & API Testing',
      bio: 'Architected enterprise automated quality test suites reducing regression cycle from 4 days to 45 minutes across 80+ microservices.'
    },
    {
      id: 5,
      name: 'Karthik Nair',
      role: 'Senior Staff Python & Backend Architect',
      experience: '9+ Years Hypergrowth Systems',
      companies: ['Ex-Swiggy', 'Ex-Uber'],
      avatar: '👨‍💼',
      accentColor: '#06B6D4',
      rating: '4.96 / 5.0',
      mentored: '3,400+ Engineers',
      specialty: 'FastAPI, Next.js, Redis Cluster, Asynchronous Event Systems',
      bio: 'Scaled high-traffic food delivery dispatch engines handling 200,000+ orders per hour during peak operations.'
    }
  ];

  return (
    <section className="trainers-section" id="trainers">
      <div className="trainers-container">
        {/* Section Heading */}
        <div className="trainers-header">
          <div className="trainers-badge">
            <span className="star-glow">★</span>
            <span>Corporate Faculty & Mentors</span>
          </div>
          <h2 className="trainers-title">
            Learn from <span className="trainers-gradient">Corporate Titans</span>
          </h2>
          <p className="trainers-sub">
            No academic theorists. Every mentor at QuickEd Solutions is a verified senior engineer or architect 
            with a proven track record at top global tech giants.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div 
              key={trainer.id} 
              className="trainer-card"
              style={{ '--trainer-accent': trainer.accentColor }}
            >
              <div className="trainer-avatar-banner">
                <div className="avatar-bubble" style={{ borderColor: trainer.accentColor }}>
                  <span className="avatar-emoji">{trainer.avatar}</span>
                </div>
                <div className="trainer-stats-pills">
                  <span className="exp-pill">★ {trainer.experience}</span>
                  <span className="rating-pill">⭐ {trainer.rating}</span>
                </div>
              </div>

              <div className="trainer-card-content">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>

                {/* Company Badges */}
                <div className="company-badges-list">
                  {trainer.companies.map((co, idx) => (
                    <span key={idx} className="company-badge">
                      {co}
                    </span>
                  ))}
                </div>

                <div className="specialty-block">
                  <span className="specialty-label">Core Focus</span>
                  <p className="specialty-desc">{trainer.specialty}</p>
                </div>

                <p className="trainer-bio">{trainer.bio}</p>

                <div className="trainer-card-footer">
                  <span className="students-count">👥 {trainer.mentored} Mentored</span>
                  <button 
                    type="button" 
                    className="book-mentor-btn"
                    style={{ background: trainer.accentColor }}
                    onClick={() => {
                      setMentorBooked(trainer.name);
                      setTimeout(() => setMentorBooked(null), 3000);
                    }}
                  >
                    <span>Book 1-on-1 Session</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Notification */}
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
