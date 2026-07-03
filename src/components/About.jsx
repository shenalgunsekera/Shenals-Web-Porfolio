import Reveal from './Reveal.jsx';

const strengths = [
  { n: '01', title: 'Frontend engineering', desc: 'React, Next.js and motion-rich interfaces that stay fast and accessible.' },
  { n: '02', title: 'Backend & APIs', desc: 'Node.js services, Firebase architectures, real-time systems and payments flows.' },
  { n: '03', title: 'Design', desc: 'UI, brand and graphic design. I design the product before I build it.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-line bg-dots-wide">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_1fr] gap-16 items-start">
        <Reveal>
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-5">Who I am</p>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight text-chalk mb-6">
            A builder, not just a graduate.
          </h2>
          <p className="font-body text-base md:text-lg text-mute-1 leading-relaxed mb-5">
            I graduated with <span className="text-brand font-semibold">First Class Honours</span> in
            Software Engineering from the University of Bedfordshire, after a Foundation in IT at
            SLIIT City Uni with a 3.7 GPA. But the degree is only half the story.
          </p>
          <p className="font-body text-base text-mute-2 leading-relaxed mb-5">
            Today I'm a <span className="text-brand font-semibold">PMO intern at Virtusa</span>.
            Since 2024 I've also worked as a freelance system developer and graphic designer for
            Ceilao Insurance Brokers, built with the dev community at T3X Solutions, and launched
            my own platforms, including an arcade gaming site with hundreds of real players and
            real transaction volume.
          </p>
          <p className="font-body text-base text-mute-2 leading-relaxed">
            Design, build, deploy, maintain. I handle the full journey. Off the keyboard you'll
            find me on a basketball court, at a table-tennis table, or in the gym.
          </p>
        </Reveal>

        <div className="grid gap-px bg-line border border-line">
          {strengths.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} y={18} className="bg-ink">
              <div className="group p-8 flex gap-7 items-start hover:bg-surface transition-colors duration-300">
                <div className="font-display text-5xl text-brand-light group-hover:text-brand transition-colors leading-none">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-chalk mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-mute-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
