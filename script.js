/* ========================================
   Project Showcase — Interactive Story Scroll
   ======================================== */

// ─── Project Data ───────────────────────────────────────
// Add your projects here! Each project needs:
//   name  — Display name for the card
//   image — URL or local path to a screenshot/image
//   link  — URL to the live site (opens in new tab on click)
// ─────────────────────────────────────────────────────────

const projects = [
  {
    name: "Blog Gen (LOCAL)",
    description: "An AI-powered platform that automatically generates engaging, high-quality blog posts.",
    image: "https://iili.io/nJccMcx.png",
    link: "https://blog-gen-psi.vercel.app/"
  },
  {
    name: "Proposal Generator (LIVE)",
    description: "An AI-powered platform that automatically generates professional proposals.",
    image: "https://i.ibb.co/V0NyzG22/image-10.png",
    link: "https://proposal-generator-six-virid.vercel.app/"
  },
  {
    name: "Media Assistance (LIVE)",
    description: "A platform for media content.",
    image: "https://i.ibb.co/CpgP9K1L/image-11.png",
    link: "https://media-assistance.vercel.app/"
  },
  {
    name: "Procurement Agent (LIVE)",
    description: "An AI-powered procurement agent that helps procurement professionals with daily tasks.",
    image: "https://i.ibb.co/Fqnp2smH/image-12.png",
    link: "https://procurement-agent-ochre.vercel.app/"
  },
  {
    name: "Homework Plus (LIVE)",
    description: "An AI-powered homework assistant that helps students with their daily homework.",
    image: "https://i.ibb.co/Fq3SsDtv/image-13.png",
    link: "https://homeworkplus.vercel.app/"
  },
  {
    name: "Sentry Fab",
    description: "A complete ERP solution for the complete workflow of a fabricated business.",
    image: "https://i.ibb.co/svzcyZjm/image-14.png",
    link: "https://ai-md-two.vercel.app/"
  },
  {
    name: "Multi RAG Chatbot (LOCAL)",
    description: "A chatbot that uses multiple RAG sources to answer questions.",
    image: "https://i.ibb.co/Bcc2RjQ7/image-23.png",
    link: "https://multi-rag-chatbot-bvpw.vercel.app/"
  },
  {
    name: "Travel Content Agent (LOCAL)",
    description: "An AI-powered agent that helps generate personalized travel itineraries and content.",
    image: "https://via.placeholder.com/800x600.png?text=Image+Coming+Soon",
    link: "https://travel-content-agent.vercel.app/"
  },
  {
    name: "DABAR INTERNATIONAL (LOCAL-CLIENT)",
    description: "A Fintech platfrom where you can get a one shot view of your financial life.",
    image: "https://via.placeholder.com/800x600.png?text=Image+Coming+Soon",
    link: "https://github.com/MonojitVE/DABAR-INTERNATIONAL"

  },
  {
    name: "AI DAM (LOCAL)",
    description: "An AI-powered digital asset management system.",
    image: "https://via.placeholder.com/800x600.png?text=Image+Coming+Soon",
    link: "https://github.com/SarthakMukherjee/AI-DAM.git"
  },
  {
    name: "Pre Sale Agent (LIVE)",
    description: "An AI-powered presale agent.",
    image: "https://i.ibb.co/613L8vV1/image.png",
    link: "https://presalesaiagent.vestaging.in/"
  }
];


// ─── DOM Elements ───────────────────────────────────────
const storyContainer = document.getElementById('story-container');
const navDotsContainer = document.getElementById('nav-dots');
const progressFill = document.getElementById('progress-fill');
const projectCount = document.getElementById('project-count');
const header = document.querySelector('.header');
const scrollHint = document.getElementById('scroll-hint');

