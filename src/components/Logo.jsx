import React from 'react';

/**
 * Brand Logo Component for Quick Ed Solutions
 * Theme: Charcoal Black (#171717) + Forest Green (#06110C) + Crimson Red (#A31C1B)
 */
export default function Logo({ size = 'default', showSubtitle = true, variant = 'nav' }) {
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
      {/* Container for the logo photo */}
      <div 
        className="brand-logo-frame"
        style={{
          position: 'relative',
          width: `${imgDimension}px`,
          height: `${imgDimension}px`,
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1.5px solid rgba(163, 28, 27, 0.45)',
          boxShadow: '0 0 16px rgba(163, 28, 27, 0.35), 0 4px 12px rgba(0,0,0,0.6)',
          background: '#171717',
          flexShrink: 0,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease'
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
        {/* Soft ambient inner sheen */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span 
            style={{ 
              fontSize: isSmall ? '1.15rem' : '1.35rem', 
              fontWeight: 800, 
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              fontFamily: "'Sora', sans-serif"
            }}
          >
            Quick Ed
          </span>
          <span 
            style={{ 
              fontSize: isSmall ? '1.15rem' : '1.35rem', 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D6DDD8 40%, #A31C1B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.025em',
              fontFamily: "'Sora', sans-serif"
            }}
          >
            Solutions
          </span>
        </div>

        {showSubtitle && (
          <div style={{ display: 'flex' , alignItems: 'center', gap: '6px', marginTop: '2px',paddingLeft:'18px' }}>
            <span 
              style={{ 
                fontSize: isSmall ? '0.62rem' : '0.68rem', 
                fontWeight: 700, 
                color: '#A31C1B',
                letterSpacing: '0.14em',
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
