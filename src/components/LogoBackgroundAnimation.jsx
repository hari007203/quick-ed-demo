import React from 'react';
import './LogoBackgroundAnimation.css';

// Ember particles for the monument — same as original hero
const heroParticles = [
  { top: '22%', left: '32%', width: '3px', height: '3px', animationDelay: '0s', animationDuration: '8s' },
  { top: '38%', left: '65%', width: '2px', height: '2px', animationDelay: '1.5s', animationDuration: '11s' },
  { top: '56%', left: '42%', width: '4px', height: '4px', animationDelay: '3s', animationDuration: '9s' },
  { top: '72%', left: '78%', width: '2px', height: '2px', animationDelay: '2s', animationDuration: '12s' },
  { top: '28%', left: '88%', width: '3px', height: '3px', animationDelay: '4s', animationDuration: '10s' },
  { top: '82%', left: '52%', width: '2px', height: '2px', animationDelay: '0.8s', animationDuration: '13s' },
  { top: '44%', left: '18%', width: '3px', height: '3px', animationDelay: '2.2s', animationDuration: '9s' },
  { top: '68%', left: '92%', width: '2px', height: '2px', animationDelay: '3.5s', animationDuration: '11s' },
];

/**
 * Global Background Layer
 * position: fixed — stays constant across the full page on all scrolls
 *
 * Layers (bottom → top):
 *  1. Deep emerald + crimson atmospheric canvas
 *  2. Cyber matrix grid
 *  3. Logo watermark (upper-right, secondary lower-left)
 *  4. 3D "Quick Ed Solutions" monument with laser + lens flare — fixed right side
 */
export default function LogoBackgroundAnimation() {
  return (
    <div className="qe-global-ambient-backdrop" aria-hidden="true">

      {/* ── 1. Atmospheric canvas ─────────────────────────────────────────── */}
      <div className="qe-ambient-atmosphere" />
      <div className="qe-top-emerald-glow" />
      <div className="qe-bottom-crimson-warmth" />

      {/* ── 2. Cyber matrix grid ─────────────────────────────────────────── */}
      <div className="qe-bg-grid" />

      {/* ── 3. Logo watermarks ───────────────────────────────────────────── */}
      <div className="qe-logo-watermark qe-watermark-primary">
        <div className="qe-watermark-glow-ring" />
        <div className="qe-watermark-frame">
          <img src="/quick-ed-logo.jpg" alt="" className="qe-watermark-img" />
        </div>
      </div>

      <div className="qe-logo-watermark qe-watermark-secondary">
        <div className="qe-watermark-glow-ring qe-ring-secondary" />
        <div className="qe-watermark-frame qe-frame-secondary">
          <img src="/quick-ed-logo.jpg" alt="" className="qe-watermark-img qe-img-secondary" />
        </div>
      </div>

      {/* ── 4. 3D Brand Monument — fixed right column, visible site-wide ── */}
      <div className="qe-hero-3d-col">
        {/* Volumetric crimson nebula behind monument */}
        <div className="qe-hero-crimson-nebula" />

        {/* Monument wrapper with 3D perspective tilt */}
        <div className="qe-hero-monument-wrap">
          <div className="qe-hero-monument-inner">

            {/* Primary diagonal laser beam streak */}
            <div className="qe-hero-laser-beam" />

            {/* Brilliant lens flare starburst */}
            <div className="qe-hero-lens-flare">
              <div className="qe-flare-core" />
              <div className="qe-flare-spike-h" />
              <div className="qe-flare-spike-v" />
              <div className="qe-flare-halo" />
            </div>

            {/* 3D Volumetric Brand Name */}
            {/* <div className="qe-hero-brand-text">
              <span className="qe-3d-word-green">Quick Ed </span>
              <span className="qe-3d-word-red">Solutions</span>
            </div> */}

            {/* Glowing tagline */}
            {/* <div className="qe-hero-tagline">LEARN. BUILD. SUCCEED.</div> */}

            {/* Secondary refraction laser line */}
            <div className="qe-hero-laser-refract" />
          </div>
        </div>

        {/* Floating ember particles */}
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
      </div>

    </div>
  );
}
