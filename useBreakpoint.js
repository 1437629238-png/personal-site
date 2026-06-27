import { useState, useEffect } from 'react';

export default function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    if (w < 480) return 'mobile';
    if (w < 768) return 'tablet';
    return 'desktop';
  });
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 480) setBp('mobile');
      else if (w < 768) setBp('tablet');
      else setBp('desktop');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}
