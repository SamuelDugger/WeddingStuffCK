/* Injects shared navigation and footer, marks active link */
(function () {
  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'our-story.html',     label: 'Our Story' },
    { href: 'photos.html',        label: 'Photos' },
    { href: 'wedding-party.html', label: 'Wedding Party' },
    { href: 'dress-code.html',    label: 'Dress Code' },
    { href: 'qa.html',            label: 'Q + A' },
    { href: 'travel.html',        label: 'Travel' },
    { href: 'registry.html',      label: 'Registry' },
    { href: 'rsvp.html',          label: 'RSVP' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  function buildLinks(cls) {
    return pages
      .map(p => `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`)
      .join('');
  }

  const navHTML = `
<nav class="site-nav" id="siteNav">
  <div class="nav-inner">
    <div class="nav-desktop d-none d-lg-flex align-items-center gap-4 nav-links">
      ${pages.slice(0, 4).map(p => `<li class="list-unstyled"><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
    </div>
    <a href="index.html" class="nav-monogram">C &amp; K</a>
    <div class="nav-desktop d-none d-lg-flex align-items-center gap-4 nav-links">
      ${pages.slice(4).map(p => `<li class="list-unstyled"><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
    </div>
    <button class="nav-toggler d-lg-none" id="navToggler" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-drawer" id="navDrawer">
    ${pages.map(p => `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`).join('')}
  </div>
</nav>`;

  const footerHTML = `
<footer class="site-footer">
  <span class="monogram">C &amp; K</span>
  <p>February 27, 2027 &bull; Newcastle, Oklahoma</p>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger toggle
  const toggler = document.getElementById('navToggler');
  const drawer  = document.getElementById('navDrawer');
  toggler && toggler.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Countdown
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    const wedding = new Date('2027-02-27T00:00:00');
    function tick() {
      const diff = Math.ceil((wedding - Date.now()) / 86400000);
      countdownEl.textContent = diff > 0 ? diff + ' Days To Go' : 'Today is the Day!';
    }
    tick();
    setInterval(tick, 60000);
  }

  // Q&A accordion
  document.querySelectorAll('.qa-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.qa-question.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
})();
