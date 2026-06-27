import { useRef, useEffect, useState, useCallback } from 'react';
import { Briefcase } from 'lucide-react';
import useBreakpoint from '../hooks/useBreakpoint';

const PAGE_COUNT = 2;

function SubNav({ current, total, onJump }) {
  return (
    <div style={{
      position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', alignItems: 'center', gap: 10, zIndex: 50,
    }}>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} onClick={() => onJump(i)} aria-label={`Page ${i+1}`}
          style={{
            width: current === i ? 32 : 10, height: 10, borderRadius: 5, border: 'none',
            background: current === i ? 'var(--accent-dark)' : 'var(--accent-light)',
            transition: 'all 0.35s ease', cursor: 'pointer',
          }} />
      ))}
    </div>
  );
}

export default function WorkExperience() {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  const handleWheel = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
    if (e.deltaY > 0 && !atBottom) { e.preventDefault(); el.scrollBy({ top: clientHeight, behavior: 'smooth' }); }
    else if (e.deltaY < 0 && !atTop) { e.preventDefault(); el.scrollBy({ top: -clientHeight, behavior: 'smooth' }); }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const page = Math.round(el.scrollTop / el.clientHeight);
      setCurrentPage(Math.min(page, PAGE_COUNT - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const jumpToPage = (idx) => {
    const el = containerRef.current;
    if (el) el.scrollTo({ top: idx * el.clientHeight, behavior: 'smooth' });
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.78rem' : '0.88rem',
    color: 'var(--accent-dark)', fontWeight: 500,
    textAlign: 'center', marginBottom: isMobile ? 16 : 32,
    letterSpacing: '0.03em', padding: isMobile ? '0 16px' : 0,
  };
  const cardTitleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: isMobile ? '0.95rem' : '1.05rem',
    fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12,
  };
  const cardTextStyle = {
    fontSize: isMobile ? '0.82rem' : '0.88rem',
    color: 'var(--text-secondary)', lineHeight: 1.75,
  };

  return (
    <div style={{ position: 'relative' }}>
      <SubNav current={currentPage} total={PAGE_COUNT} onJump={jumpToPage} />
      <div id="work" ref={containerRef}
        style={{ height: '100vh', overflowY: 'auto', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>

        {/* PAGE 1: Tianma */}
        <div style={{
          height: '100vh', scrollSnapAlign: 'start',
          display: 'flex', flexDirection: 'column',
          background: 'var(--bg-secondary)', position: 'relative',
        }}>
          <div className="section-title" style={{ marginBottom: 12, fontSize: isMobile ? 'clamp(1.4rem, 4vw, 2rem)' : undefined }}>{'\u5de5\u4f5c\u7ecf\u5386'}</div>
          <p style={subtitleStyle}>2025.07 - 2026.02 &nbsp;·&nbsp; {'\u5929\u9a6c\u7f51\u7edc\u79d1\u6280\u96c6\u56e2'} &nbsp;·&nbsp; {'\u4ea7\u54c1\u8fd0\u8425'}</p>
          <div style={{
            flex: 1, maxWidth: 'var(--max-width)', margin: '0 auto', width: '100%',
            padding: isMobile ? '0 16px 80px' : '0 60px 80px',
            display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 20,
          }}>
            <div className="card" style={{ flex: '0 0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Briefcase size={16} color="var(--accent-dark)" />
                <span style={cardTitleStyle}>{'\u5de5\u4f5c\u5185\u5bb9'}</span>
              </div>
              <p style={cardTextStyle}>
                {'\u8d1f\u8d23\u9762\u5411\u653f\u5e9c\u4e8b\u4e1a\u5355\u4f4d\u7684\u8fd0\u52a8\u6237\u5916\u91c7\u8d2d\u4ea7\u54c1\u8fd0\u8425\uff08H5/\u5c0f\u7a0b\u5e8f\uff09\uff0c\u6db5\u76d6\u9700\u6c42\u6316\u6398\u3001\u7ade\u54c1\u5206\u6790\u3001\u539f\u578b\u8bbe\u8ba1\u3001\u6570\u636e\u76d1\u63a7\u3001\u7528\u6237\u589e\u957f\u7684\u5168\u94fe\u8def\u3002\u671f\u95f4\u8d1f\u8d23\u4ea7\u54c1 0-1 \u7684\u63a8\u8fdb\u843d\u5730\u5e76\u534f\u540c\u56e2\u961f\u4e0d\u65ad\u4f18\u5316\u4ea7\u54c1\u3002\u901a\u8fc7\u7528\u6237\u589e\u957f\u9a71\u52a8\u3001\u7b56\u7565\u8fed\u4ee3\u7b49\u624b\u6bb5\u8f85\u52a9\u63a8\u8fdb\u76ee\u6807\u8fbe\u6210\uff0c\u4e3a\u4ea7\u54c1\u8d1f\u8d23\u3002'}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 12 : 20, flex: '1 1 0',
            }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <Briefcase size={16} color="var(--accent-dark)" />
                  <span style={cardTitleStyle}>{'\u5de5\u4f5c\u4efb\u52a1'}</span>
                </div>
                <ul style={{ ...cardTextStyle, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['\u9700\u6c42\u6316\u6398\u4e0e\u6307\u6807\u5b9a\u4e49', '\u5e02\u573a\u8c03\u7814\u4e0e\u7ade\u54c1\u5206\u6790', '\u524d\u7aef\u642d\u5efa\u4e0e UI \u8bbe\u8ba1', '\u6570\u636e\u5206\u6790\u4e0e\u7b56\u7565\u8fed\u4ee3', '\u667a\u6167\u8d4b\u80fd\u5ba2\u670d\u670d\u52a1'].map((t, i) => (
                    <li key={i} style={{ paddingLeft: 14, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&#8226;</span>{t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <Briefcase size={16} color="var(--accent-dark)" />
                  <span style={cardTitleStyle}>{'\u5de5\u4f5c\u6210\u679c'}</span>
                </div>
                <div style={{
                  flex: 1, display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
                  gap: isMobile ? 12 : 20, alignContent: 'center',
                }}>
                  {[
                    { num: '100%', label: '\u63a8\u8fdb\u9879\u76ee\u843d\u5730' },
                    { num: '10+', label: '\u4fee\u590d\u6838\u5fc3\u4f53\u9a8c\u65ad\u70b9' },
                    { num: '3\u9879', label: '\u7528\u6237\u6307\u6807\u589e\u957f' },
                    { num: '12%', label: '\u6708\u9500\u552e\u989d\u73af\u6bd4\u63d0\u5347' },
                  ].map(({ num, label }) => (
                    <div key={label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 700, color: 'var(--accent-dark)', lineHeight: 1.1 }}>{num}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: 6 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2: Lingxing */}
        <div style={{
          height: '100vh', scrollSnapAlign: 'start',
          display: 'flex', flexDirection: 'column',
          background: 'var(--bg-primary)', position: 'relative',
        }}>
          <div className="section-title" style={{ marginBottom: 12, fontSize: isMobile ? 'clamp(1.4rem, 4vw, 2rem)' : undefined }}>{'\u5de5\u4f5c\u7ecf\u5386'}</div>
          <p style={subtitleStyle}>2024.06 - 2024.11 &nbsp;·&nbsp; {'\u9886\u884c\u79d1\u6280\uff08\u5b9e\u4e60\uff09'} &nbsp;·&nbsp; AI{'\u4ea7\u54c1\u8fd0\u8425'}</p>
          <div style={{
            flex: 1, maxWidth: isMobile ? '100%' : 1000, margin: '0 auto', width: '100%',
            padding: isMobile ? '0 16px 80px' : '0 60px 80px',
            display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 20,
          }}>
            <div className="card" style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Briefcase size={16} color="var(--accent-dark)" />
                <span style={cardTitleStyle}>{'\u5de5\u4f5c\u5185\u5bb9'}</span>
              </div>
              <p style={{ ...cardTextStyle, flex: 1 }}>
                {'\u8d1f\u8d23\u5c06\u5927\u6a21\u578b\u4e0e\u667a\u80fd\u4f53\u843d\u5730\u8f6c\u5316\u5230\u5b9e\u9645\u7684\u7528\u6237\u4f53\u9a8c\u4e2d\uff0c\u5e76\u5c06AI\u8d4b\u80fd\u5230\u4e1a\u52a1\u4e2d\uff0c\u6301\u7eed\u8f6c\u5316\u4e3a\u53ef\u8861\u91cf\u7684\u4e1a\u52a1\u4ef7\u503c\u3002\u4ece\u77e5\u8bc6\u6784\u5efa\u5230\u667a\u80fd\u4f53\u4f18\u5316\uff0c\u5168\u7a0b\u53c2\u4e0e\u5e76\u9a71\u52a8\u4ea7\u54c1\u7684\u843d\u5730\uff0c\u4f18\u5316\u4ea7\u54c1\u7684\u5b9e\u9645\u5e94\u7528\u3002'}
              </p>
            </div>

            <div className="card" style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Briefcase size={16} color="var(--accent-dark)" />
                <span style={cardTitleStyle}>{'\u5de5\u4f5c\u4efb\u52a1'}</span>
              </div>
              <div style={{
                flex: 1, display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gridTemplateRows: isMobile ? 'auto' : '1fr 1fr',
                gap: isMobile ? 10 : 16, alignContent: 'center',
              }}>
                {[
                  { title: '\u77e5\u8bc6\u4f53\u7cfb\u6784\u5efa\u4e0e\u68b3\u7406', desc: '\u5efa\u7acb\u5e76\u5b8c\u5584AI\u77e5\u8bc6\u5e93\u4e0e\u667a\u80fd\u4f53\u77e5\u8bc6\u56fe\u8c31' },
                  { title: '\u667a\u80fd\u4f53\u4f18\u5316\u4e0e\u6548\u679c\u63d0\u5347', desc: '\u6301\u7eed\u8c03\u4f18\u667a\u80fd\u4f53\u54cd\u5e94\u8d28\u91cf\u4e0e\u4e1a\u52a1\u51c6\u786e\u5ea6' },
                  { title: '\u4ea4\u4ed8\u652f\u6301', desc: '\u534f\u540c\u56e2\u961f\u5b8c\u6210\u4ea7\u54c1\u4ea4\u4ed8\u4e0e\u4e0a\u7ebf\u90e8\u7f72' },
                  { title: '\u7528\u6237\u53cd\u9988\u4e0e\u6d1e\u5bdf', desc: '\u6536\u96c6\u5206\u6790\u7528\u6237\u53cd\u9988\uff0c\u9a71\u52a8\u4ea7\u54c1\u8fed\u4ee3' },
                ].map(({ title, desc }) => (
                  <div key={title} style={{
                    padding: isMobile ? '12px 14px' : '14px 16px',
                    borderRadius: 10, background: 'var(--bg-secondary)',
                    display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'center',
                  }}>
                    <div style={{ fontSize: isMobile ? '0.82rem' : '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</div>
                    <div style={{ fontSize: isMobile ? '0.72rem' : '0.78rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

