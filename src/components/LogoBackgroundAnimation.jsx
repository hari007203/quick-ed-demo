import React from 'react';
import './LogoBackgroundAnimation.css';

/**
 * LogoBackgroundAnimation
 * Displays the logo as an ambient floating 3D watermark
 * floating in the background with particles and ambient depth glows.
 * Theme: Charcoal Black (#171717) + Forest Green (#06110C) + Crimson Red (#A31C1B)
 */
export default function LogoBackgroundAnimation() {
  return (
    <div className="logo-bg-viewport" aria-hidden="true">
      {/* Primary Hero Ambient Logo Watermark */}
      <div className="logo-bg-watermark watermark-hero">
        <div className="watermark-glow-ring" />
        <img 
          src="/quick-ed-logo.jpg" 
          alt="" 
          className="watermark-image"
        />
      </div>

      {/* Secondary Ambient Emblem Floating on Bottom Right */}
      <div className="logo-bg-watermark watermark-secondary">
        <img 
          src="/quick-ed-logo.jpg" 
          alt="" 
          className="watermark-image watermark-secondary-img"
        />
      </div>

      {/* Cyber Grid Lines for tech agency depth */}
      <div className="logo-bg-grid" />

      {/* Ambient Depth Flares */}
      <div className="ambient-flare flare-crimson" />
      <div className="ambient-flare flare-forest" />
    </div>
  );
}
