const sections = document.querySelectorAll('.animate');
const skillSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.fill');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navAnchors = navLinks.querySelectorAll('a');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => revealObserver.observe(section));

const typedText = 'HTML • CSS • JavaScript • UX-minded interfaces';
const typedTarget = document.getElementById('typed-text');
let currentTextIndex = 0;

function typeHeroText() {
  if (currentTextIndex < typedText.length) {
    typedTarget.textContent += typedText.charAt(currentTextIndex);
    currentTextIndex += 1;
    setTimeout(typeHeroText, 55);
  }
}

typeHeroText();

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillBars.forEach((bar) => {
          bar.style.width = bar.getAttribute('data-width');
        });
        observer.unobserve(skillSection);
      }
    });
  },
  { threshold: 0.35 }
);

skillsObserver.observe(skillSection);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navToggle.classList.toggle('active');
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    navLinks.classList.remove('show');
    navToggle.classList.remove('active');
  });
});


