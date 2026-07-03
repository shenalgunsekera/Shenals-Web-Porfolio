export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-chalk tracking-wide">
          SHENAL<span className="text-brand">.</span>
        </span>
        <p className="font-body text-sm text-mute-3">
          © 2026 Shenal Gunasekera · Colombo, Sri Lanka
        </p>
        <p className="font-body text-xs tracking-widest2 uppercase text-mute-3">
          Designed &amp; built by me
        </p>
      </div>
    </footer>
  );
}
