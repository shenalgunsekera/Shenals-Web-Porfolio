import { useState } from 'react';
import Reveal from './Reveal.jsx';
import Floaty from './fx/Floaty.jsx';
import Magnetic from './fx/Magnetic.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('shenalgd@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:shenalgd@gmail.com';
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-radial pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Floaty amp={12} dur={6.8} className="absolute left-[9%] top-[22%]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#4F46E5" strokeOpacity="0.28" strokeWidth="1.5"><circle cx="14" cy="14" r="12" /></svg>
        </Floaty>
        <Floaty amp={9} dur={5.4} delay={1} className="absolute right-[10%] top-[30%]">
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#101016" strokeOpacity="0.2" strokeWidth="1.5"><path d="M12 2v20M2 12h20" /></svg>
        </Floaty>
        <Floaty amp={11} dur={6} delay={0.5} className="absolute left-[22%] bottom-[14%]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4F46E5" strokeOpacity="0.24" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" transform="rotate(18 10 10)" /></svg>
        </Floaty>
      </div>
      <Reveal className="relative max-w-[1100px] mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-6">Contact</p>
        <h2 className="font-display text-chalk leading-none mb-7" style={{ fontSize: 'clamp(48px, 7.5vw, 110px)' }}>
          LET'S BUILD{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">SOMETHING GREAT</span>
        </h2>
        <p className="font-body text-lg text-mute-2 max-w-2xl mx-auto mb-10">
          Open to full-time roles, freelance builds and collaborations.
          One email and you get a developer who designs, builds and ships.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Magnetic>
            <a
              href="mailto:shenalgd@gmail.com"
              className="inline-flex items-center px-10 py-4 bg-brand-gradient text-white font-display text-base tracking-widest uppercase shadow-brand"
            >
              shenalgd@gmail.com
            </a>
          </Magnetic>
          <Magnetic>
            <button
              onClick={copy}
              className="inline-flex items-center px-8 py-4 border border-brand text-brand font-display text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-colors"
            >
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
          </Magnetic>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-12">
          <a href="https://www.linkedin.com/in/shenal-gunasekera-ba5a3a278/" target="_blank" rel="noopener noreferrer" className="font-body text-sm tracking-widest2 uppercase text-mute-2 hover:text-brand transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/shenalgunsekera" target="_blank" rel="noopener noreferrer" className="font-body text-sm tracking-widest2 uppercase text-mute-2 hover:text-brand transition-colors">
            GitHub
          </a>
          <a href="tel:+94743364614" className="font-body text-sm tracking-widest2 uppercase text-mute-2 hover:text-brand transition-colors">
            +94 74 336 4614
          </a>
        </div>
      </Reveal>
    </section>
  );
}
