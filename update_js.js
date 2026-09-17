const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf-8');

const scrollExpandLogic = `
const smoothstep = (edge0, edge1, x) => {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0 || 1e-6)));
  return t * t * (3 - 2 * t);
};

class ScrollExpand {
  constructor(root, options = {}) {
    this.root = root;
    this.track = root.querySelector('.scroll-expand__track');
    this.stage = root.querySelector('.scroll-expand__stage');
    this.frame = root.querySelector('.scroll-expand__frame');
    this.media = root.querySelector('.scroll-expand__media');
    this.title = root.querySelector('.scroll-expand__title');
    this.overlay = root.querySelector('.scroll-expand__overlay');
    this.scrim = root.querySelector('.scroll-expand__scrim');
    this.hint = root.querySelector('.scroll-expand__hint');

    this.options = Object.assign({
      startWidth: 42,
      startHeight: 58,
      startRadius: 24,
      endRadius: 0,
      mediaZoom: 1.35,
      scrollDistance: 1.2,
      holdDistance: 0.35,
      smoothing: 0.1,
      overlayScrim: 0.45,
      enabled: true
    }, options);

    this.raf = 0;
    this.current = 0;
    this.target = 0;
    this.stageH = 0;
    this.running = false;
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.measure = this.measure.bind(this);
    this.readProgress = this.readProgress.bind(this);
    this.tick = this.tick.bind(this);
    this.kick = this.kick.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    
    this.init();
  }

  init() {
    this.measure();
    this.target = this.readProgress();
    this.current = this.target;
    this.applyProgress(this.current);

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    
    // Use IntersectionObserver to pause when not in view
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.measure();
          this.onScroll();
        }
      });
    }, { rootMargin: '100% 0px' });
    this.observer.observe(this.track);
  }

  measure() {
    this.stageH = window.innerHeight;
    if (this.stageH <= 0) return;
    this.stage.style.height = this.stageH + 'px';
    this.track.style.height = (this.stageH * (1 + Math.max(0, this.options.scrollDistance) + Math.max(0, this.options.holdDistance))) + 'px';

    const w = this.root.clientWidth || this.stageH;
    this.stage.style.setProperty('--se-title-size', Math.max(20, Math.min(84, w * 0.075)) + 'px');
  }

  readProgress() {
    if (!this.options.enabled) return 1;
    const span = this.stageH * Math.max(0.01, this.options.scrollDistance);
    const top = this.track.getBoundingClientRect().top;
    return Math.max(0, Math.min(1, -top / span));
  }

  tick() {
    const k = this.options.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * this.options.smoothing));
    this.current += (this.target - this.current) * k;
    if (Math.abs(this.target - this.current) < 0.0004) {
      this.current = this.target;
      this.running = false;
    }
    this.applyProgress(this.current);
    this.raf = this.running ? requestAnimationFrame(this.tick) : 0;
  }

  kick() {
    if (this.running) return;
    this.running = true;
    if (!this.raf) this.raf = requestAnimationFrame(this.tick);
  }

  onScroll() {
    this.target = this.readProgress();
    if (this.options.smoothing <= 0 || this.reduceMotion) {
      this.current = this.target;
      this.applyProgress(this.current);
      return;
    }
    this.kick();
  }

  onResize() {
    this.measure();
    this.target = this.readProgress();
    this.current = this.target;
    this.applyProgress(this.current);
  }

  applyProgress(p) {
    const c = this.options;
    const e = smoothstep(0, 1, p);

    const w = c.startWidth + (100 - c.startWidth) * e;
    const h = c.startHeight + (100 - c.startHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * e;
    this.frame.style.clipPath = \`inset(\${iy}% \${ix}% \${iy}% \${ix}% round \${r}px)\`;

    this.media.style.transform = \`scale(\${c.mediaZoom + (1 - c.mediaZoom) * e})\`;

    if (this.scrim) this.scrim.style.opacity = c.overlayScrim * e;

    if (this.title) {
      const out = smoothstep(0.4, 0.88, p);
      this.title.style.opacity = 1 - out;
      this.title.style.transform = \`translate3d(0, \${-28 * out}px, 0) scale(\${1 + 0.06 * out})\`;
    }

    if (this.hint) {
      const gone = smoothstep(0, 0.12, p);
      this.hint.style.opacity = 1 - gone;
      this.hint.style.transform = \`translate3d(0, \${8 * gone}px, 0)\`;
    }

    if (this.overlay) {
      const inn = smoothstep(0.68, 1, p);
      this.overlay.style.opacity = inn;
      this.overlay.style.transform = \`translate3d(0, \${18 * (1 - inn)}px, 0)\`;
      this.overlay.style.pointerEvents = inn > 0.9 ? 'auto' : 'none';
    }
  }
}

function buildScrollProjects() {
  const container = document.getElementById("projects-list");
  if(!container) return;
  container.innerHTML = "";

  projects.forEach((p, i) => {
    const tags = p.stack.map((t) => \`<span class="se-tag">\${t}</span>\`).join("");
    const isLive = p.status === "live";
    const btnIcon = isLive
      ? \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>\`
      : \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>\`;

    const root = document.createElement("div");
    root.className = "scroll-expand scroll-expand--window";
    
    root.innerHTML = \`
      <div class="scroll-expand__track">
        <div class="scroll-expand__stage">
          <div class="scroll-expand__frame">
            <img class="scroll-expand__media" src="\${p.image}" alt="\${p.name}" draggable="false">
            <div class="scroll-expand__scrim"></div>
            <div class="scroll-expand__overlay">
              <div class="se-overlay-content">
                <p class="se-desc">\${p.description}</p>
                <div class="se-tags">\${tags}</div>
                <a href="\${p.link}" target="_blank" rel="noopener noreferrer" class="se-btn">
                  \${isLive ? 'Visit Live' : 'View on GitHub'}
                  \${btnIcon}
                </a>
              </div>
            </div>
          </div>
          <div class="scroll-expand__title">\${p.name}</div>
          \${i === 0 ? '<div class="scroll-expand__hint">Scroll to explore</div>' : ''}
        </div>
      </div>
    \`;

    container.appendChild(root);
    new ScrollExpand(root, {
      startWidth: 60,
      startHeight: 45,
      mediaZoom: 1.1,
      scrollDistance: 1.0
    });
  });
}
`;

js = js.replace(/buildGrid\(\);/g, 'buildScrollProjects();');
js += scrollExpandLogic;

fs.writeFileSync('script.js', js);
console.log('Script updated');
