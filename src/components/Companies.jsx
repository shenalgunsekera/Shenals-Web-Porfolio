import Reveal from './Reveal.jsx';
import Marquee from './Marquee.jsx';

const logos = [
  { src: '/assets/img/ceilao-logo.png', name: 'Ceilao Insurance Brokers' },
  { src: '/assets/img/galactic-logo.png', name: 'Galactic Arcade by Club APT' },
  { src: '/assets/img/powermate-logo.png', name: 'Power Mate Investment' },
  { src: '/assets/img/sterling-logo.png', name: 'Sterling Automobiles' },
];
const textTiles = ['T3X Solutions'];

const marqueeItems = [
  'Ceilao Insurance Brokers', 'Galactic Arcade by Club APT', 'Power Mate Investment', 'Sterling Automobiles', 'T3X Solutions',
];

export default function Companies() {
  return (
    <section className="py-20 md:py-24 border-b border-line bg-dots-wide">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal>
          <p className="font-body text-xs tracking-widest3 text-brand uppercase mb-10 text-center">
            Companies I've worked with
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-line border border-line mb-12">
            {logos.map((l) => (
              <div key={l.name} className="bg-ink p-7 flex flex-col items-center justify-center gap-4 min-h-[130px]">
                <img src={l.src} alt={l.name} loading="lazy" className="h-12 w-auto object-contain" />
                <span className="font-body text-xs text-mute-3 text-center">{l.name}</span>
              </div>
            ))}
            {textTiles.map((t) => (
              <div key={t} className="bg-ink p-7 flex flex-col items-center justify-center gap-2 min-h-[130px]">
                <span className="font-display text-2xl text-chalk tracking-wide">{t.split(' ')[0]}</span>
                <span className="font-body text-xs text-mute-3 text-center">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
