import Reveal from './Reveal.jsx';

const items = [
  { title: 'Pixel Vault', desc: 'White-label mystery-box game engine with provably-fair prize RNG, a wallet bridge and an operator dashboard.', tech: 'Fastify · React', href: 'https://github.com/shenalgunsekera' },
  { title: 'EnrollIQ', desc: 'Student enrollment platform built as a Turborepo monorepo with Dockerized services.', tech: 'TypeScript · Docker', href: 'https://github.com/shenalgunsekera' },
  { title: 'TripFinder', desc: 'Travel discovery app for exploring destinations and planning trips on the go.', tech: 'React Native', href: 'https://github.com/shenalgunsekera' },
  { title: 'Dresswell', desc: 'Fully responsive clothing store with scroll animations, an early frameworks deep-dive.', tech: 'Bootstrap · PHP', href: 'http://dresswell.infinityfreeapp.com' },
];

export default function MoreWork() {
  return (
    <section className="py-24 md:py-28 bg-surface bg-dots border-b border-line">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="mb-12">
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">More from the workshop</p>
          <h2 className="font-display text-chalk leading-none" style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}>
            SIDE PROJECTS &amp; EXPERIMENTS
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06} y={18} className="bg-surface">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full p-8 flex flex-col gap-4 hover:bg-ink transition-colors duration-200"
              >
                <h3 className="font-heading text-chalk text-lg group-hover:text-brand transition-colors">{s.title}</h3>
                <p className="font-body text-sm text-mute-2 leading-relaxed flex-1">{s.desc}</p>
                <div className="font-body text-xs tracking-widest uppercase text-mute-3">{s.tech}</div>
                <div className="flex items-center gap-2 text-mute-3 group-hover:text-brand transition-all text-xs font-body tracking-widest uppercase group-hover:gap-3">
                  View project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6h8M6 2l4 4-4 4" /></svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
