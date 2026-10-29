import React, { useState } from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const [speechPlaying, setSpeechPlaying] = useState(false);

  const pillars = [
    {
      icon: '🎯',
      title: '100% Corporate Placement Drive',
      desc: 'Direct hiring referrals with 500+ MNCs & high-growth unicorns. Dedicated placement cell prepares you with mock technical rounds and resume critiques.',
      accent: '#A31C1B'
    },
    {
      icon: '💻',
      title: 'Production-Grade GitHub Repos',
      desc: 'No toy projects. You will architect, containerize, and deploy distributed microservices, LLM pipelines, and automated test frameworks.',
      accent: '#A31C1B'
    },
    {
      icon: '👥',
      title: '1-on-1 Senior Architect Mentorship',
      desc: 'Weekly code reviews and live debugging sessions with corporate leads who review your pull requests just like in top engineering teams.',
      accent: '#A31C1B'
    },
    {
      icon: '⚡',
      title: 'Lifetime Curriculum & LMS Access',
      desc: 'Tech evolves fast. When Java 22 or Llama 4 drops, our course modules are updated and you get lifetime access to all future masterclasses.',
      accent: '#A31C1B'
    }
  ];

  return (
    <section className="why-choose-section" id="why-us">
      <div className="why-choose-container">
        {/* Section Header */}
        <div className="why-header">
          <span className="why-pill">Why Quick Ed Solutions</span>
          <h2 className="why-title">
            Engineered for <span className="why-gradient">Career Dominance</span>
          </h2>
          <p className="why-sub">
            Traditional colleges teach yesterday's theory. Quick Ed Solutions equips you with today's production engineering skills.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="pillar-card"
              style={{ '--pillar-accent': pillar.accent }}
            >
              <div className="pillar-icon-box">
                <span>{pillar.icon}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* MOTIVATIONAL SPEECH SPOTLIGHT */}
        <div className="motivational-speech-card">
          <div className="speech-left-col">
            <div className="speech-quote-badge">
              <span>🎙️ FOUNDER'S MOTIVATIONAL SPEECH</span>
            </div>
            <h3 className="speech-heading">
              "Stop Consuming Tutorials. Start Engineering Real Systems."
            </h3>
            <blockquote className="speech-quote">
              "The tech industry doesn't pay you for how many certificates you save on LinkedIn. 
              The industry pays you for the systems you can build, the bugs you can solve under pressure, 
              and the ownership you bring to the team. At Quick Ed Solutions, our motto is simple: 
              <strong> LEARN. BUILD. SUCCEED.</strong>"
            </blockquote>
            <div className="speaker-meta">
              <span className="speaker-avatar">⚡</span>
              <div>
                <strong>Aakash Vardhan</strong>
                <span>Founder & Chief Mentor, Quick Ed Solutions • Ex-Google Staff Architect</span>
              </div>
            </div>
          </div>

          <div className="speech-player-col">
            <div className="audio-player-glass">
              <span className="player-tag">Audio Keynote • 3 min 45 sec</span>
              
              {/* Equalizer animation */}
              <div className={`equalizer-wave ${speechPlaying ? 'active' : ''}`}>
                <span className="eq eq1" />
                <span className="eq eq2" />
                <span className="eq eq3" />
                <span className="eq eq4" />
                <span className="eq eq5" />
                <span className="eq eq6" />
                <span className="eq eq7" />
                <span className="eq eq8" />
              </div>

              <button 
                type="button" 
                className={`speech-play-btn ${speechPlaying ? 'playing' : ''}`}
                onClick={() => setSpeechPlaying(!speechPlaying)}
              >
                <span>{speechPlaying ? '⏸ Pause Speech' : '▶ Play Full Speech'}</span>
              </button>

              <span className="player-stats">⚡ 48,200+ Students Inspired</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
