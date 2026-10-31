import React from 'react';

/**
 * Brand Logo Component for Quick Ed Solutions
 * Exact match to reference screenshot:
 * - Rounded QE emblem frame
 * - "Quick Ed" in pure white + "Solutions" in vibrant crimson red
 * - Tagline "LEARN. BUILD. SUCCEED." in uppercase red underneath
 */
export default function Logo({ size = 'default', showSubtitle = true }) {
  const isSmall = size === 'small';
  const imgDimension = isSmall ? 38 : 46;

  return (
    <div 
      className="qed-brand-wrapper"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '10px' : '14px',
        cursor: 'pointer',
        userSelect: 'none',
        textDecoration: 'none'
      }}
    >
      {/* Container for the logo photo with dark charcoal frame and subtle red border */}
      <div 
        className="brand-logo-frame"
        style={{
          position: 'relative',
          width: `${imgDimension}px`,
          height: `${imgDimension}px`,
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1.5px solid rgba(185, 28, 28, 0.45)',
          boxShadow: '0 0 16px rgba(185, 28, 28, 0.25), 0 4px 12px rgba(0, 0, 0, 0.6)',
          background: '#0B130E',
          flexShrink: 0,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease'
        }}
      >
        <img 
          src="/quick-ed-logo.jpg" 
          alt="Quick Ed Solutions"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        {/* Soft subtle sheen */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Brand Typography matching screenshot */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span 
            style={{ 
              fontSize: isSmall ? '1.15rem' : '1.38rem', 
              fontWeight: 800, 
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
            }}
          >
            Quick Ed
          </span>
          <span 
            style={{ 
              fontSize: isSmall ? '1.15rem' : '1.38rem', 
              fontWeight: 800, 
              color: '#DC2626',
              letterSpacing: '-0.025em',
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
            }}
          >
            Solutions
          </span>
        </div>

        {showSubtitle && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '3px' }}>
            <span 
              style={{ 
                fontSize: isSmall ? '0.6rem' : '0.66rem', 
                fontWeight: 700, 
                color: '#DC2626',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: "'JetBrains Mono', monospace"
              }}
            >
              LEARN. BUILD. SUCCEED.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
