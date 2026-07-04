import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import Floaty from './fx/Floaty.jsx';
import Magnetic from './fx/Magnetic.jsx';
import Tilt from './fx/Tilt.jsx';

const stats = [
  { k: '3', v: 'SaaS platforms shipped' },
  { k: '13', v: 'Live arcade games' },
  { k: '15+', v: 'Websites & SaaS built' },
  { k: '47', v: 'GitHub repositories' },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const wmY = useTransform(scrollY, [0, 900], [0, 130]);
  const shapesY = useTransform(scrollY, [0, 900], [0, -70]);

  return (
    <section id="top" className="relative flex flex-col min-h-[100svh] border-b border-line overflow-hidden">
      {/* layered background: fine grid + brand radial wash */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-radial pointer-events-none" aria-hidden="true" />

      {/* giant outline watermark, drifts slower than the page (parallax) */}
      <motion.span
        style={{ y: wmY, fontSize: 'clamp(160px, 22vw, 340px)', writingMode: 'vertical-rl' }}
        className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 font-display text-outline leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        PORTFOLIO
      </motion.span>

      {/* floating decorative shapes */}
      <motion.div style={{ y: shapesY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Floaty amp={14} dur={7} className="absolute left-[7%] top-[26%] max-md:left-[5%] max-md:top-[16%]">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#4F46E5" strokeOpacity="0.3" strokeWidth="1.5"><circle cx="17" cy="17" r="15" /></svg>
        </Floaty>
        <Floaty amp={10} dur={5.2} delay={0.8} className="absolute right-[26%] top-[15%] max-md:right-[8%] max-md:top-[13%]">
          <svg width="26" height="26" viewBox="0 0 26 26" stroke="#101016" strokeOpacity="0.22" strokeWidth="1.5"><path d="M13 2v22M2 13h22" /></svg>
        </Floaty>
        <Floaty amp={12} dur={6.4} delay={1.6} className="absolute left-[40%] bottom-[22%]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#4F46E5" strokeOpacity="0.26" strokeWidth="1.5"><rect x="4" y="4" width="14" height="14" transform="rotate(20 11 11)" /></svg>
        </Floaty>
        <Floaty amp={8} dur={4.6} delay={0.4} className="absolute right-[8%] bottom-[30%]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#101016" strokeOpacity="0.2" strokeWidth="1.5"><path d="M9 3l6 11H3z" /></svg>
        </Floaty>
      </motion.div>

      <div className="relative flex-1 flex items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
          <div>
            <Reveal>
              <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-6">
                Shenal Gunasekera · Full-Stack Developer · Colombo, Sri Lanka
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display text-chalk leading-[0.92]"
                style={{ fontSize: 'clamp(54px, 8vw, 118px)' }}
              >
                I BUILD PRODUCTS
                <br />
                PEOPLE{' '}
                <span className="bg-brand-gradient bg-clip-text text-transparent">ACTUALLY USE</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-heading italic text-lg md:text-2xl text-mute-1 mt-7 max-w-xl leading-relaxed">
                First-Class Honours Software Engineering graduate, building insurance SaaS,
                tutoring platforms and a live arcade gaming universe.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4 mt-9">
                <Magnetic>
                  <a
                    href="#work"
                    className="inline-flex items-center px-9 py-4 bg-brand-gradient text-white font-display text-base tracking-widest uppercase shadow-brand"
                  >
                    See my work
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 border border-brand text-brand font-display text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-colors"
                  >
                    Contact me
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="justify-self-center lg:justify-self-end w-full max-w-[330px]">
            <Floaty amp={7} dur={6.5}>
              <Tilt>
                <figure className="border border-line bg-ink shadow-2xl">
                  <img
                    src="/assets/img/profile-sm.jpg"
                    alt="Portrait of Shenal Gunasekera"
                    width="640"
                    height="795"
                    fetchpriority="high"
                    className="w-full h-auto"
                  />
                  <figcaption className="border-t border-line px-6 py-4">
                    <div className="font-display text-lg text-chalk tracking-wide">SHENAL GUNASEKERA</div>
                    <div className="font-body text-[13px] text-mute-2 mt-0.5">
                      BSc (Hons) Software Engineering ·{' '}
                      <span className="text-brand font-semibold">First Class Honours</span>
                    </div>
                  </figcaption>
                </figure>
              </Tilt>
            </Floaty>
          </Reveal>
        </div>
      </div>

      {/* stats strip, pinned to the bottom of the viewport */}
      <div className="relative border-t border-line bg-ink/70 backdrop-blur-[2px]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border-x border-line">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08} y={16} className="bg-ink">
              <div className="px-8 py-6 lg:py-7 transition-colors duration-300 hover:bg-brand-50">
                <Counter value={s.k} className="font-display text-4xl md:text-5xl text-brand" />
                <div className="font-body text-sm text-mute-2 mt-1.5">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
