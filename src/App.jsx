import React, { useState, useEffect, useRef } from 'react';
import IntroLoader from './components/IntroLoader';
import LogoBackgroundAnimation from './components/LogoBackgroundAnimation';
import Navbar from './components/Navbar';
import ToolsMarquee from './components/ToolsMarquee';
import HeroAboutAgency from './components/HeroAboutAgency';
import CoursesSection from './components/CoursesSection';
import TrainersSection from './components/TrainersSection';
import WhyChooseUs from './components/WhyChooseUs';
import QuickContactStrip from './components/QuickContactStrip';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';
import './App.css';

/**
 * Intersection Observer hook — adds .is-visible class when element enters viewport
 */
function useRevealOnScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function RevealSection({ id, className = '', children }) {
  const ref = useRef(null);
  useRevealOnScroll(ref);
  return (
    <div ref={ref} id={id} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [globalBrochureOpen, setGlobalBrochureOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 1. Opening Animated Intro Sequence with the User's Logo */}
      {!introComplete && (
        <IntroLoader onComplete={() => setIntroComplete(true)} />
      )}

      {/* 2. Main Site Shell */}
      <div
        className="app-shell"
        id="home"
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s'
        }}
      >
        {/* Animated Background Logo Watermark & Cyber Glow */}
        <LogoBackgroundAnimation />

        {/* Sticky Header Navbar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Tools Display Scroll */}
        <ToolsMarquee />

        {/* Hero + About Agency + Animated Video */}
        <RevealSection id="about">
          <HeroAboutAgency
            onExploreCoursesClick={() => scrollToSection('courses')}
            onBrochureClick={() => setGlobalBrochureOpen(true)}
          />
        </RevealSection>

        {/* 5 Flagship Courses */}
        <RevealSection id="courses">
          <CoursesSection />
        </RevealSection>

        {/* Corporate Trainers */}
        <RevealSection id="trainers">
          <TrainersSection />
        </RevealSection>

        {/* Why QuickEd + Motivational Speech */}
        <RevealSection id="why-us">
          <WhyChooseUs />
        </RevealSection>

        {/* Contact Trio Strip */}
        <RevealSection id="contact">
          <QuickContactStrip />
        </RevealSection>

        {/* Footer */}
        <Footer onNavigate={scrollToSection} />

        {/* Global Brochure Modal */}
        <BrochureModal
          isOpen={globalBrochureOpen}
          onClose={() => setGlobalBrochureOpen(false)}
          courseTitle="Quick Ed Solutions All Flagship Programs"
        />
      </div>
    </>
  );
}
