// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Typing effect for header logo
const logoText = "Ahmed Nami";
let i = 0;
let speed = 100;

function typeWriter() {
    if (i < logoText.length) {
        document.querySelector('.logo').innerHTML += logoText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Toggle navigation menu on small screens
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Color change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
