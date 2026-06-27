import { useState, useEffect, useCallback } from 'react';
import { ArrowUp, Mail, Menu, X } from 'lucide-react';
import useBreakpoint from '../hooks/useBreakpoint';

const NAV_ITEMS = [
  { label: '\u9996\u9875', href: '#hero' },
  { label: '\u6559\u80b2\u80cc\u666f', href: '#education' },
  { label: '\u5de5\u4f5c\u7ecf\u5386', href: '#work' },
  { label: '\u9879\u76ee\u7ecf\u5386', href: '#project' },
  { label: '\u6821\u56ed\u7ecf\u5386', href: '#campus' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const bp = useBreakpoint();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ['hero', 'education', 'work', 'project', 'campus', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleNavClick = useCallback(() => setMobileOpen(false), []);

  const navColor = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.75)';
  const activeColor = scrolled ? 'var(--accent-dark)' : 'var(--white)';
  const btnBg = scrolled ? 'var(--accent-dark)' : 'rgba(255,255,255,0.18)';
  const btnBorder = scrolled ? 'none' : '1px solid rgba(255,255,255,0.35)';
  const textColor = scrolled ? 'var(--text-primary)' : 'var(--white)';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: bp === 'mobile' ? '0 16px' : '0 clamp(20px, 4vw, 60px)',
      height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(245, 240, 235, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <button onClick={scrollToTop} aria-label="\u56de\u5230\u9996\u9875"
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: bp === 'mobile' ? '0.9rem' : '1.05rem',
          fontWeight: 600, color: textColor,
          fontFamily: 'var(--font-heading)', letterSpacing: '0.02em', transition: 'color 0.4s ease',
        }}>
        <ArrowUp size={18} strokeWidth={2.5} />
        <span style={{ display: bp === 'mobile' ? 'none' : 'inline' }}>Home</span>
      </button>

      {bp !== 'mobile' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: bp === 'tablet' ? 24 : 36 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a key={item.href} href={item.href} style={{
                fontSize: '0.88rem', fontWeight: 500,
                color: isActive ? activeColor : navColor,
                transition: 'color 0.3s ease',
                borderBottom: isActive ? '2px solid' : '2px solid transparent',
                paddingBottom: 4, letterSpacing: '0.02em',
              }}>{item.label}</a>
            );
          })}
        </div>
      )}

      {bp !== 'mobile' && (
        <a href="#contact" style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 28,
          fontSize: '0.88rem', fontWeight: 500, background: btnBg, color: 'var(--white)',
          border: btnBorder, backdropFilter: 'blur(8px)', transition: 'all 0.3s ease',
        }}><Mail size={16} />{'\u8054\u7cfb\u6211'}</a>
      )}

      {bp === 'mobile' && (
        <button onClick={() => setMobileOpen(o => !o)}
          style={{ color: textColor, padding: 4, background: 'none', border: 'none' }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {bp === 'mobile' && mobileOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0,
          background: 'rgba(245,240,235,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: 4, zIndex: 999,
        }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a key={item.href} href={item.href} onClick={handleNavClick} style={{
                fontSize: '1rem', fontWeight: 500, padding: '12px 0',
                color: isActive ? 'var(--accent-dark)' : 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-light)',
              }}>{item.label}</a>
            );
          })}
          <a href="#contact" onClick={handleNavClick} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '12px 0', marginTop: 8, borderRadius: 28,
            background: 'var(--accent-dark)', color: 'var(--white)', fontSize: '0.9rem', fontWeight: 500,
          }}><Mail size={16} />{'\u8054\u7cfb\u6211'}</a>
        </div>
      )}
    </nav>
  );
}
