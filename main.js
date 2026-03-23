'use strict';

// ── Dynamic year ──────────────────────────────────────────────
const year = new Date().getFullYear();
document.querySelectorAll('#footerYear, #footerYearMain').forEach(el => {
  el.textContent = year;
});

// ── Active nav highlight ──────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

// ── Fade-in on scroll ─────────────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
