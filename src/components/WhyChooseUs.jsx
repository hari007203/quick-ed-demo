import './WhyChooseUs.css';

// Clean single import for the founder photo
import Founder from '../assets/Founder.webp'; 

export default function WhyChooseUs() {
  const pillars = [
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
    }
  ];

  return (
    <section className="why-choose-section" id="why-us">
      <div className="why-choose-container">
        {/* Section Header (Unchanged) */}
        <div className="why-header">
          <span className="why-pill">Why Quick Ed Solutions</span>
          <h2 className="why-title">
            Engineered for <span className="why-gradient">Career Dominance</span>
          </h2>
          <p className="why-sub">
            Traditional colleges teach yesterday's theory. Quick Ed Solutions equips you with today's production engineering skills.
          </p>
        </div>

        {/* Pillars Grid (Unchanged) */}
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

        {/* MOTIVATIONAL SPEECH CARD — 40% TEXT / 60% IMAGE LAYOUT */}
        <div className="motivational-speech-card">
          
          {/* Left Column: Speech Content (40%) */}
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
              <div>
                <strong>Suhas Nagulapalli</strong>
                <span>Founder & Chief Mentor, Quick Ed Solutions •Hr, Marketing, Enterpreneur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Photo (60%) */}
          <div className="speech-image-col">
            <div className="image-wrapper">
              <img 
                src={Founder} 
                alt="Nagulapalli Suhas - Founder" 
                className="founder-img"
                loading="lazy"
                decoding="async"
                width="440"
                height="500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}