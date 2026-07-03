import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/** Animated number counter. Accepts values like "15+", "100%", "3.7". */
export default function Counter({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match?.[1] ?? '';
  const numStr = match?.[2] ?? '';
  const suffix = match?.[3] ?? '';
  const target = numStr ? parseFloat(numStr) : 0;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current || !numStr) return;
    done.current = true;
    let raf = 0;
    const dur = 1400;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  if (!numStr) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {prefix}{n.toFixed(decimals)}{suffix}
    </span>
  );
}
