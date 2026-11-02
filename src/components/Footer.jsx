import React from 'react';
import Logo from './Logo';
import './Footer.css';
// 1. Import official brand icons from react-icons
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa6';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  // Social media configuration with official brand colors
  const footerSocials = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin />, color: '#0A66C2' },
    { name: 'YouTube', url: 'https://youtube.com', icon: <FaYoutube />, color: '#FF0000' },
    { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram />, color: '#E4405F' },
    { name: 'GitHub', url: 'https://github.com', icon: <FaGithub />, color: '#FFFFFF' },
    // { name: 'Discord', url: 'https://discord.com', icon: <FaDiscord />, color: '#5865F2' },
  ];

  return (
    <footer className="qed-footer-root">
      <div className="qed-footer-container">
        {/* Wireframe Section 7: logo | quick links | contact us | social media logos */}
        <div className="footer-columns-grid">
          {/* 1. Logo & Mission - UNCHANGED */}
          <div className="footer-col col-brand">
            <Logo size="small" />
            <p className="footer-tagline">
              Quick Ed Solutions is a premier corporate tech training & placement agency 
              preparing students and engineers for high-impact roles in Full Stack Python & Java, Cybersecurity, and AI.
            </p>
            <span className="footer-reg-pill">● LEARN. BUILD. SUCCEED.</span>
          </div>

          {/* 2. Quick Links - UNCHANGED */}
          <div className="footer-col col-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><button type="button" onClick={() => onNavigate('home')}>Home</button></li>
              <li><button type="button" onClick={() => onNavigate('about')}>About Agency</button></li>
              <li><button type="button" onClick={() => onNavigate('courses')}>Flagship Courses</button></li>
              <li><button type="button" onClick={() => onNavigate('trainers')}>Corporate Faculty</button></li>
              <li><button type="button" onClick={() => onNavigate('why-us')}>Why Choose Us</button></li>
            </ul>
          </div>

          {/* 3. Contact Us - UNCHANGED */}
          <div className="footer-col col-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="c-icon">📍</span>
                <span>Tech Innovation Hub, Cyber City Sector 62</span>
              </li>
              <li>
                <span className="c-icon">📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span className="c-icon">✉️</span>
                <a href="mailto:admissions@quickedsolutions.com">admissions@quickedsolutions.com</a>
              </li>
            </ul>
          </div>

          {/* 4. Social Media Logos - UPDATED WITH react-icons */}
          <div className="footer-col col-social">
            <h4 className="footer-heading">Social Media</h4>
            <p className="social-sub">Follow for daily architecture tips :</p>
            <div className="footer-social-icons">
              {footerSocials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="f-soc" 
                  title={social.name}
                  style={{ 
                    color: social.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* <div className="newsletter-box">
              <input type="email" placeholder="Student email for updates..." />
              <button type="button">Join</button>
            </div> */}
          </div>
        </div>

        {/* Bottom Horizontal Underline from the wireframe sketch - UNCHANGED */}
        <div className="footer-sketch-underline" />

        <div className="footer-bottom-bar">
          <p>© {currentYear} Quick Ed Solutions Pvt Ltd. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            {/* <span>•</span>
            <a href="#placement">Placement Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}