import Reveal from './Reveal.jsx';

const groups = [
  { title: 'Languages', items: ['JavaScript / TypeScript', 'Java', 'Python', 'PHP', 'HTML & CSS'] },
  { title: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Spring Boot', 'React Native'] },
  { title: 'Tools & Cloud', items: ['Firebase', 'MySQL', 'Git & GitHub', 'Azure', 'Vercel', 'Android Studio'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-b border-line bg-dots-wide">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-4">Toolbox</p>
          <h2 className="font-display text-chalk leading-none" style={{ fontSize: 'clamp(44px, 6vw, 92px)' }}>
            SKILLS &amp; TECHNOLOGIES
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1} className="bg-ink">
              <div className="p-9 h-full">
                <h3 className="font-heading text-2xl text-chalk mb-6">{g.title}</h3>
                <ul className="grid gap-3">
                  {g.items.map((item) => (
                    <li key={item} className="font-body text-sm text-mute-1 flex gap-3 items-baseline border-b border-line pb-3 last:border-0">
                      <span className="text-brand text-xs">◆</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
