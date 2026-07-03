import Reveal from './Reveal.jsx';

const rows = [
  { year: '2026 →', title: 'PMO Intern — Virtusa', desc: 'Project Management Office intern at a global IT services company — governance, planning and delivery tracking on enterprise engagements.' },
  { year: '2026', title: 'APT Galactic Arcade goes live', desc: 'Launched a 13-game arcade platform with real players, real volume and a full agent economy.' },
  { year: '2026', title: 'BSc (Hons) Software Engineering — First Class Honours', desc: 'University of Bedfordshire. Concentrations in intelligence & modelling; DSA, OOP, networks, algorithm design.' },
  { year: '2024 →', title: 'System Developer & Designer — Ceilao Insurance Brokers', desc: 'On-call developer and graphic designer: built their brokerage management system and brand creatives.' },
  { year: '2024 →', title: 'Community Developer — T3X Solutions', desc: 'Building alongside a dev community, sharpening production skills on real-world projects.' },
  { year: '2024', title: 'Marketing Intern — SLIIT City Uni', desc: 'Student counselor role: communication and people skills to match the technical ones.' },
  { year: '2023', title: 'Foundation in IT — SLIIT City Uni · GPA 3.7', desc: '2 A*s and 4 As at O/Ls (Horizon College International), then straight into software.' },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-surface bg-dots border-b border-line">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Experience &amp; education</p>
          <h2 className="font-display text-chalk leading-none" style={{ fontSize: 'clamp(44px, 6vw, 92px)' }}>
            THE JOURNEY SO FAR
          </h2>
        </Reveal>
        <div className="border-t border-line">
          {rows.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i * 0.05, 0.2)} y={18}>
              <div className="group grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 border-b border-line hover:bg-ink transition-colors duration-200 md:px-6 md:-mx-6">
                <div className="font-display text-3xl md:text-4xl text-brand-light group-hover:text-brand transition-colors leading-none pt-1">
                  {r.year}
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-chalk mb-1.5">{r.title}</h3>
                  <p className="font-body text-sm md:text-base text-mute-2 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
