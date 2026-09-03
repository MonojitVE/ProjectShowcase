/* ========================================
   Project Showcase — Script
   ======================================== */

// ─── Project Data ───────────────────────────────────────
// Add your projects here! Each project needs:
//   name  — Display name for the card
//   image — URL or local path to a screenshot/image
//   link  — URL to the live site (opens in new tab on click)
// ─────────────────────────────────────────────────────────

const projects = [
  {
    name: "Blog Gen",
    description: "An AI-powered platform that automatically generates engaging, high-quality blog posts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://blog-gen-psi.vercel.app/"
  },
  {
    name: "Zenith E-Commerce",
    description: "A modern storefront with AI-powered recommendations, seamless checkout, and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example.com/zenith"
  },
  {
    name: "Aether Portfolio",
    description: "Minimal creative portfolio with smooth scroll animations, project galleries, and a contact form.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    link: "https://example.com/aether"
  }
];


// ─── DOM Elements ───────────────────────────────────────
const projectsGrid = document.getElementById('projects-grid');
const projectCount = document.getElementById('project-count');
const header = document.querySelector('.header');

// ─── Render Project Cards ───────────────────────────────
function renderProjects() {
  // Update stats
  if (projectCount) {
    projectCount.textContent = projects.length;
  }

  if (!projectsGrid) return;

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="12" y1="8" x2="12" y2="16"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </div>
        <h3>No projects yet</h3>
        <p>Add your first project to the <code>projects</code> array in <code>script.js</code></p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = projects.map((project, index) => {
    const url = extractDomain(project.link);
    return `
      <article class="project-card" data-index="${index}" onclick="openProject('${project.link}')">
        <div class="card-image">
          <img src="${project.image}" alt="${project.name} screenshot" loading="lazy" />
          <div class="card-overlay"></div>
          <div class="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${project.name}</h3>
          ${project.description ? `<p class="card-description">${project.description}</p>` : ''}
          <div class="card-url">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            <span>${url}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Initialize reveal after rendering
  initScrollReveal();
  initCardTilt();
}

// ─── Open Project Link ──────────────────────────────────
function openProject(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── Extract Domain from URL ────────────────────────────
function extractDomain(url) {
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch {
    return url;
  }
}

// ─── Scroll Reveal (Intersection Observer) ──────────────
function initScrollReveal() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  cards.forEach((card) => observer.observe(card));
}

// ─── Card Tilt Effect ───────────────────────────────────
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

// ─── Header Scroll Effect ───────────────────────────────
function initHeaderScroll() {
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Check initial state
}

// ─── Smooth Counter Animation ───────────────────────────
function animateCounter(element, target) {
  if (!element) return;
  let current = 0;
  const duration = 1500;
  const increment = target / (duration / 16);

  function step() {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      return;
    }
    element.textContent = Math.floor(current);
    requestAnimationFrame(step);
  }

  step();
}

// ─── Initialize ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initHeaderScroll();

  // Animate the counter after a short delay
  setTimeout(() => {
    const countEl = document.getElementById('project-count');
    if (countEl) {
      animateCounter(countEl, projects.length);
    }
  }, 400);
});
