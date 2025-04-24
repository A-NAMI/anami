// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});

// Scroll Reveal & Active Link Highlight
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
const observerOptions = { threshold: 0.3 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);
sections.forEach(section => observer.observe(section));

// Hero Typewriter Effect
const heroTitle = document.getElementById('hero-title');
const heroText = "Hello, my name's Ahmed Nami";
const typingSpeed = 100;
let charIndex = 0;
function typeHeroText() {
  if (charIndex < heroText.length) {
    heroTitle.textContent += heroText.charAt(charIndex);
    charIndex++;
    setTimeout(typeHeroText, typingSpeed);
  } else {
    heroTitle.style.borderRight = 'none';
    document.getElementById('hero-subtitle').style.opacity = '1';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  typeHeroText();
});

// Thesis Modal
const thesisModal      = document.getElementById('thesis-modal');
const openThesisModal  = document.getElementById('open-thesis-modal');
const closeThesisModal = thesisModal.querySelector('.close-modal');

openThesisModal.addEventListener('click', e => {
  e.preventDefault();
  thesisModal.classList.add('active');
});
closeThesisModal.addEventListener('click', () => {
  thesisModal.classList.remove('active');
});
thesisModal.addEventListener('click', e => {
  if (e.target === thesisModal) thesisModal.classList.remove('active');
});

// Skill Bar Fill on Scroll
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.fill');
      const level = entry.target.getAttribute('data-level');
      fill.style.width = level + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});
