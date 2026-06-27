import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Star } from 'lucide-react';
import avatar from '../assets/avatar.jpg';
import eduDashboard from '../assets/edu-dashboard.png';
import eduSales from '../assets/edu-sales.png';
import useBreakpoint from '../hooks/useBreakpoint';

export default function EducationStrengths() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const gap = isMobile ? 20 : isTablet ? 32 : 60;
  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1.2fr' : '1fr 1.4fr';
  const rightFlexDir = isMobile ? 'column' : 'row';

  return (
    <section id="education" ref={ref} className="section-full" style={{
      background: 'var(--bg-primary)',
      display: 'flex', alignItems: isMobile ? 'stretch' : 'center',
      padding: isMobile ? '80px 0 60px' : '120px 0',
    }}>
      <div className="section-inner" style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gap,
        alignItems: 'start',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        {/* Left column: avatar */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', paddingTop: isMobile ? 0 : 40,
        }}>
          <div style={{
            width: '100%', maxWidth: 380, borderRadius: 'var(--radius-lg)',
            overflow: 'hidden', boxShadow: 'var(--shadow-md)',
          }}>
            <img src={avatar} alt="avatar" style={{
              width: '100%', height: 'auto', display: 'block',
              objectFit: 'cover', objectPosition: 'center top',
            }} />
          </div>
        </div>

        {/* Right column: row layout */}
        <div style={{
          display: 'flex', flexDirection: rightFlexDir, gap: isMobile ? 20 : 32,
          alignItems: 'flex-start',
        }}>
          {/* Cards (65%) */}
          <div style={{
            flex: isMobile ? 'none' : '0 0 65%',
            display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 28,
            width: isMobile ? '100%' : 'auto',
          }}>
            <div className="card"
              style={{ opacity: visible ? undefined : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'var(--bg-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><GraduationCap size={20} color="var(--accent-dark)" /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600 }}>{'\u6559\u80b2\u80cc\u666f'}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <p><strong style={{ color: 'var(--text-primary)' }}>{'\u5357\u4eac\u519c\u4e1a\u5927\u5b66'}</strong> {'\u2014 \u4fe1\u606f\u7ba1\u7406\u4e0e\u4fe1\u606f\u7cfb\u7edf'}</p>
                <p>2021.09 - 2025.06</p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
                  {'\u4e3b\u8981\u8bfe\u7a0b\uff1a\u7ba1\u7406\u5b66\u539f\u7406\u3001\u6570\u636e\u5e93\u539f\u7406\u3001\u91cf\u5316\u7814\u7a76\u4e0e\u7edf\u8ba1\u5206\u6790\u3001\u4fe1\u606f\u8d44\u6e90\u7ba1\u7406\u7b49\u3002\u5176\u4e2d\uff1a\u9762\u5411\u5bf9\u8c61\u7a0b\u5e8f\u8bbe\u8ba1\uff08A\uff09\u3001\u6570\u636e\u7ed3\u6784\uff0893\u5206\uff09\u3001\u6570\u636e\u6807\u6ce8\u65b9\u6cd5\u4e0e\u5b9e\u8df5\uff0893\u5206\uff09...'}
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
                  {'\u672c\u79d1\u671f\u95f4\uff0c\u83b7\u5f97\u9662\u4f18\u79c0\u56e2\u5458\u3001\u4f18\u79c0\u56e2\u5e72\u90e8\u3001\u5927\u5b66\u751f\u7814\u7a76\u8bad\u7ec3\u8ba1\u5212\uff08SRT\uff09\u6821\u7ea7\u5956\u9879\u3001CET4\u7b49\uff0c\u82f1\u8bed\u53ef\u4f5c\u4e3a\u5de5\u4f5c\u8bed\u8a00\u3002'}
                </p>
              </div>
            </div>

            <div className="card"
              style={{ opacity: visible ? undefined : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'var(--bg-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Star size={20} color="var(--accent-dark)" /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600 }}>{'\u4e2a\u4eba\u4f18\u52bf'}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <p>- {'\u53ef\u5feb\u901f\u9002\u5e94\u4e0d\u540c\u7c7b\u578b\u5de5\u4f5c\u4efb\u52a1'}</p>
                <p>- {'\u5bf9\u5e02\u573a\u8d8b\u52bf\u3001\u5ba2\u6237\u53cd\u9988\u4fdd\u6301\u9ad8\u654f\u611f\u5ea6'}</p>
                <p>- {'\u6570\u636e\u5206\u6790\u4e0e\u6d1e\u5bdf\uff1a\u638c\u63e1 SQL\u3001BI \u770b\u677f\u642d\u5efa\u3001SPSS \u6570\u636e\u5206\u6790\u7b49\u6280\u80fd'}</p>
                <p>- {'\u5177\u5907\u8de8\u90e8\u95e8\u6c9f\u901a\u534f\u8c03\u80fd\u529b\uff0c\u63a8\u52a8\u9879\u76ee\u9ad8\u6548\u843d\u5730'}</p>
              </div>
            </div>
          </div>

          {/* Images (35%) */}
          <div style={{
            flex: isMobile ? 'none' : '0 0 32%',
            display: 'flex', flexDirection: 'column', gap: 20,
            alignItems: 'center', justifyContent: 'flex-start',
            paddingTop: 4, width: isMobile ? '100%' : 'auto',
          }}>
            <img src={eduDashboard} alt="dashboard" style={{
              width: '100%', height: 'auto', objectFit: 'contain',
              display: 'block', borderRadius: 12, boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
            }} />
            <img src={eduSales} alt="sales" style={{
              width: '100%', height: 'auto', objectFit: 'contain',
              display: 'block', borderRadius: 12, boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
