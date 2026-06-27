import { useRef, useEffect, useState, useCallback } from 'react';
import { FolderOpen } from 'lucide-react';
import tiantuanFlow from '../assets/tiantuan-flow.png';
import tiantuanSite from '../assets/tiantuan-site.png';
import useBreakpoint from '../hooks/useBreakpoint';

const PAGE_COUNT = 2;

function SolutionCycle() {
  const steps = [
    { label: '\u786e\u8ba4\u95ee\u9898', angle: 0 },
    { label: '\u6d1e\u5bdf\u5206\u6790', angle: 90 },
    { label: '\u65b9\u6848\u5236\u5b9a', angle: 180 },
    { label: '\u95ed\u73af\u8fed\u4ee3', angle: 270 },
  ];
  const [hovered, setHovered] = useState(null);
  const size = 150;
  const r = 52;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, margin: '8px 0', flexWrap: 'wrap' }}>
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ position: 'absolute', top: 0, left: 0 }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--accent-light)" strokeWidth={3} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--accent-dark)" strokeWidth={3}
            strokeDasharray={2 * Math.PI * r}
            strokeDashoffset={hovered !== null ? 2 * Math.PI * r * (1 - (hovered + 1) / steps.length) : 2 * Math.PI * r * 0.75}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease', transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
        </svg>
        {steps.map(({ label, angle }, i) => {
          const rad = (angle - 90) * Math.PI / 180;
          const x = size / 2 + r * Math.cos(rad);
          const y = size / 2 + r * Math.sin(rad);
          const isH = hovered === i;
          return (
            <div key={label} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%) scale(1)', transition: 'all 0.3s ease', cursor: 'pointer', zIndex: isH ? 10 : 1 }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: isH ? 'var(--accent-dark)' : 'var(--white)',
                border: '2px solid var(--accent-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isH ? 'var(--shadow-md)' : 'var(--shadow-sm)', transition: 'all 0.3s ease' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: isH ? 'var(--white)' : 'var(--text-primary)',
                  textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
              </div>
            </div>
          );
        })}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          fontSize: '0.65rem', color: 'var(--text-light)', fontWeight: 500 }}>{'\u89e3\u51b3\u65b9\u6848'}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {steps.map(({ label }, i) => (
          <div key={label} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 10px', borderRadius: 6,
              background: hovered === i ? 'var(--bg-secondary)' : 'transparent', transition: 'background 0.3s ease', cursor: 'pointer' }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%',
              background: hovered === i ? 'var(--accent-dark)' : 'var(--bg-secondary)',
              color: hovered === i ? 'var(--white)' : 'var(--text-light)',
              fontSize: '0.65rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0 }}>{i + 1}</span>
            <span style={{ fontSize: '0.8rem', fontWeight: hovered === i ? 600 : 400,
              color: hovered === i ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubNav({ current, total, onJump }) {
  return (
    <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', alignItems: 'center', gap: 10, zIndex: 50 }}>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} onClick={() => onJump(i)} aria-label={`Page ${i+1}`}
          style={{ width: current === i ? 32 : 10, height: 10, borderRadius: 5, border: 'none',
            background: current === i ? 'var(--accent-dark)' : 'var(--accent-light)',
            transition: 'all 0.35s ease', cursor: 'pointer' }} />
      ))}
    </div>
  );
}

function HoverImage({ src, alt }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-light)', background: 'var(--bg-card)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer',
      flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }} />
    </div>
  );
}

