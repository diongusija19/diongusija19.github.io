// ==============================
// 1️⃣ Fade-in on scroll
// ==============================
const sections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ==============================
// 2️⃣ Typing animation for Hero tagline
// ==============================
const text = "Web Developer | Designer | Creator";
const el = document.getElementById('typed-text');
let i = 0;

function type() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // typing speed (ms)
  }
}

type();

const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-skill');
      bar.style.width = width;
      skillObserver.unobserve(bar); // animate only once
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ==============================
// 5️⃣ Hamburger menu toggle
// ==============================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navToggle.classList.toggle('active');
});



