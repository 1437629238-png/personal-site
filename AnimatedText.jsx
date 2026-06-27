import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedText - characters animate in one by one with a stagger,
 * then an underline sweeps across underneath.
 *
 * Props:
 *   text         - the string to animate
 *   as           - tag element: "h1" | "h2" | "span" etc (default "span")
 *   duration     - per-character animation duration in seconds (default 0.4)
 *   delay        - stagger delay between characters in seconds (default 0.06)
 *   textClassName - optional className for the text container
 *   underlineGradient - Tailwind-style gradient class for the underline (ignored, uses inline)
 *   underlineHeight   - underline thickness (default "3px")
 *   underlineOffset   - offset from text bottom (default "-6px")
 */
export default function AnimatedText({
  text = '',
  as: Tag = 'span',
  duration = 0.4,
  delay = 0.06,
  textClassName = '',
  underlineHeight = '3px',
  underlineOffset = '-6px',
}) {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [underlineDone, setUnderlineDone] = useState(false);

  // Intersection observer to trigger when visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // After all chars finish, show underline
  useEffect(() => {
    if (!started) return;
    const totalMs = (text.length * delay + duration) * 1000;
    const timer = setTimeout(() => setUnderlineDone(true), totalMs);
    return () => clearTimeout(timer);
  }, [started, text, delay, duration]);

  const chars = text.split('');

  return (
    <span
      ref={containerRef}
      className={textClassName}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Tag style={{ display: 'inline' }}>
        {chars.map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: started ? 1 : 0,
              transform: started ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity ${duration}s ease ${i * delay}s, transform ${duration}s ease ${i * delay}s`,
              willChange: 'opacity, transform',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Tag>

      {/* Underline sweep */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: underlineOffset,
          height: underlineHeight,
          width: '100%',
          background: 'linear-gradient(90deg, var(--accent-dark), var(--accent-light))',
          borderRadius: 2,
          transformOrigin: 'left',
          transform: underlineDone ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
    </span>
  );
}