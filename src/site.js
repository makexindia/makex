// Enhancements only: content, links, disclosures and forms work without this file.
(() => {
  const root = document.documentElement;
  const theme = document.querySelector('.theme-toggle');
  const dark = () => root.dataset.theme === 'dark';
  function describeTheme() {
    theme.setAttribute('aria-label', `Switch to ${dark() ? 'light' : 'dark'} theme`);
    theme.title = theme.getAttribute('aria-label');
    document.querySelector('meta[name="theme-color"]').content = dark() ? '#0d1512' : '#f8faf9';
  }
  theme.addEventListener('click', () => {
    root.dataset.theme = dark() ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch { /* Session-only preference. */ }
    describeTheme();
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'theme' && event.key !== null) return;
    if (event.newValue === 'light' || event.newValue === 'dark') root.dataset.theme = event.newValue;
    else root.dataset.theme = 'light';
    describeTheme();
  });
  describeTheme();
  theme.hidden = false;

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const mobile = matchMedia('(max-width: 820px)');
  function setMenu(open, restoreFocus = false) {
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    if (restoreFocus) menu.focus();
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  nav.addEventListener('click', event => {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    setMenu(false);
    const url = new URL(anchor.href);
    if (mobile.matches && url.origin === location.origin && url.pathname === location.pathname && url.hash) {
      const destination = document.getElementById(url.hash.slice(1));
      if (destination) { destination.setAttribute('tabindex', '-1'); destination.focus({ preventScroll: true }); }
    }
  });
  mobile.addEventListener('change', () => setMenu(false));
  // Collapse only after handlers are installed; failed JS leaves every link visible.
  document.querySelector('.site-header').classList.add('nav-enhanced');
  menu.hidden = false;

  const rail = document.querySelector('#idea-rail');
  if (!rail) return;
  const buttons = [...document.querySelectorAll('[data-rail]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const moveRail = direction => rail.scrollBy({ left: direction * (rail.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap)), behavior: reduced.matches ? 'instant' : 'smooth' });
  buttons.forEach(button => button.addEventListener('click', () => moveRail(Number(button.dataset.rail))));
  const updateRail = () => {
    buttons[0].disabled = rail.scrollLeft <= 2;
    buttons[1].disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
  };
  rail.addEventListener('scroll', updateRail, { passive: true });
  window.addEventListener('resize', updateRail, { passive: true });
  rail.addEventListener('keydown', event => {
    if (event.target !== rail) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); moveRail(event.key === 'ArrowRight' ? 1 : -1); }
    if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); rail.scrollTo({ left: event.key === 'Home' ? 0 : rail.scrollWidth, behavior: 'instant' }); }
  });
  updateRail();
  document.querySelector('.rail-controls').hidden = false;
})();
