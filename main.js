// footer year
document.querySelectorAll('#footerYear, #footerYearMain').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// highlight nav link for whichever section is in view
const navLinks = document.querySelectorAll('.nav-list a');

const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }
}, { rootMargin: '-20% 0px -60% 0px' });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// fade sections in as they scroll into view
const fadeObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('visible');
    fadeObserver.unobserve(entry.target);
  }
}, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
