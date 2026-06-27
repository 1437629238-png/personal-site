import { useEffect, useRef, useState } from 'react';
import campusDoc from '../assets/campus-doc.png';
import campusUi from '../assets/campus-ui.png';
import campusTest from '../assets/campus-test.png';
import mediaSocial from '../assets/media-social.jpg';
import mediaGraduate from '../assets/media-graduate.jpg';
import mediaCulture from '../assets/media-culture.jpg';
import useBreakpoint from '../hooks/useBreakpoint';

function SubSection1() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const images = [
    { src: campusDoc, alt: '\u7cfb\u7edf\u8bf4\u660e\u4e66' },
    { src: campusUi, alt: '\u7cfb\u7edf\u754c\u9762' },
    { src: campusTest, alt: '\u6d4b\u8bd5\u62a5\u544a' },
  ];

  return (
    <div ref={ref} style={{
      maxWidth: 1100, margin: '0 auto',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s ease',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 600,
        color: 'var(--text-primary)', textAlign: 'center', marginBottom: 28,
      }}>{'\u6821\u56ed\u4e8c\u624b\u4ea4\u6613\u7cfb\u7edf\u8bbe\u8ba1'}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
        <div>
          <h4 style={{ fontSize: isMobile ? '0.88rem' : '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8, textAlign: 'center' }}>
            {'\u6570\u636e\u5e93\u8bbe\u8ba1\u4e0e\u6027\u80fd\u4f18\u5316'}
          </h4>
          <p style={{ fontSize: isMobile ? '0.78rem' : '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'center' }}>
            {'\u57fa\u4e8e\u4e1a\u52a1\u573a\u666f\u8fdb\u884c\u7cfb\u7edf\u6027\u80fd\u5efa\u6a21\uff0c\u5b8c\u6210\u9ad8\u5e76\u53d1'}<span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'\u6570\u636e\u5e93\u67b6\u6784\u8bbe\u8ba1'}</span>{'\uff0c\u652f\u6301 QPS 5000+\u3002\u901a\u8fc7'}<span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'\u7d22\u5f15\u4f18\u5316'}</span>{'\u548c'}<span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'SQL\u8c03\u4f18'}</span>{'\u5c06\u67e5\u8be2\u5ef6\u8fdf\u964d\u4f4e 40%\u3002'}
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: isMobile ? '0.88rem' : '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8, textAlign: 'center' }}>
            {'\u9700\u6c42\u5206\u6790\u4e0e\u4ea7\u54c1\u8bbe\u8ba1'}
          </h4>
          <p style={{ fontSize: isMobile ? '0.78rem' : '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'center' }}>
            {'\u6df1\u5ea6\u6316\u6398\u5927\u5b66\u751f\u7528\u6237\u9700\u6c42\uff0c\u901a\u8fc7'}<span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'\u95ee\u5377\u548c\u7528\u6237\u8bbf\u8c08'}</span>{'\u6536\u96c6 500+ \u6837\u672c\uff0c\u8f93\u51fa\u7528\u6237\u753b\u50cf\u53ca\u9700\u6c42\u77e9\u9635\u3002\u5c06\u9700\u6c42\u62c6\u89e3\u4e3a\u529f\u80fd\u9700\u6c42\uff08FR\uff09\u548c\u975e\u529f\u80fd\u9700\u6c42\uff08NFR\uff09\uff0c\u64b0\u5199'}<span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'PRD\u6587\u6863'}</span>{'\u3002'}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 12 : 20 }}>
        {images.map((img, i) => (
          <div key={i} style={{
            borderRadius: 'var(--radius)', overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)', background: 'var(--bg-card)',
          }}>
            <img src={img.src} alt={img.alt}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SubSection2() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = [
    { title: '\u89c6\u89c9\u5185\u5bb9\u751f\u4ea7', bullets: ['\u8d1f\u8d23\u89c6\u89c9\u5185\u5bb9\u521b\u4f5c\uff0c\u6db5\u76d6\u6d77\u62a5\u3001\u6d3b\u52a8\u5165\u573a\u5238\u8bbe\u8ba1\u7b49'] },
    { title: '\u8d26\u53f7\u8fd0\u8425\u793e\u7fa4\u7ba1\u7406', bullets: ['\u6db5\u76d6\u8fd0\u8425\u5b66\u9662\u516c\u4f17\u53f7\u4e0e\u5b98\u7f51', '\u9009\u9898\u7b56\u5212\u3001\u6587\u6848\u64b0\u5199\u53ca\u6392\u7248\u8bbe\u8ba1', '\u4f18\u5316\u5bfc\u822a\u680f\u7ed3\u6784\u3001\u8fd0\u8425\u793e\u7fa4'] },
    { title: '\u6d3b\u52a8\u7b56\u5212\u4e0e\u5185\u5bb9\u4ea7\u51fa', bullets: ['\u7edf\u7b79 12 \u573a\u5927\u578b\u6d3b\u52a8', '\u534f\u8c03\u56e2\u961f\u89c4\u5212\u5e76\u5236\u4f5c\u5b66\u9662\u5b98\u65b9\u7cbe\u7f8e\u89c6\u9891'] },
  ];

  const topImages = [
    { src: mediaSocial, alt: '\u6691\u671f\u793e\u4f1a\u5b9e\u8df5\u89c6\u9891' },
    { src: mediaGraduate, alt: '\u6bd5\u4e1a\u5b63\u89c6\u9891' },
  ];
  const bottomImages = [
    { src: mediaCulture, alt: '\u6821\u56ed\u6587\u5316\u521b\u610f\u8bbe\u8ba1\u5927\u8d5b\u6d77\u62a5' },
  ];

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s ease 0.15s',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 600,
        color: 'var(--text-primary)', textAlign: 'center', marginBottom: isMobile ? 24 : 36,
      }}>{'\u9752\u5e74\u5a92\u4f53\u4e2d\u5fc3 \u00b7 \u526f\u4e3b\u5e2d \u00b7 2022.09 - 2024.04'}</h3>

      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 36,
        alignItems: 'stretch', minHeight: isMobile ? 'auto' : 380,
      }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: isMobile ? 16 : 24, padding: isMobile ? '20px' : '32px 36px' }}>
          {items.map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: isMobile ? '0.88rem' : '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>{item.title}</div>
              <ul style={{ margin: 0, paddingLeft: '1.2em', listStyleType: 'none' }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: isMobile ? '0.76rem' : '0.83rem', lineHeight: 1.75, color: 'var(--text-secondary)', position: 'relative', paddingLeft: 14, marginBottom: 4 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-dark)', fontWeight: 700 }}>&#8226;</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            {topImages.map((img, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius)', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bottomImages.map((img, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius)', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubSection3() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const steps = [
    { num: '01', title: '\u6570\u636e\u5e93\u67b6\u6784\u8bbe\u8ba1', desc: '\u57fa\u4e8e\u4e1a\u52a1\u573a\u666f\u4e0e\u6570\u636e\u7279\u5f81\uff0c\u5b8c\u6210\u6570\u636e\u5e93\u67b6\u6784\u8bbe\u8ba1\uff0c\u901a\u8fc7\u5206\u5e93\u5206\u8868\u964d\u4f4e\u67e5\u8be2\u5ef6\u8fdf 20%\u3002' },
    { num: '02', title: '\u6570\u636e\u6807\u51c6\u5236\u5b9a', desc: '\u4e3b\u5bfc\u6570\u636e\u91c7\u96c6 SOP \u5236\u5b9a\uff0c\u660e\u786e\u591a\u6e90\u5f02\u6784\u6570\u636e\uff08API/\u65e5\u5fd7/\u722c\u866b\uff09\u7684\u6e05\u6d17\u89c4\u5219\u4e0e\u7f16\u7801\u89c4\u5219\u3002' },
    { num: '03', title: '\u6570\u636e\u63a5\u53e3\u5f00\u53d1', desc: '\u5f00\u53d1\u6570\u636e\u91c7\u96c6\u63a5\u53e3\uff0c\u81ea\u52a8\u5316\u5bf9\u63a5\u533b\u7597\u7cfb\u7edf\uff0c\u9519\u8bef\u7387\u4e0b\u964d\u81f3 0.5% \u4ee5\u4e0b\u3002' },
  ];

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s ease 0.3s',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 600,
        color: 'var(--text-primary)', textAlign: 'center', marginBottom: 20,
      }}>{'\u300a\u7528\u836f\u6570\u5b57\u5b6a\u751f\u5e94\u7528\u300b'}</h3>
      <p style={{
        fontSize: isMobile ? '0.82rem' : '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8,
        textAlign: 'center', maxWidth: 700, margin: '0 auto 32px',
      }}>
        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{'\u9879\u76ee\u6982\u8ff0\uff1a'}</span>
        {'\u57fa\u4e8e\u533b\u836f\u6570\u636e\u5e93\u3001\u7ed3\u5408\u60a3\u8005\u75c5\u5386\uff0c\u6784\u5efa\u4e2a\u6027\u5316\u7684\u6570\u5b57\u5b6a\u751f\u6a21\u578b\u4ee5\u6a21\u62df\u60a3\u8005\u7528\u836f\u6548\u679c\uff0c\u9488\u5bf9\u6027\u5730\u63d0\u5347\u7528\u836f\u7cbe\u51c6\u6027\u3002'}
      </p>
      <div className="card" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h4 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600,
          color: 'var(--text-primary)', marginBottom: 24,
        }}>{'\u9879\u76ee\u8fc7\u7a0b'}</h4>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 20 : 24 }}>
          {steps.map(({ num, title, desc }) => (
            <div key={num} style={{ position: 'relative', paddingLeft: 16, borderLeft: '2px solid var(--accent-light)' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent-dark)', lineHeight: 1, marginBottom: 8 }}>{num}</div>
              <div style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: isMobile ? '0.75rem' : '0.8rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CampusExperience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="campus" ref={sectionRef} style={{
      background: 'var(--bg-primary)', padding: isMobile ? '80px 0 60px' : '120px 0 80px',
      opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease',
    }}>
      <div className="section-title">{'\u6821\u56ed\u7ecf\u5386'}</div>
      <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 48 : 72 }}>
        <SubSection1 />
        <div style={{ width: '100%', height: 1, background: 'var(--border-light)' }} />
        <SubSection2 />
        <div style={{ width: '100%', height: 1, background: 'var(--border-light)' }} />
        <SubSection3 />
      </div>
    </section>
  );
}
