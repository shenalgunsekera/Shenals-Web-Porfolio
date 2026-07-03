/* Shenal portfolio — lightweight interactions (reveals, counters, nav) */
(() => {
  'use strict';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // ?snap — screenshot test hook
  const SNAP = new URLSearchParams(location.search).has('snap');
  if (SNAP) {
    document.documentElement.style.scrollBehavior = 'auto';
    const kill = document.createElement('style');
    kill.textContent = '*,*::before,*::after{transition:none!important;animation:none!important}' +
      '[data-reveal]{opacity:1!important;transform:none!important}';
    document.head.appendChild(kill);
    $$('.bar i').forEach(b => b.style.width = b.dataset.w + '%');
    $$('[data-count]').forEach(el => el.textContent = el.dataset.count);
  }

  // nav border on scroll
  const nav = $('#nav');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), { passive: true });

  // reveals
  const revealables = $$('[data-reveal]');
  if (reduceMotion || SNAP) {
    revealables.forEach(el => el.classList.add('shown'));
  } else {
    const io = new IntersectionObserver(entries => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const el = en.target;
        setTimeout(() => el.classList.add('shown'), +el.dataset.delay || 0);
        $$('.bar i', el).forEach((b, i) => setTimeout(() => b.style.width = b.dataset.w + '%', 300 + i * 90));
        io.unobserve(el);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    revealables.forEach(el => io.observe(el));
  }

  // count-up
  if (!SNAP) {
    const cio = new IntersectionObserver(entries => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const el = en.target, target = +el.dataset.count;
        cio.unobserve(el);
        if (reduceMotion) { el.textContent = target; continue; }
        const t0 = performance.now(), dur = 1200;
        (function step(t) {
          const p = Math.min(1, (t - t0) / dur);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      }
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(el => cio.observe(el));
  }

  // active nav link
  const links = $$('.nav-links a');
  const sio = new IntersectionObserver(entries => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const id = '#' + en.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }
  }, { threshold: 0.3 });
  $$('main section[id]').forEach(s => sio.observe(s));

  // copy email
  const copyBtn = $('#copyEmail');
  if (copyBtn) copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('shenalgd@gmail.com');
      const old = copyBtn.textContent;
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => copyBtn.textContent = old, 1600);
    } catch { location.href = 'mailto:shenalgd@gmail.com'; }
  });
})();
