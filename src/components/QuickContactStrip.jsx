import React from 'react';
import './QuickContactStrip.css';
// 1. Import official brand icons from react-icons
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function QuickContactStrip() {
  const socials = [
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com', 
      color: '#0A66C2' 
    },
    { 
      name: 'YouTube', 
      icon: <FaYoutube />, 
      url: 'https://youtube.com', 
      color: '#FF0000' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      url: 'https://instagram.com', 
      color: '#E4405F' 
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      url: 'https://github.com', 
      color: '#FFFFFF' // Crisp white for GitHub on dark charcoal background
    },
    { 
      name: 'X / Twitter', 
      icon: <FaXTwitter />, 
      url: 'https://x.com', 
      color: '#FFFFFF' // Crisp white for the modern X logo
    },
  ];

  return (
    <section className="contact-strip-section" id="contact">
      <div className="contact-strip-container">
        {/* Wireframe Section 6: make a call | send an email | social media logos */}
        <div className="contact-trio-grid">
          {/* 1. Make A Call - PRESERVED EXACTLY AS IS */}
          <a href="tel:+9183748 52001" className="contact-action-box call-box">
            <div className="action-icon-circle call-icon-bg">
              <span>📞</span>
            </div>
            <div className="action-text-content">
              <span className="action-eyebrow">Direct Admissions Hotline</span>
              <h3 className="action-main-text">Make a Call</h3>
              <p className="action-detail">+91 98765 43210</p>
              <span className="action-avail">● Available 24/7 for Inquiries</span>
            </div>
            <span className="action-arrow-tag">Call Now ↗</span>
          </a>

          {/* 2. Send An Email - PRESERVED EXACTLY AS IS */}
          <a href="mailto:admissions@quickedsolutions.com" className="contact-action-box email-box">
            <div className="action-icon-circle email-icon-bg">
              <span>✉️</span>
            </div>
            <div className="action-text-content">
              <span className="action-eyebrow">Academic Desk</span>
              <h3 className="action-main-text">Send an Email</h3>
              <p className="action-detail">admissions@quickedsolutions.com</p>
              <span className="action-avail">⚡ Instant response in &lt; 15 mins</span>
            </div>
            <span className="action-arrow-tag">Write Mail ↗</span>
          </a>

          {/* 3. Social Media Logos - UPDATED WITH react-icons */}
          <div className="contact-action-box socials-box">
            <div className="action-text-content">
              <span className="action-eyebrow">Join Student Community</span>
              <h3 className="action-main-text">Connect on Social</h3>
            </div>

            <div className="social-icons-cluster">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-logo-chip"
                  title={social.name}
                  style={{ '--soc-color': social.color }}
                >
                  <span 
                    className="soc-emoji" 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: social.color 
                    }}
                  >
                    {social.icon}
                  </span>
                  <span className="soc-label">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}