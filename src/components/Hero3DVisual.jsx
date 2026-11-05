import { useState, useRef, useEffect } from 'react';
import quickLogo from '../assets/quick-ed-logo.webp';
import './Hero3DVisual.css';

/**
 * Sophisticated Technology-Inspired 3D Visual for Quick Ed Solutions Hero
 * - Floating geometric structures
 * - Dark metallic surfaces
 * - Abstract digital network elements
 * - Subtle red illumination & soft reflections
 * - Gentle floating movement
 */
export default function Hero3DVisual() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(true);

  // Pause continuous 3D rotation & levitation animations when scrolled out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    // Only calculate tilt on devices with a mouse/fine pointer to prevent touch event churn
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Restrained, subtle tilt (-6deg to +6deg)
    const tiltX = -(y / (rect.height / 2)) * 6;
    const tiltY = (x / (rect.width / 2)) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`hero-3d-scene-container ${!isInView ? 'is-paused' : ''}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/* Ambient Red & Dark Green Radial Glow */}
      <div className="hero-3d-ambient-glow" />

      {/* 3D Perspective Stage */}
      <div 
        className="hero-3d-stage"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Outer Tech Geometric Grid Ring */}
        <div className="hero-3d-ring ring-outer">
          <svg className="ring-svg" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="185" className="ring-track" />
            <circle cx="200" cy="200" r="185" className="ring-pulse" />
          </svg>
        </div>

        {/* Middle Metallic Gyro Ring */}
        <div className="hero-3d-ring ring-middle">
          <svg className="ring-svg" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="145" className="ring-track-mid" />
            <circle cx="160" cy="160" r="145" className="ring-pulse-mid" />
          </svg>
        </div>

        {/* Inner Laser Halo */}
        <div className="hero-3d-laser-halo" />

        {/* Central Dark Metallic Monument Core */}
        <div className="hero-3d-core">
          {/* Metallic Bezel Frame */}
          <div className="hero-3d-monument-frame">
            <img 
              src={quickLogo} 
              alt="Quick Ed Solutions Emblem" 
              className="hero-3d-logo-img" 
              width="140"
              height="140"
              loading="eager"
              decoding="async"
            />
            {/* Soft Reflection Sheen */}
            <div className="hero-3d-sheen" />
          </div>

          {/* Core Red Laser Horizon */}
          <div className="hero-3d-laser-beam" />
        </div>

        {/* Abstract Digital Network Elements / Orbital Nodes */}
        <div className="hero-3d-node node-1">
          <span className="node-dot" />
          <span className="node-label">Full Stack Stacks</span>
        </div>

        <div className="hero-3d-node node-2">
          <span className="node-dot" />
          <span className="node-label">GenAI & LLMs</span>
        </div>

        <div className="hero-3d-node node-3">
          <span className="node-dot" />
          <span className="node-label">Cyber Defense</span>
        </div>

        <div className="hero-3d-node node-4">
          <span className="node-dot" />
          <span className="node-label">QA Automation</span>
        </div>

        {/* Floating Geometric Corner Accents */}
        <div className="hero-corner-bracket bracket-tl" />
        <div className="hero-corner-bracket bracket-tr" />
        <div className="hero-corner-bracket bracket-bl" />
        <div className="hero-corner-bracket bracket-br" />
      </div>
    </div>
  );
}