// ─── Render Story Sections ─────────────────────────────
function renderStorySections() {
  // Update stats
  if (projectCount) {
    projectCount.textContent = projects.length;
  }

  if (!storyContainer) return;

  if (projects.length === 0) {
    storyContainer.innerHTML = `
      <div style="text-align:center; padding: 6rem 2rem;">
        <h3 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">No projects yet</h3>
        <p style="color: var(--text-secondary);">Add your first project to the <code>projects</code> array in <code>script.js</code></p>
      </div>
    `;
    return;
  }

  // Generate story sections
  storyContainer.innerHTML = projects.map((project, index) => {
    const url = extractDomain(project.link);
    const paddedIndex = String(index + 1).padStart(2, '0');

    return `
      <section class="story-section" id="story-${index}" data-index="${index}">
        <div class="container">
          <div class="story-layout">
            <!-- Text Side -->
            <div class="story-content">
              <div class="story-number">${paddedIndex}</div>
              <h2 class="story-title">${project.name}</h2>
              ${project.description ? `<p class="story-description">${project.description}</p>` : ''}
              <div class="story-url">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                <span>${url}</span>
              </div>
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="story-cta">
                Visit Project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            </div>
            <!-- Image Side -->
            <div class="story-image-wrapper parallax-element" data-parallax-speed="0.04">
              <div class="story-image-decoration deco-1"></div>
              <div class="story-image-decoration deco-2"></div>
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="story-image-container">
                <img src="${project.image}" alt="Screenshot of the ${project.name} project interface" loading="lazy" />
                <div class="story-image-overlay"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }).join('');

  // Generate navigation dots
  renderNavDots();
}

// ─── Navigation Dots ────────────────────────────────────
function renderNavDots() {
  if (!navDotsContainer) return;

  // Add hero dot
  let dotsHTML = `<div class="nav-dot active" data-target="hero-section" data-label="Home" role="button" tabindex="0" aria-label="Navigate to Home"></div>`;

  // Add project dots
  projects.forEach((project, index) => {
    dotsHTML += `<div class="nav-dot" data-target="story-${index}" data-label="${project.name}" role="button" tabindex="0" aria-label="Navigate to ${project.name}"></div>`;
  });

  navDotsContainer.innerHTML = dotsHTML;

  // Click handlers
  navDotsContainer.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Keyboard support
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dot.click();
      }
    });
  });
}

// ─── Scroll-Triggered Section Reveals ───────────────────
function initStoryScroll() {
  const sections = document.querySelectorAll('.story-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ─── Active Section Tracker (for Nav Dots) ──────────────
function initActiveSectionTracker() {
  const allSections = [
    document.getElementById('hero-section'),
    ...document.querySelectorAll('.story-section')
  ].filter(Boolean);

  const dots = navDotsContainer ? navDotsContainer.querySelectorAll('.nav-dot') : [];
  if (!dots.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          dots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('data-target') === targetId);
          });
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  allSections.forEach((section) => observer.observe(section));
}

// ─── Progress Bar ───────────────────────────────────────
function initProgressBar() {
  if (!progressFill) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = `${Math.min(progress, 100)}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ─── Parallax Effect ────────────────────────────────────
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  if (!parallaxElements.length) return;

  // Only run parallax on screens wide enough for it to look good
  if (window.innerWidth < 1024) return;

  function updateParallax() {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.04;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const translateY = centerOffset * speed * -1;
      el.style.transform = `translateY(${translateY}px)`;
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

// ─── Scroll Hint Auto-hide ──────────────────────────────
function initScrollHintHide() {
  if (!scrollHint) return;

  function checkHide() {
    if (window.scrollY > 100) {
      scrollHint.style.opacity = '0';
      scrollHint.style.pointerEvents = 'none';
    } else {
      scrollHint.style.opacity = '';
      scrollHint.style.pointerEvents = '';
    }
  }

  window.addEventListener('scroll', checkHide, { passive: true });
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
  renderStorySections();
  initStoryScroll();
  initActiveSectionTracker();
  initProgressBar();
  initParallax();
  initScrollHintHide();
  initHeaderScroll();

  // Animate the counter after a short delay
  setTimeout(() => {
    const countEl = document.getElementById('project-count');
    if (countEl) {
      animateCounter(countEl, projects.length);
    }
  }, 400);
});
