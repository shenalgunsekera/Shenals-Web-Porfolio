import Reveal from './Reveal.jsx';

const projects = [
  {
    n: '01',
    tag: 'Live · Real players',
    tagClass: 'text-emerald-600',
    title: 'APT Galactic Arcade',
    desc: 'A space-themed arcade gaming platform: 13 provably-fair games — Rocket Crash, Cosmic Plinko, Blackjack, Keno and more — with player wallets, an agent & clubs economy, weekly leaderboards and a real-time admin dashboard tracking 376+ users and $275k+ in volume.',
    points: ['13 games with provably-fair RNG engines', 'Wallets, agents, clubs & weekly rewards', 'Full admin analytics & API key management'],
    tech: 'React · Node.js · WebSockets · PWA',
    media: 'galactic',
  },
  {
    n: '02',
    tag: 'Real client · In production',
    tagClass: 'text-brand',
    title: 'Ceilao Insurance SaaS',
    desc: 'End-to-end brokerage platform for Ceilao Insurance Brokers, Colombo — a staff CRM covering quotations, underwriting and the policy register, plus a customer self-service website with phone-OTP sign-up. Customer submissions land in the staff queue as pre-filled drafts.',
    points: ['Quotations → underwriting → policy pipeline', 'Customer portal with OTP onboarding', 'Security audit & full system documentation'],
    tech: 'Next.js · React · Firebase · Tailwind',
    media: 'ceilao',
  },
  {
    n: '03',
    tag: 'EdTech SaaS',
    tagClass: 'text-brand',
    title: 'Mentora — Tutor Platform',
    desc: 'A premium platform for professional tutors: a cinematic public brand site, a secure dashboard for student management and review moderation, and live, code-protected progress reports parents open from a private link — no accounts, always current, print-to-PDF ready.',
    points: ['Live parent reports with access codes & view tracking', 'Exam trends & subject progress charts', 'Built-in CMS — the tutor edits the site live'],
    tech: 'Next.js 14 · Firebase · Framer Motion · Recharts',
    media: 'mentora',
  },
];

function Media({ kind }) {
  if (kind === 'galactic') {
    return (
      <div className="group relative overflow-hidden border border-line bg-surface">
        <img
          src="/assets/img/galactic-games.jpg"
          alt="APT Galactic Arcade — games lobby"
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <img
          src="/assets/img/galactic-admin.jpg"
          alt="Galactic Arcade admin dashboard"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    );
  }
  if (kind === 'ceilao') {
    return (
      <div className="group relative overflow-hidden border border-line bg-surface">
        <img
          src="/assets/img/ceilao-website.jpg"
          alt="Ceilao Insurance Brokers — customer website"
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <img
          src="/assets/img/ceilao-crm.jpg"
          alt="Ceilao staff CRM — module dashboard"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    );
  }
  return (
    <div className="h-full min-h-[280px] border border-line bg-chalk grid place-items-center p-10">
      <div className="text-center">
        <span className="font-heading italic text-7xl md:text-8xl text-white leading-none">M</span>
        <div className="font-body text-xs tracking-widest3 uppercase text-white/60 mt-4">Mentora</div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-b border-line bg-dots-wide">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Selected work</p>
          <h2 className="font-display text-chalk leading-none" style={{ fontSize: 'clamp(44px, 6vw, 92px)' }}>
            THREE PLATFORMS,
            <br />
            BUILT END TO END
          </h2>
        </Reveal>

        <div className="grid gap-16 md:gap-24">
          {projects.map((p, i) => (
            <Reveal key={p.n}>
              <article className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <Media kind={p.media} />
                <div>
                  <div className="flex items-baseline gap-5 mb-4">
                    <span className="font-display text-6xl md:text-7xl text-brand-light leading-none">{p.n}</span>
                    <span className={`font-body text-xs tracking-widest2 uppercase ${p.tagClass}`}>{p.tag}</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl text-chalk mb-4">{p.title}</h3>
                  <p className="font-body text-base text-mute-2 leading-relaxed mb-6">{p.desc}</p>
                  <ul className="grid gap-2.5 mb-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="font-body text-sm text-mute-1 flex gap-3 items-baseline">
                        <span className="text-brand">→</span> {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="font-body text-xs tracking-widest2 uppercase text-mute-3">{p.tech}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
