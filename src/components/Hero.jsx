import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';

const stats = [
  { k: '3', v: 'SaaS platforms shipped' },
  { k: '13', v: 'Live arcade games' },
  { k: '376+', v: 'Players on my platform' },
  { k: '47', v: 'GitHub repositories' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col min-h-[100svh] border-b border-line overflow-hidden">
      {/* layered background: fine grid + brand radial wash */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-radial pointer-events-none" aria-hidden="true" />
      {/* giant outline watermark */}
      <span
        className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 font-display text-outline leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(160px, 22vw, 340px)', writingMode: 'vertical-rl' }}
        aria-hidden="true"
      >
        PORTFOLIO
      </span>

      <div className="relative flex-1 flex items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
          <div>
            <Reveal>
              <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-6">
                Shenal Gunasekera — Full-Stack Developer · Colombo, Sri Lanka
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
                First-Class Honours Software Engineering graduate — building insurance SaaS,
                tutoring platforms and a live arcade gaming universe.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#work"
                  className="inline-flex items-center px-9 py-4 bg-brand-gradient text-white font-display text-base tracking-widest uppercase transition-transform hover:-translate-y-0.5 shadow-brand"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 border border-brand text-brand font-display text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-colors"
                >
                  Contact me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="justify-self-center lg:justify-self-end w-full max-w-[330px]">
            <figure className="border border-line bg-ink shadow-brand/20 shadow-2xl">
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
          </Reveal>
        </div>
      </div>

      {/* stats strip — pinned to the bottom of the viewport */}
      <div className="relative border-t border-line bg-ink/70 backdrop-blur-[2px]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border-x border-line">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08} y={16} className="bg-ink">
              <div className="px-8 py-6 lg:py-7">
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
