import { useState } from 'react';
import Reveal from './Reveal.jsx';

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
          <a
            href="mailto:shenalgd@gmail.com"
            className="inline-flex items-center px-10 py-4 bg-brand-gradient text-white font-display text-base tracking-widest uppercase transition-transform hover:-translate-y-0.5 shadow-brand"
          >
            shenalgd@gmail.com
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center px-8 py-4 border border-brand text-brand font-display text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-colors"
          >
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>
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
