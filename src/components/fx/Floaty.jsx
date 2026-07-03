import { motion, useReducedMotion } from 'framer-motion';

/** Gentle endless float. Wrap anything to make it drift up and down. */
export default function Floaty({ children, className = '', amp = 10, dur = 6, delay = 0 }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amp, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
