import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import useBreakpoint from '../hooks/useBreakpoint';

export default function ContactSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #4A4038 0%, #6B5E52 40%, #8A7E72 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '80px 20px' : '120px 40px',
      }}
    >
      <div style={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,181,165,0.12) 0%, transparent 70%)',
        bottom: '-12%',
        right: '-8%',
      }} />

      <div style={{
        textAlign: 'center',
        zIndex: 1,
        maxWidth: 700,
        padding: '0 20px',
        width: '100%',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: isMobile ? 'clamp(1.6rem, 6vw, 2.2rem)' : isTablet ? 'clamp(1.8rem, 4vw, 2.6rem)' : 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 700,
          color: 'var(--white)',
          marginBottom: 20,
          letterSpacing: '0.04em',
          lineHeight: 1.3,
        }}>
          {'\u671f\u5f85\u4e0e\u4f60\u5efa\u7acb\u8054\u7cfb'}
        </h2>
        <p style={{
          fontSize: isMobile ? '0.9rem' : '1.05rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.8,
          marginBottom: isMobile ? 32 : 48,
        }}>
          {'\u5982\u679c\u4f60\u5bf9\u6211\u7684\u7ecf\u5386\u611f\u5174\u8da3\uff0c\u6216\u6709\u5408\u4f5c\u673a\u4f1a\uff0c\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u3002'}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 12 : 18,
          alignItems: 'center',
        }}>
          {[
            { icon: Mail, label: 'keping0715@163.com' },
            { icon: Phone, label: '15365010718' },
            { icon: MapPin, label: '\u6c5f\u82cf \u00b7 \u5357\u4eac' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: isMobile ? '12px 20px' : '14px 28px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              width: isMobile ? '90%' : 320,
              justifyContent: 'center',
              transition: 'background 0.3s ease',
            }}>
              <Icon size={18} color='var(--accent-light)' />
              <span style={{ fontSize: isMobile ? '0.82rem' : '0.92rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>{label}</span>
            </div>
          ))}
        </div>

        <a
          href='#hero'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: isMobile ? 32 : 48,
            padding: isMobile ? '10px 24px' : '12px 32px',
            borderRadius: 28,
            background: 'var(--accent-dark)',
            color: 'var(--white)',
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            transition: 'all 0.3s ease',
          }}
        >
          {'\u56de\u5230\u9876\u90e8'}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
