// Small enhancements for the single-page academic profile.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('#navmenu a[href^="#"]')];
  const setActive = () => {
    const marker = window.scrollY + 150;
    let current = sections[0]?.id || 'hero';
    sections.forEach(section => { if (section.offsetTop <= marker) current = section.id; });
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
});
