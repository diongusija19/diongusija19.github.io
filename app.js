const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a');
const revealTargets = document.querySelectorAll('.reveal');
const bars = document.querySelectorAll('.fill');
const stackSection = document.getElementById('stack');
const typedTarget = document.getElementById('typed-text');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('show');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

const stackObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      bars.forEach((bar) => {
        bar.style.width = bar.getAttribute('data-width');
      });
      observer.unobserve(stackSection);
    });
  },
  { threshold: 0.35 }
);

stackObserver.observe(stackSection);

const tagline = 'Fast interfaces. Clean architecture. Better user outcomes.';
let cursor = 0;

function typeTagline() {
  if (cursor < tagline.length) {
    typedTarget.textContent += tagline.charAt(cursor);
    cursor += 1;
    setTimeout(typeTagline, 40);
  }
}

typeTagline();

const tiltCards = document.querySelectorAll('.tilt');

function applyTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width;
  const py = (event.clientY - rect.top) / rect.height;
  const rotateY = (px - 0.5) * 6;
  const rotateX = (0.5 - py) * 6;

  card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
}

function resetTilt(event) {
  event.currentTarget.style.transform = 'translateY(0)';
}

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', applyTilt);
  card.addEventListener('mouseleave', resetTilt);
});
