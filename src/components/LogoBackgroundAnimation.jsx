import React from 'react';
import './LogoBackgroundAnimation.css';

// Subtle ambient ember particles behind the monument
const heroParticles = [
  { top: '18%', left: '25%', width: '3px', height: '3px', animationDelay: '0s', animationDuration: '8s' },
  { top: '34%', left: '60%', width: '2px', height: '2px', animationDelay: '1.5s', animationDuration: '11s' },
  { top: '52%', left: '38%', width: '3px', height: '3px', animationDelay: '3s', animationDuration: '9s' },
  { top: '68%', left: '75%', width: '2px', height: '2px', animationDelay: '2s', animationDuration: '12s' },
  { top: '24%', left: '85%', width: '3px', height: '3px', animationDelay: '4s', animationDuration: '10s' },
  { top: '80%', left: '48%', width: '2px', height: '2px', animationDelay: '0.8s', animationDuration: '13s' },
  { top: '42%', left: '15%', width: '2px', height: '2px', animationDelay: '2.2s', animationDuration: '9s' },
  { top: '64%', left: '90%', width: '2px', height: '2px', animationDelay: '3.5s', animationDuration: '11s' },
];

/**
 * Global Background Animation Layer
 * position: fixed — constant across the complete website on every page scroll
 *
 * Layering architecture:
 *   Layer 1 — Background Effects (z-index 1-2):
 *     - Deep black & dark green atmospheric canvas
 *     - Cyber matrix grid
 *     - Volumetric crimson nebula & floating ember particles
 *     - Moving red light streaks, laser beam, lens flare, light sweep
 *
 *   Layer 2 — Quick Ed Solutions Logo (z-index 10):
 *     - 3D-style metallic green & vibrant red branding text
 *     - Glowing uppercase tagline "LEARN. BUILD. SUCCEED."
 *     - Sits firmly IN FRONT of the background effects
 *
 *   Layer 3 — Website Content (in app-shell, z-index 2-100):
 *     - Headings, paragraphs, buttons, cards, navbar
 *     - Completely interactive (pointer-events: none on background layer)
 */
export default function LogoBackgroundAnimation() {
  return (
    <div className="qe-global-ambient-backdrop" aria-hidden="true">

      {/* ── LAYER 1: Cinematic Deep Black & Dark Green Atmospheric Canvas ── */}
      <div className="qe-ambient-atmosphere" />
      <div className="qe-top-emerald-glow" />
      <div className="qe-bottom-crimson-warmth" />

      {/* Cyber matrix grid */}
      <div className="qe-bg-grid" />

      {/* ── SINGLE GLOBAL QUICK ED SOLUTIONS BRANDING ── */}
      <div className="qe-hero-3d-col">
        {/* Layer 1 Effect: Volumetric crimson nebula behind monument */}
        <div className="qe-hero-crimson-nebula" />

        {/* Layer 1 Effect: Soft glowing ember particles */}
        <div className="qe-hero-particles-layer">
          {heroParticles.map((p, idx) => (
            <span
              key={idx}
              className="qe-ember-particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.width,
                height: p.height,
                animationDelay: p.animationDelay,
                animationDuration: p.animationDuration,
              }}
            />
          ))}
        </div>

        {/* 3D Perspective Monument Container */}
        <div className="qe-hero-monument-wrap">

          {/* LAYER 1: Cinematic Lighting & Background Effects — BEHIND the logo */}
          <div className="qe-monument-bg-effects">
            {/* Primary diagonal neon laser beam streak */}
            <div className="qe-hero-laser-beam" />

            {/* Lens flare starburst */}
            {/* <div className="qe-hero-lens-flare">
              <div className="qe-flare-core" />
              <div className="qe-flare-spike-h" />
              <div className="qe-flare-spike-v" />
              <div className="qe-flare-halo" />
            </div> */}

            {/* Moving red light rays & atmospheric sweep */}
            <div className="hero-light-sweep" />

            {/* Secondary refraction laser line */}
            <div className="qe-hero-laser-refract" />
          </div>

          {/* LAYER 2: Quick Ed Solutions Logo & Branding — IN FRONT of background effects */}
          <div className="qe-hero-monument-inner">
            {/* 3D Volumetric Brand Name */}
            <div className="qe-hero-brand-text">
              <span className="qe-3d-word-green">Quick Ed </span>
              <span className="qe-3d-word-red">Solutions</span>
            </div>

            {/* Glowing Tagline */}
            <div className="qe-hero-tagline">LEARN. BUILD. SUCCEED.</div>
          </div>

        </div>
      </div>

    </div>
  );
}
