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

// SKILL BAR ANIMATION
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".fill");

const optionsSkills = { threshold: 0.3 };

const animateSkills = (entries, observerSkills) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
      });
      observerSkills.unobserve(skillSection); // run once
    }
  });
};

const observerSkills = new IntersectionObserver(animateSkills, optionsSkills);
observerSkills.observe(skillSection);


// ==============================
// 5️⃣ Hamburger menu toggle
// ==============================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navToggle.classList.toggle('active');
});



