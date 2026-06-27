import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Hero() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  return (
    <section id="hero" className="section-full" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #4A4038 0%, #6B5E52 40%, #8A7E72 100%)',
      position: 'relative', overflow: 'hidden',
      padding: isMobile ? '80px 20px 60px' : 0,
    }}>
      <div style={{ textAlign: 'center', zIndex: 1, animation: 'fadeInUp 1s ease forwards' }}>
        <p style={{
          fontSize: isMobile ? '0.8rem' : '1rem',
          letterSpacing: '0.3em', color: 'var(--accent-light)',
          marginBottom: 24, fontWeight: 300, textTransform: 'uppercase',
        }}>Product Operations</p>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.8rem, 5vw, 4.5rem)',
          fontWeight: 700, color: 'var(--white)', letterSpacing: '0.06em',
          lineHeight: 1.2, marginBottom: 20,
        }}>
          <AnimatedText text={'\u55e8\uff01\u6b22\u8fce\u4e86\u89e3\u6211~'} as="span" duration={0.5} delay={0.08} underlineHeight="3px" underlineOffset="-8px" />
        </h1>
        <p style={{
          fontSize: isMobile ? 'clamp(0.85rem, 3vw, 1.1rem)' : 'clamp(1.1rem, 1.8vw, 1.4rem)',
          color: 'rgba(255,255,255,0.7)', fontWeight: 300, maxWidth: 500,
          margin: '0 auto', letterSpacing: '0.04em',
        }}>
          {'\u4ee5\u6570\u636e\u9a71\u52a8\u589e\u957f\uff0c\u7528\u4ea7\u54c1\u601d\u7ef4\u8fde\u63a5\u7528\u6237\u4e0e\u4ef7\u503c'}
        </p>
      </div>
      <a href="#education" style={{
        position: 'absolute', bottom: isMobile ? 24 : 40,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em',
        animation: 'fadeIn 1.5s ease 0.8s forwards', opacity: 0,
      }}>
        <span>{'\u6eda\u52a8\u9f20\u6807\u4ee5\u4e86\u89e3\u66f4\u591a'}</span>
        <ChevronDown size={20} style={{ animation: 'fadeInUp 1.5s ease infinite alternate' }} />
      </a>
    </section>
  );
}
