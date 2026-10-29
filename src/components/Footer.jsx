import React from 'react';
import Logo from './Logo';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="qed-footer-root">
      <div className="qed-footer-container">
        {/* Wireframe Section 7: logo | quick links | contact us | social media logos */}
        <div className="footer-columns-grid">
          {/* 1. Logo & Mission */}
          <div className="footer-col col-brand">
            <Logo size="small" />
            <p className="footer-tagline">
              Quick Ed Solutions is a premier corporate tech training & placement agency 
              preparing students and engineers for high-impact roles in Full Stack Python & Java, Cybersecurity, and AI.
            </p>
            <span className="footer-reg-pill">● LEARN. BUILD. SUCCEED.</span>
          </div>

          {/* 2. Quick Links */}
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

          {/* 3. Contact Us */}
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
              <li>
                <span className="c-icon">⏰</span>
                <span>Mon - Sun: 9:00 AM - 9:00 PM IST</span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media Logos */}
          <div className="footer-col col-social">
            <h4 className="footer-heading">Social Media</h4>
            <p className="social-sub">Follow for daily architecture tips & placement alerts:</p>
            <div className="footer-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="f-soc" title="LinkedIn">💼</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="f-soc" title="YouTube">▶️</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="f-soc" title="Instagram">📸</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="f-soc" title="GitHub">🐙</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="f-soc" title="Discord">💬</a>
            </div>
            <div className="newsletter-box">
              <input type="email" placeholder="Student email for updates..." />
              <button type="button">Join</button>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Underline from the wireframe sketch */}
        <div className="footer-sketch-underline" />

        <div className="footer-bottom-bar">
          <p>© {currentYear} Quick Ed Solutions Pvt Ltd. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#placement">Placement Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