function ProjectPage({ proj, pageIdx }) {
  const [tab, setTab] = useState(0);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  if (pageIdx === 1) {
    return (
      <div style={{
        height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column',
        background: 'var(--bg-secondary)', position: 'relative', overflow: 'auto',
      }}>
        <div style={{ textAlign: 'center', paddingTop: isMobile ? 20 : 32, marginBottom: 10, flexShrink: 0 }}>
          <div className="section-title" style={{ fontSize: isMobile ? 'clamp(1.4rem, 4vw, 2rem)' : '2.2rem',
            fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)',
            marginBottom: 4, letterSpacing: '0.04em' }}>{proj.name}</div>
          <p style={{ fontSize: '0.82rem', color: 'var(--accent-dark)', fontWeight: 500,
            letterSpacing: '0.03em', margin: 0 }}>{pageIdx + 1}/{PAGE_COUNT} · {proj.subtitle}</p>
        </div>
        <div style={{ flex: 1, minHeight: 0, maxWidth: 1000, margin: '0 auto', width: '100%',
          padding: isMobile ? '8px 16px 40px' : '8px 48px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.9,
            textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>{proj.card1.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{ width: 30, height: 30, borderRadius: 6, background: 'var(--bg-card)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FolderOpen size={16} color="var(--accent-dark)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{proj.card2.title}</h3>
          </div>
          {proj.card2.gridItems && (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12, flex: 1, minHeight: 0 }}>
              {proj.card2.gridItems.map((item, gi) => {
                const sepIdx = item.indexOf('\uff1a');
                const title = sepIdx >= 0 ? item.substring(0, sepIdx) : item;
                const body = sepIdx >= 0 ? item.substring(sepIdx + 1) : '';
                return (
                  <div key={gi} style={{
                    background: 'var(--bg-card)', borderRadius: 10, padding: isMobile ? '12px 14px' : '16px 18px',
                    display: 'flex', flexDirection: 'column', gap: 6,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-dark)',
                        color: 'var(--white)', fontSize: '0.65rem', fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{gi + 1}</span>
                      <span style={{ fontSize: isMobile ? '0.82rem' : '0.88rem', fontWeight: 600,
                        color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{title}</span>
                    </div>
                    <p style={{ fontSize: isMobile ? '0.76rem' : '0.82rem', color: 'var(--text-secondary)',
                      lineHeight: 1.65, margin: 0 }}>{body}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column',
      background: 'var(--bg-primary)', position: 'relative',
    }}>
      <div style={{ textAlign: 'center', paddingTop: isMobile ? 20 : 32, marginBottom: 10, flexShrink: 0 }}>
        <div className="section-title" style={{ fontSize: isMobile ? 'clamp(1.4rem, 4vw, 2rem)' : '2.2rem',
          fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)',
          marginBottom: 4, letterSpacing: '0.04em' }}>{proj.name}</div>
        <p style={{ fontSize: '0.82rem', color: 'var(--accent-dark)', fontWeight: 500,
          letterSpacing: '0.03em', margin: 0 }}>{pageIdx + 1}/{PAGE_COUNT} · {proj.subtitle}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 12, flexShrink: 0, padding: '0 16px' }}>
        {[proj.card1.title, proj.card2.title].map((tabName, ti) => (
          <button key={ti} onClick={() => setTab(ti)}
            style={{ padding: isMobile ? '6px 16px' : '7px 28px', borderRadius: 24, border: '1.5px solid',
              borderColor: tab === ti ? 'var(--accent-dark)' : 'var(--accent-light)',
              background: tab === ti ? 'var(--accent-dark)' : 'transparent',
              color: tab === ti ? 'var(--white)' : 'var(--text-secondary)',
              fontSize: isMobile ? '0.8rem' : '0.88rem', fontWeight: tab === ti ? 600 : 400,
              cursor: 'pointer', transition: 'all 0.3s ease',
              fontFamily: 'var(--font-heading)', letterSpacing: '0.02em' }}>{tabName}</button>
        ))}
      </div>
      <div style={{ maxWidth: 720, width: '100%', margin: '0 auto', padding: isMobile ? '0 16px' : '0 48px',
        textAlign: 'center', flexShrink: 0, marginBottom: 8 }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{proj.card1.desc}</p>
      </div>
      <div style={{ flex: 1, minHeight: 0, maxWidth: 1000, margin: '0 auto', width: '100%',
        padding: isMobile ? '0 16px 20px' : '0 48px 20px', overflow: 'hidden' }}>
        {tab === 0 && (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'auto' }}>
            <div style={{ display: 'flex', gap: 20, maxWidth: 720, width: '100%', maxHeight: 380,
              flexDirection: isMobile ? 'column' : 'row' }}>
              <HoverImage src={tiantuanFlow} alt="tiantuan-flow" />
              <HoverImage src={tiantuanSite} alt="tiantuan-site" />
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexShrink: 0 }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, background: 'var(--bg-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FolderOpen size={16} color="var(--accent-dark)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{proj.card2.title}</h3>
            </div>
            <div style={{ padding: isMobile ? '8px 12px' : '8px 16px', borderRadius: 8, background: 'var(--bg-secondary)',
              fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 12, flexShrink: 0 }}>
              <strong style={{ color: 'var(--text-primary)' }}>{'\u9879\u76ee\u75db\u70b9\uff1a'}</strong>{proj.card2.painPoint}
            </div>
            <SolutionCycle />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.75,
              marginBottom: 10, flexShrink: 0 }}>
              <strong style={{ color: 'var(--text-primary)' }}>{'\u9879\u76ee\u7ed3\u679c\uff1a'}</strong>{proj.card2.result}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', flexShrink: 0 }}>
              {proj.card2.tags.map(t => (
                <span key={t} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 20,
                  background: 'var(--bg-secondary)', color: 'var(--text-light)' }}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const projects = [
  {
    name: '\u5929\u56e21\u53f7',
    subtitle: '\u4ea7\u54c1\u8fd0\u8425 · 2025.09 - 2026.02',
    card1: {
      title: '\u9879\u76ee\u6982\u8ff0',
      desc: '\u5929\u56e21\u53f7\u662f\u9762\u5411\u653f\u5e9c\u4e8b\u4e1a\u5355\u4f4d\u63d0\u4f9b\u670d\u88c5\u56e2\u4f53\u91c7\u8d2d\u7684\u6570\u5b57\u5316\u670d\u52a1\u5e73\u53f0\uff0c\u65e8\u5728\u901a\u8fc7\u63d0\u4f9b\u6570\u5b57\u5316\u3001\u4e00\u7ad9\u5f0f\u3001\u900f\u660e\u5408\u89c4\u7684\u4ea7\u54c1\u4f18\u5316\u653f\u4f01\u5ba2\u6237\u91c7\u8d2d\u4f53\u9a8c\u3002',
    },
    card2: {
      title: '\u9879\u76ee\u8fc7\u7a0b',
      painPoint: '\u5e73\u53f0\u8f6c\u5316\u7387\u8fde\u7eed\u4e24\u5468\u4e0b\u964d\uff08\u5c0f\u7a0b\u5e8f\u6e20\u9053\u5f02\u5e38\u4e0b\u964d\uff09',
      result: '\u901a\u8fc7\u4f18\u5316\u4f53\u9a8c\u65ad\u70b9\u3001\u501f\u52a9 AB Test \u624b\u6bb5\u5224\u65ad\u6539\u52a8\u6548\u679c\uff0c\u8ba9\u4ea7\u54c1\u53ef\u7528\u6027\u3001\u4ea7\u54c1\u6613\u7528\u6027\u8fbe\u6210\u63d0\u5347\uff0c\u4e14\u6709\u522b\u4e8e\u4e00\u822c\u7684\u8d2d\u7269\u5e73\u53f0\uff0c\u5b9e\u73b0\u7ec6\u5206\u8d5b\u9053\u7684\u7528\u6237\u670d\u52a1\u4f53\u9a8c\u5dee\u5f02\u5316\uff0c\u4e3a\u4ea7\u54c1\u66f4\u597d\u5730\u5f00\u62d3\u5e02\u573a\u3001\u670d\u52a1\u5ba2\u6237\u63d0\u4f9b\u4e86\u575a\u5b9e\u7684\u57fa\u7840\u3002',
      tags: ['\u6570\u636e\u5206\u6790', '\u6d41\u7a0b\u4f18\u5316', 'AB Test', 'VOC\u5206\u6790'],
    },
  },
  {
    name: '\u5ba2\u8bc9\u4e1a\u52a1\u7ebfAI\u667a\u80fd\u4f53\u7684\u5e94\u7528\u4e0e\u8fed\u4ee3',
    subtitle: '\u5b9e\u4e60\u751f · 2024.06 - 2024.11',
    card1: {
      title: '\u9879\u76ee\u6982\u8ff0',
      desc: '\u8d1f\u8d23\u5c06\u5927\u6a21\u578b\u667a\u80fd\u4f53\u843d\u5730\u5230\u5b9e\u9645\u7528\u6237\u670d\u52a1\u573a\u666f\uff0c\u4ece\u77e5\u8bc6\u6784\u5efa\u5230\u5bf9\u8bdd\u4f18\u5316\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u4e0e\u4e1a\u52a1\u8f6c\u5316\u6548\u7387\u3002',
    },
    card2: {
      title: '\u9879\u76ee\u8fc7\u7a0b',
      gridItems: [
        '\u77e5\u8bc6\u4f53\u7cfb\u6784\u5efa\uff1a\u5b8c\u6210\u77e5\u8bc6\u5e93\u642d\u5efa\u4e0e\u8bed\u6599\u6807\u6ce8\uff0c\u667a\u80fd\u4f53\u9996\u6b21\u56de\u590d\u51c6\u786e\u7387\u663e\u8457\u63d0\u5347\u3002',
        '\u5bf9\u8bdd\u6d41\u7a0b\u4e0e\u63d0\u793a\u8bcd\u8bbe\u8ba1\uff1a\u64b0\u5199\u5e76\u8fed\u4ee3 30+ \u6761\u591a\u8f6e\u5bf9\u8bdd\u903b\u8f91\u6d41\u7a0b\u4e0e\u63d0\u793a\u8bcd\u6a21\u677f\uff0c\u964d\u4f4e\u5355\u8f6e\u5bf9\u8bdd\u5360\u6bd4 17%\u3002',
        '\u6548\u679c\u76d1\u63a7\u4e0e\u4f18\u5316\uff1a\u5efa\u7acb\u6548\u679c\u8bc4\u4f30\u6307\u6807\u4f53\u7cfb\uff0c\u63a8\u52a8\u591a\u8f6e\u4ea7\u54c1\u8fed\u4ee3\uff0c\u6301\u7eed\u63d0\u5347\u5bf9\u8bdd\u8d28\u91cf\u3002',
        '\u4ea4\u4ed8\u4e0e\u53cd\u9988\u673a\u5236\uff1a\u64b0\u5199\u667a\u80fd\u4f53\u529f\u80fd\u4e0e\u903b\u8f91\u8bf4\u660e\u6587\u6863\uff0c\u642d\u5efa\u6807\u51c6\u5316\u4ea4\u4ed8\u4e0e\u53cd\u9988\u95ed\u73af\u3002',
      ],
      tags: ['\u77e5\u8bc6\u5e93\u6784\u5efa', '\u63d0\u793a\u8bcd\u4f18\u5316', '\u4ea7\u54c1\u8fed\u4ee3'],
    },
  },
];

export default function ProjectExperience() {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <div style={{ position: 'relative' }}>
      <SubNav current={currentPage} total={PAGE_COUNT} onJump={jumpToPage} />
      <div id="project" ref={containerRef}
        style={{ height: '100vh', overflowY: 'auto', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
        {projects.map((proj, pageIdx) => (
          <ProjectPage key={pageIdx} proj={proj} pageIdx={pageIdx} />
        ))}
      </div>
    </div>
  );
}
