document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    name: "Blog Gen",
    description:
      "An AI-powered platform that automatically generates engaging, high-quality blog posts with customizable tone and style.",
    image: "https://iili.io/nJccMcx.png",
    link: "http://localhost:3000/",
    month: "feb",
    status: "local",
    stack: ["FastAPI", "Groq", "Vanilla JS"],
    notes: [
      "Prompt-tunable tone and style presets",
      "Draft, edit, and export flow in one page",
      "Backend generates outlines before full copy",
    ],
  },
  {
    name: "Multi RAG Chatbot",
    description:
      "A chatbot that leverages multiple RAG sources to provide accurate, context-aware answers.",
    image: "https://i.ibb.co/ZznPLt2Z/Multi-Rag.png",
    link: "http://localhost:5173/",
    month: "mar",
    status: "local",
    stack: ["FastAPI", "Groq", "Vector search"],
    notes: [
      "Merges results from multiple document sources",
      "Cites the source chunk behind each answer",
      "Session memory across a conversation",
    ],
  },
  {
    name: "Procurement Agent",
    description:
      "An AI-powered procurement agent that helps procurement professionals streamline daily tasks.",
    image: "https://i.ibb.co/Fqnp2smH/image-12.png",
    link: "https://procurement-agent-ochre.vercel.app/",
    month: "mar",
    status: "live",
    stack: ["FastAPI", "React", "Groq"],
    notes: [
      "Automates vendor comparison and requests",
      "AI assistant answers procurement questions inline",
      "Deployed and in active use",
    ],
  },
  {
    name: "Proposal Generator",
    description:
      "An AI-powered platform that automatically generates professional proposals tailored to client needs.",
    image: "https://i.ibb.co/V0NyzG22/image-10.png",
    link: "https://proposal-generator-six-virid.vercel.app/",
    month: "apr",
    status: "live",
    stack: ["FastAPI", "React", "Groq"],
    notes: [
      "Turns a short brief into a formatted proposal",
      "Editable sections before export",
      "Tailors tone to the client type",
    ],
  },
  {
    name: "Travel Content Agent",
    description:
      "An AI-powered agent that generates personalized travel itineraries and engaging travel content.",
    image: "https://i.ibb.co/R4hWnBPV/Travelcontent.png",
    link: "http://localhost:5174/",
    month: "apr",
    status: "local",
    stack: ["FastAPI", "Groq", "Multi-agent"],
    notes: [
      "Chains multiple agents for research and writing",
      "Builds day-by-day itineraries from a prompt",
      "Produces publish-ready travel copy",
    ],
  },
  {
    name: "AI DAM",
    description:
      "An AI-powered digital asset management system for organizing and optimizing media assets.",
    image: "https://i.ibb.co/YBWst00k/DAM.png",
    link: "http://localhost:5175/login",
    month: "may",
    status: "local",
    stack: ["FastAPI", "React", "Groq"],
    notes: [
      "Auto-tags and organizes incoming media",
      "Search by content, not just filename",
      "Built for collaborative teams",
    ],
  },
  {
    name: "Sentry Fab",
    description:
      "A complete ERP solution for the end-to-end workflow of a fabrication business.",
    image: "https://i.ibb.co/svzcyZjm/image-14.png",
    link: "https://ai-md-two.vercel.app/",
    month: "may",
    status: "live",
    stack: ["FastAPI", "React", "Manufacturing"],
    notes: [
      "Covers quoting through to delivery",
      "AI-augmented manufacturing intelligence",
      "Deployed for a live fabrication business",
    ],
  },
  {
    name: "Pre Sale Agent",
    description:
      "An AI-powered presale agent that automates lead qualification and proposal creation.",
    image: "https://i.ibb.co/kgWrM4mF/presale.png",
    link: "https://presalesaiagent.vestaging.in/",
    month: "jun",
    status: "live",
    stack: ["FastAPI", "Groq", "React"],
    notes: [
      "Qualifies leads automatically from intake forms",
      "Drafts a proposal without manual input",
      "Staged for client rollout",
    ],
  },
  {
    name: "DABAR International",
    description:
      "A Fintech platform where you can get a comprehensive one-shot view of your financial life.",
    image: "https://i.ibb.co/Df9NFpST/DABAR.png",
    link: "https://github.com/MonojitVE/DABAR-INTERNATIONAL",
    month: "jul",
    status: "client-live",
    stack: ["FastAPI", "React", "Fintech"],
    notes: [
      "One-shot view of accounting and cash flow",
      "Built for the Tanzania / Africa market",
      "AI financial assistant built in",
    ],
  },
  {
    name: "Media Assistance",
    description:
      "A platform for intelligent media content curation and management powered by AI.",
    image: "https://i.ibb.co/CpgP9K1L/image-11.png",
    link: "https://media-assistance.vercel.app/",
    month: "jul",
    status: "live",
    stack: ["FastAPI", "Groq", "React"],
    notes: [
      "Curates media by relevance, not just tags",
      "Team-facing review and approval flow",
      "Deployed and in active use",
    ],
  },
  {
    name: "Homework Plus",
    description:
      "An AI-powered homework assistant that helps students learn and solve problems effectively.",
    image: "https://i.ibb.co/Fq3SsDtv/image-13.png",
    link: "https://homeworkplus.vercel.app/",
    month: "aug",
    status: "live",
    stack: ["FastAPI", "Groq", "React"],
    notes: [
      "Walks through problems step by step",
      "Adapts explanations to the student's level",
      "Deployed and in active use",
    ],
  },
];

const MONTHS = [
  { key: "feb", label: "February", short: "Feb", color: "#f472b6" },
  { key: "mar", label: "March", short: "Mar", color: "#a855f7" },
  { key: "apr", label: "April", short: "Apr", color: "#3b9de0" },
  { key: "may", label: "May", short: "May", color: "#14b8a6" },
  { key: "jun", label: "June", short: "Jun", color: "#22c55e" },
  { key: "jul", label: "July", short: "Jul", color: "#f5b642" },
  { key: "aug", label: "August", short: "Aug", color: "#fb7a3c" },
];

/* ========================================================
   CONSTELLATION MAP
   ======================================================== */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function bezierPt(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

class ConstellationMap {
  constructor(canvas, tooltipEl) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.tooltip = tooltipEl;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.W = 0;
    this.H = 0;
    this.monthNodes = [];
    this.projectNodes = [];
    this.hoveredNode = null;
    this.time = 0;
    this.animProgress = 0;
    this.isRevealed = false;
    this.particles = [];

    this._resize = this.resize.bind(this);
    this._move = this.onMove.bind(this);
    this._leave = this.onLeave.bind(this);
    this._click = this.onClick.bind(this);

    window.addEventListener("resize", this._resize);
    canvas.addEventListener("mousemove", this._move);
    canvas.addEventListener("mouseleave", this._leave);
    canvas.addEventListener("click", this._click);

    // Touch support
    canvas.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      this._move({ clientX: t.clientX, clientY: t.clientY });
    }, { passive: true });
    canvas.addEventListener("touchend", () => {
      if (this.hoveredNode && this.hoveredNode.type === "project") {
        window.open(this.hoveredNode.project.link, "_blank", "noopener");
      }
      setTimeout(() => this.onLeave(), 1500);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !this.isRevealed) this.isRevealed = true;
        });
      },
      { threshold: 0.15 },
    );
    io.observe(canvas);

    this.resize();
    this.spawnParticles();
    this.loop();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.W = rect.width;
    this.H = rect.height;
    this.canvas.width = this.W * this.dpr;
    this.canvas.height = this.H * this.dpr;
    this.canvas.style.width = this.W + "px";
    this.canvas.style.height = this.H + "px";
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.layoutNodes();
  }

  layoutNodes() {
    const W = this.W;
    const H = this.H;
    const padX = Math.max(60, W * 0.15);
    const padY = Math.max(60, H * 0.08);
    const usableW = W - padX * 2;
    const usableH = H - padY * 2;

    // Straight vertical line for months (centered horizontally)
    this.monthNodes = MONTHS.map((m, i) => {
      const x = W * 0.5; // Center horizontally
      const y = padY + (i / (MONTHS.length - 1)) * usableH;
      const count = projects.filter((p) => p.month === m.key).length;
      return {
        x, y, baseX: x, baseY: y,
        month: m, count,
        radius: Math.max(14, 10 + count * 5),
        phase: i * 1.3,
        type: "month",
      };
    });

    this.projectNodes = [];
    MONTHS.forEach((m, mi) => {
      const mProjs = projects.filter((p) => p.month === m.key);
      const mn = this.monthNodes[mi];

      mProjs.forEach((p, pi) => {
        const isRight = pi % 2 === 0;
        const dist = 70 + (Math.floor(pi / 2) * 35);
        // Add a slight angle offset to fan them out instead of a straight horizontal stack
        const angleOffset = (pi % 3 === 0) ? 0 : ((pi % 3 === 1) ? 0.25 : -0.25);
        const finalAngle = (isRight ? 0 : Math.PI) + angleOffset;

        this.projectNodes.push({
          x: mn.x + Math.cos(finalAngle) * dist,
          y: mn.y + Math.sin(finalAngle) * dist,
          project: p, monthIndex: mi, month: m,
          radius: 5.5,
          phase: pi * 0.9 + mi * 0.7,
          type: "project",
          displayX: 0, displayY: 0, displayR: 0,
        });
      });
    });
  }

  spawnParticles() {
    this.particles = [];
    for (let i = 0; i < MONTHS.length - 1; i++) {
      for (let j = 0; j < 4; j++) {
        this.particles.push({
          from: i, to: i + 1,
          t: Math.random(),
          speed: 0.001 + Math.random() * 0.002,
          size: 1 + Math.random() * 1.5,
          alpha: 0.2 + Math.random() * 0.5,
        });
      }
    }
  }

  loop() {
    this.time += 0.016;
    if (this.isRevealed && this.animProgress < 1) {
      this.animProgress = Math.min(1, this.animProgress + 0.01);
    }
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.W, this.H);

    this.drawGridDots(ctx);
    this.drawTimelineConnections(ctx);
    this.drawProjectLinks(ctx);
    this.drawParticles(ctx);
    this.drawProjectNodes(ctx);
    this.drawMonthNodes(ctx);
  }

  drawGridDots(ctx) {
    const sp = 36;
    ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
    for (let x = sp; x < this.W; x += sp) {
      for (let y = sp; y < this.H; y += sp) {
        ctx.beginPath();
        ctx.arc(x, y, 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  drawTimelineConnections(ctx) {
    if (this.animProgress <= 0) return;
    const nodes = this.monthNodes;

    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i];
      const b = nodes[i + 1];
      const prog = Math.min(1, this.animProgress * (nodes.length - 1) - i);
      if (prog <= 0) continue;

      const cp1x = a.x + (b.x - a.x) * 0.4;
      const cp1y = a.y;
      const cp2x = a.x + (b.x - a.x) * 0.6;
      const cp2y = b.y;

      // Glow line
      ctx.save();
      ctx.strokeStyle = hexToRgba(a.month.color, 0.08 * Math.min(1, prog));
      ctx.lineWidth = 6;
      ctx.filter = "blur(3px)";
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      if (prog >= 1) {
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, b.x, b.y);
      } else {
        const steps = 40;
        for (let s = 1; s <= steps * prog; s++) {
          const t = s / steps;
          ctx.lineTo(bezierPt(a.x, cp1x, cp2x, b.x, t), bezierPt(a.y, cp1y, cp2y, b.y, t));
        }
      }
      ctx.stroke();
      ctx.restore();

      // Sharp line
      ctx.save();
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * Math.min(1, prog)})`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 7]);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      if (prog >= 1) {
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, b.x, b.y);
      } else {
        const steps = 40;
        for (let s = 1; s <= steps * prog; s++) {
          const t = s / steps;
          ctx.lineTo(bezierPt(a.x, cp1x, cp2x, b.x, t), bezierPt(a.y, cp1y, cp2y, b.y, t));
        }
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  drawProjectLinks(ctx) {
    if (this.animProgress < 0.3) return;
    const linkAlpha = Math.min(1, (this.animProgress - 0.3) * 2);

    this.projectNodes.forEach((pn) => {
      const mn = this.monthNodes[pn.monthIndex];
      const isHovered = this.hoveredNode === pn;

      ctx.save();
      ctx.strokeStyle = isHovered
        ? hexToRgba(pn.month.color, 0.3 * linkAlpha)
        : `rgba(255, 255, 255, ${0.04 * linkAlpha})`;
      ctx.lineWidth = isHovered ? 1.2 : 0.6;
      ctx.beginPath();
      ctx.moveTo(mn.x, mn.y);
      ctx.lineTo(pn.x, pn.y);
      ctx.stroke();
      ctx.restore();
    });
  }

  drawParticles(ctx) {
    if (this.animProgress < 0.5) return;
    const pAlpha = (this.animProgress - 0.5) * 2;

    this.particles.forEach((p) => {
      p.t = (p.t + p.speed) % 1;
      const a = this.monthNodes[p.from];
      const b = this.monthNodes[p.to];
      const cp1x = a.x + (b.x - a.x) * 0.4;
      const cp1y = a.y;
      const cp2x = a.x + (b.x - a.x) * 0.6;
      const cp2y = b.y;
      const px = bezierPt(a.x, cp1x, cp2x, b.x, p.t);
      const py = bezierPt(a.y, cp1y, cp2y, b.y, p.t);

      ctx.save();
      ctx.globalAlpha = p.alpha * pAlpha;
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  drawProjectNodes(ctx) {
    if (this.animProgress < 0.3) return;
    const nodeAlpha = Math.min(1, (this.animProgress - 0.3) * 2.5);

    this.projectNodes.forEach((pn) => {
      const isHovered = this.hoveredNode === pn;
      const float = Math.sin(this.time * 1.2 + pn.phase) * 2;
      const x = pn.x;
      const y = pn.y + float;
      const r = pn.radius * nodeAlpha * (isHovered ? 1.8 : 1);
      const color = pn.month.color;

      // Glow on hover
      if (isHovered) {
        ctx.save();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
        grad.addColorStop(0, hexToRgba(color, 0.25));
        grad.addColorStop(1, hexToRgba(color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Node
      ctx.save();
      ctx.globalAlpha = (isHovered ? 0.95 : 0.55) * nodeAlpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      // Ring
      ctx.globalAlpha = (isHovered ? 0.5 : 0.2) * nodeAlpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, r + 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Name on hover
      if (isHovered) {
        ctx.save();
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = "#fff";
        ctx.font = `500 11px 'Inter', sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(pn.project.name, x, y + r + 16);
        ctx.restore();
      }

      pn.displayX = x;
      pn.displayY = y;
      pn.displayR = r;
    });
  }

  drawMonthNodes(ctx) {
    if (this.animProgress <= 0) return;

    this.monthNodes.forEach((mn) => {
      const isHovered = this.hoveredNode === mn;
      const float = Math.sin(this.time * 0.8 + mn.phase) * 3;
      const pulse = 1 + Math.sin(this.time * 1.5 + mn.phase) * 0.04;
      const x = mn.x;
      const y = mn.y + float;
      const r = mn.radius * this.animProgress * pulse * (isHovered ? 1.15 : 1);
      const color = mn.month.color;

      // Outer glow
      const grad = ctx.createRadialGradient(x, y, r * 0.3, x, y, r * 3);
      grad.addColorStop(0, hexToRgba(color, isHovered ? 0.2 : 0.12));
      grad.addColorStop(1, hexToRgba(color, 0));
      ctx.save();
      ctx.globalAlpha = this.animProgress;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Node
      ctx.save();
      ctx.globalAlpha = this.animProgress * (isHovered ? 1 : 0.85);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = isHovered ? 20 : 10;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Bright core
      ctx.save();
      ctx.globalAlpha = this.animProgress * 0.45;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x, y, r * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Month label
      ctx.save();
      ctx.globalAlpha = this.animProgress * (isHovered ? 1 : 0.75);
      ctx.fillStyle = isHovered ? "#fff" : "rgba(241, 245, 249, 0.8)";
      ctx.font = `600 13px 'Outfit', sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(mn.month.short, x, y + r + 22);

      // Count
      ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
      ctx.font = `11px 'Inter', sans-serif`;
      ctx.fillText(`${mn.count} project${mn.count !== 1 ? "s" : ""}`, x, y + r + 37);
      ctx.restore();

      mn.displayX = x;
      mn.displayY = y;
      mn.displayR = r;
    });
  }

  onMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = (e.clientX || 0) - rect.left;
    const my = (e.clientY || 0) - rect.top;

    let closest = null;
    let closestDist = Infinity;

    // Check project nodes first
    for (const pn of this.projectNodes) {
      const dx = mx - (pn.displayX || pn.x);
      const dy = my - (pn.displayY || pn.y);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < (pn.displayR || pn.radius) + 14 && dist < closestDist) {
        closest = pn;
        closestDist = dist;
      }
    }
    // Then month nodes
    if (!closest) {
      for (const mn of this.monthNodes) {
        const dx = mx - (mn.displayX || mn.x);
        const dy = my - (mn.displayY || mn.y);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < (mn.displayR || mn.radius) + 10 && dist < closestDist) {
          closest = mn;
          closestDist = dist;
        }
      }
    }

    this.hoveredNode = closest;
    this.canvas.style.cursor = closest && closest.type === "project" ? "pointer" : "default";

    if (closest && this.tooltip) {
      const tipX = closest.displayX || closest.x;
      const tipY = (closest.displayY || closest.y) - (closest.displayR || closest.radius) - 10;
      this.tooltip.style.left = tipX + "px";
      this.tooltip.style.top = tipY + "px";

      if (closest.type === "project") {
        const p = closest.project;
        const live = p.status === "live" || p.status === "client-live";
        this.tooltip.innerHTML = `
          <div class="tt-name">${p.name}</div>
          <div class="tt-desc">${p.description}</div>
          <div class="tt-meta">${MONTHS.find((m) => m.key === p.month).label} · ${p.stack.join(", ")}</div>
          <span class="tt-status" style="background:${hexToRgba(closest.month.color, 0.15)};color:${closest.month.color}">${live ? "● Live" : "○ Local"}</span>`;
      } else {
        const mp = projects.filter((p) => p.month === closest.month.key);
        this.tooltip.innerHTML = `
          <div class="tt-name">${closest.month.label}</div>
          <div class="tt-desc">${closest.count} project${closest.count !== 1 ? "s" : ""} shipped</div>
          <div class="tt-meta">${mp.map((p) => p.name).join(" · ")}</div>`;
      }
      this.tooltip.classList.add("show");

      // Adjust tooltip position to stay within window bounds
      requestAnimationFrame(() => {
        if (!this.tooltip.classList.contains("show")) return;
        const ttRect = this.tooltip.getBoundingClientRect();
        const canvasRect = this.canvas.getBoundingClientRect();

        let adjustedX = tipX;
        let adjustedY = tipY;
        const absoluteX = canvasRect.left + tipX;
        const absoluteY = canvasRect.top + tipY;

        // Prevent cutting off on the right
        if (absoluteX + ttRect.width / 2 > window.innerWidth - 20) {
          adjustedX -= (absoluteX + ttRect.width / 2) - (window.innerWidth - 20);
        }
        // Prevent cutting off on the left
        else if (absoluteX - ttRect.width / 2 < 20) {
          adjustedX += 20 - (absoluteX - ttRect.width / 2);
        }

        // Prevent cutting off on top (if scrolled near top of canvas)
        if (absoluteY - ttRect.height < 20) {
          adjustedY += ttRect.height + 40; // Flip it below the node
        }

        this.tooltip.style.left = adjustedX + "px";
        this.tooltip.style.top = adjustedY + "px";
      });
    } else if (this.tooltip) {
      this.tooltip.classList.remove("show");
    }
  }

  onLeave() {
    this.hoveredNode = null;
    this.canvas.style.cursor = "default";
    if (this.tooltip) this.tooltip.classList.remove("show");
  }

  onClick() {
    if (this.hoveredNode && this.hoveredNode.type === "project") {
      window.open(this.hoveredNode.project.link, "_blank", "noopener");
    }
  }
}

function buildConstellationMap() {
  const canvas = document.getElementById("constellationCanvas");
  const tooltip = document.getElementById("mapTooltip");
  if (!canvas) return;

  new ConstellationMap(canvas, tooltip);

  // Build legend
  const legend = document.getElementById("mapLegend");
  if (legend) {
    legend.innerHTML = MONTHS.map(
      (m) =>
        `<div class="map-legend-item"><span class="map-legend-dot" style="background:${m.color}"></span>${m.short}</div>`,
    ).join("");
  }
}

/* ========================================================
   INIT FUNCTIONS (shared across pages)
   ======================================================== */
function initProgress() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initScrollHint() {
  const hint = document.getElementById("scrollHint");
  if (!hint) return;
  window.addEventListener(
    "scroll",
    () => { hint.style.opacity = window.scrollY > 80 ? "0" : ""; },
    { passive: true },
  );
}

function initTyping() {
  const el = document.getElementById("typing");
  if (!el) return;
  const words = ["experiments", "interfaces", "AI agents", "products"];
  let w = 0, c = 0, del = false;
  function tick() {
    const word = words[w];
    el.textContent = del ? word.slice(0, c - 1) : word.slice(0, c + 1);
    c += del ? -1 : 1;
    let speed = del ? 40 : 85;
    if (!del && c === word.length) { speed = 2200; del = true; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; speed = 300; }
    setTimeout(tick, speed);
  }
  setTimeout(tick, 1600);
}

function animateCountEl(el, target, dur = 1400) {
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - t, 4)) * target);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

function animateCount() {
  const countEl = document.getElementById("count");
  if (countEl) animateCountEl(countEl, projects.length);

  const liveEl = document.getElementById("liveCount");
  if (liveEl) {
    const liveCount = projects.filter((p) => p.status === "live" || p.status === "client-live").length;
    animateCountEl(liveEl, liveCount);
  }

  const stackEl = document.getElementById("stackCount");
  if (stackEl) {
    const allStacks = new Set();
    projects.forEach((p) => p.stack.forEach((s) => allStacks.add(s)));
    animateCountEl(stackEl, allStacks.size);
  }
}

function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("mobileNavClose");
  if (!btn || !nav) return;

  const open = () => {
    nav.style.display = "flex";
    requestAnimationFrame(() => nav.classList.add("open"));
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    nav.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => { if (!nav.classList.contains("open")) nav.style.display = "none"; }, 300);
  };

  btn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

function initFadeInSections() {
  const sections = document.querySelectorAll(".fade-in-section");
  if (!sections.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
      });
    },
    { threshold: 0.15 },
  );
  sections.forEach((s) => observer.observe(s));
}

/* ========================================================
   SHAPEGRID
   ======================================================== */
class ShapeGrid {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.direction = options.direction || "diagonal";
    this.speed = options.speed || 0.5;
    this.borderColor = options.borderColor || "rgba(255, 255, 255, 0.08)";
    this.squareSize = options.squareSize || 40;
    this.hoverFillColor = options.hoverFillColor || "rgba(20, 184, 166, 0.2)";
    this.shape = options.shape || "hexagon";
    this.hoverTrailAmount = options.hoverTrailAmount !== undefined ? options.hoverTrailAmount : 5;
    this.requestRef = null;
    this.numSquaresX = 0;
    this.numSquaresY = 0;
    this.gridOffset = { x: 0, y: 0 };
    this.hoveredSquare = null;
    this.trailCells = [];
    this.cellOpacities = new Map();
    this.isHex = this.shape === "hexagon";
    this.isTri = this.shape === "triangle";
    this.hexHoriz = this.squareSize * 1.5;
    this.hexVert = this.squareSize * Math.sqrt(3);
    this.resizeCanvas = this.resizeCanvas.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.updateAnimation = this.updateAnimation.bind(this);
    this.onVisibility = this.onVisibility.bind(this);
    window.addEventListener("resize", this.resizeCanvas);
    this.canvas.addEventListener("mousemove", this.handleMouseMove);
    this.canvas.addEventListener("mouseleave", this.handleMouseLeave);
    document.addEventListener("visibilitychange", this.onVisibility);
    this.resizeCanvas();
    this.isVisible = false;
    this.isPageVisible = !document.hidden;
    this.io = new IntersectionObserver(
      ([entry]) => { this.isVisible = entry.isIntersecting; this.isVisible ? this.tryStart() : this.tryStop(); },
      { threshold: 0 },
    );
    this.io.observe(this.canvas);
    this.tryStart();
  }
  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.numSquaresX = Math.ceil(this.canvas.width / this.squareSize) + 1;
    this.numSquaresY = Math.ceil(this.canvas.height / this.squareSize) + 1;
  }
  drawHex(cx, cy, size) {
    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const vx = cx + size * Math.cos(angle);
      const vy = cy + size * Math.sin(angle);
      if (i === 0) this.ctx.moveTo(vx, vy); else this.ctx.lineTo(vx, vy);
    }
    this.ctx.closePath();
  }
  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.isHex) {
      const colShift = Math.floor(this.gridOffset.x / this.hexHoriz);
      const offsetX = ((this.gridOffset.x % this.hexHoriz) + this.hexHoriz) % this.hexHoriz;
      const offsetY = ((this.gridOffset.y % this.hexVert) + this.hexVert) % this.hexVert;
      const cols = Math.ceil(this.canvas.width / this.hexHoriz) + 3;
      const rows = Math.ceil(this.canvas.height / this.hexVert) + 3;
      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * this.hexHoriz + offsetX;
          const cy = row * this.hexVert + ((col + colShift) % 2 !== 0 ? this.hexVert / 2 : 0) + offsetY;
          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) { this.ctx.globalAlpha = alpha; this.drawHex(cx, cy, this.squareSize); this.ctx.fillStyle = this.hoverFillColor; this.ctx.fill(); this.ctx.globalAlpha = 1; }
          this.drawHex(cx, cy, this.squareSize);
          this.ctx.strokeStyle = this.borderColor;
          this.ctx.stroke();
        }
      }
    } else {
      const offsetX = ((this.gridOffset.x % this.squareSize) + this.squareSize) % this.squareSize;
      const offsetY = ((this.gridOffset.y % this.squareSize) + this.squareSize) % this.squareSize;
      const cols = Math.ceil(this.canvas.width / this.squareSize) + 3;
      const rows = Math.ceil(this.canvas.height / this.squareSize) + 3;
      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const sx = col * this.squareSize + offsetX;
          const sy = row * this.squareSize + offsetY;
          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) { this.ctx.globalAlpha = alpha; this.ctx.fillStyle = this.hoverFillColor; this.ctx.fillRect(sx, sy, this.squareSize, this.squareSize); this.ctx.globalAlpha = 1; }
          this.ctx.strokeStyle = this.borderColor;
          this.ctx.strokeRect(sx, sy, this.squareSize, this.squareSize);
        }
      }
    }
    const gradient = this.ctx.createRadialGradient(this.canvas.width / 2, this.canvas.height / 2, 0, this.canvas.width / 2, this.canvas.height / 2, Math.sqrt(this.canvas.width ** 2 + this.canvas.height ** 2) / 2);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  updateAnimation() {
    const effectiveSpeed = Math.max(this.speed, 0.1);
    const wrapX = this.isHex ? this.hexHoriz * 2 : this.squareSize;
    const wrapY = this.isHex ? this.hexVert : this.squareSize;
    switch (this.direction) {
      case "right": this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + wrapX) % wrapX; break;
      case "left": this.gridOffset.x = (this.gridOffset.x + effectiveSpeed + wrapX) % wrapX; break;
      case "up": this.gridOffset.y = (this.gridOffset.y + effectiveSpeed + wrapY) % wrapY; break;
      case "down": this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + wrapY) % wrapY; break;
      case "diagonal":
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + wrapX) % wrapX;
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + wrapY) % wrapY;
        break;
    }
    this.updateCellOpacities();
    this.drawGrid();
    this.requestRef = requestAnimationFrame(this.updateAnimation);
  }
  updateCellOpacities() {
    const targets = new Map();
    if (this.hoveredSquare) targets.set(`${this.hoveredSquare.x},${this.hoveredSquare.y}`, 1);
    if (this.hoverTrailAmount > 0) {
      for (let i = 0; i < this.trailCells.length; i++) {
        const t = this.trailCells[i];
        const key = `${t.x},${t.y}`;
        if (!targets.has(key)) targets.set(key, (this.trailCells.length - i) / (this.trailCells.length + 1));
      }
    }
    for (const [key] of targets) { if (!this.cellOpacities.has(key)) this.cellOpacities.set(key, 0); }
    for (const [key, opacity] of this.cellOpacities) {
      const target = targets.get(key) || 0;
      const next = opacity + (target - opacity) * 0.15;
      if (next < 0.005) this.cellOpacities.delete(key);
      else this.cellOpacities.set(key, next);
    }
  }
  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (this.isHex) {
      const colShift = Math.floor(this.gridOffset.x / this.hexHoriz);
      const offsetX = ((this.gridOffset.x % this.hexHoriz) + this.hexHoriz) % this.hexHoriz;
      const offsetY = ((this.gridOffset.y % this.hexVert) + this.hexVert) % this.hexVert;
      const col = Math.round((mouseX - offsetX) / this.hexHoriz);
      const rowOffset = (col + colShift) % 2 !== 0 ? this.hexVert / 2 : 0;
      const row = Math.round((mouseY - offsetY - rowOffset) / this.hexVert);
      if (!this.hoveredSquare || this.hoveredSquare.x !== col || this.hoveredSquare.y !== row) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) { this.trailCells.unshift({ ...this.hoveredSquare }); if (this.trailCells.length > this.hoverTrailAmount) this.trailCells.length = this.hoverTrailAmount; }
        this.hoveredSquare = { x: col, y: row };
      }
    } else {
      const offsetX = ((this.gridOffset.x % this.squareSize) + this.squareSize) % this.squareSize;
      const offsetY = ((this.gridOffset.y % this.squareSize) + this.squareSize) % this.squareSize;
      const col = Math.floor((mouseX - offsetX) / this.squareSize);
      const row = Math.floor((mouseY - offsetY) / this.squareSize);
      if (!this.hoveredSquare || this.hoveredSquare.x !== col || this.hoveredSquare.y !== row) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) { this.trailCells.unshift({ ...this.hoveredSquare }); if (this.trailCells.length > this.hoverTrailAmount) this.trailCells.length = this.hoverTrailAmount; }
        this.hoveredSquare = { x: col, y: row };
      }
    }
  }
  handleMouseLeave() {
    if (this.hoveredSquare && this.hoverTrailAmount > 0) { this.trailCells.unshift({ ...this.hoveredSquare }); if (this.trailCells.length > this.hoverTrailAmount) this.trailCells.length = this.hoverTrailAmount; }
    this.hoveredSquare = null;
  }
  tryStart() { if (this.isVisible && this.isPageVisible && !this.requestRef) this.requestRef = requestAnimationFrame(this.updateAnimation); }
  tryStop() { if (this.requestRef) { cancelAnimationFrame(this.requestRef); this.requestRef = null; } }
  onVisibility() { this.isPageVisible = !document.hidden; this.isPageVisible ? this.tryStart() : this.tryStop(); }
}

/* ========================================================
   SCROLL-EXPAND (projects page only)
   ======================================================== */
const smoothstep = (edge0, edge1, x) => {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0 || 1e-6)));
  return t * t * (3 - 2 * t);
};

class ScrollExpand {
  constructor(root, options = {}) {
    this.root = root;
    this.track = root.querySelector(".scroll-expand__track");
    this.stage = root.querySelector(".scroll-expand__stage");
    this.frame = root.querySelector(".scroll-expand__frame");
    this.media = root.querySelector(".scroll-expand__media");
    this.title = root.querySelector(".scroll-expand__title");
    this.overlay = root.querySelector(".scroll-expand__overlay");
    this.scrim = root.querySelector(".scroll-expand__scrim");
    this.hint = root.querySelector(".scroll-expand__hint");
    this.options = Object.assign({
      startWidth: 42, startHeight: 58, startRadius: 24, endRadius: 0,
      mediaZoom: 1.35, scrollDistance: 1.2, holdDistance: 0.35,
      smoothing: 0.1, overlayScrim: 0.45, enabled: true,
    }, options);
    this.raf = 0; this.current = 0; this.target = 0; this.stageH = 0; this.running = false;
    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.measure = this.measure.bind(this);
    this.readProgress = this.readProgress.bind(this);
    this.tick = this.tick.bind(this);
    this.kick = this.kick.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.init();
  }
  init() {
    this.measure(); this.target = this.readProgress(); this.current = this.target; this.applyProgress(this.current);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onResize);
    this.observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { this.measure(); this.onScroll(); } }); }, { rootMargin: "100% 0px" });
    this.observer.observe(this.track);
  }
  measure() {
    this.stageH = window.innerHeight;
    if (this.stageH <= 0) return;
    this.stage.style.height = this.stageH + "px";
    this.track.style.height = (this.stageH * (1 + Math.max(0, this.options.scrollDistance) + Math.max(0, this.options.holdDistance))) + "px";
    const w = this.root.clientWidth || this.stageH;
    this.stage.style.setProperty("--se-title-size", Math.max(20, Math.min(84, w * 0.075)) + "px");
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
    if (Math.abs(this.target - this.current) < 0.0004) { this.current = this.target; this.running = false; }
    this.applyProgress(this.current);
    this.raf = this.running ? requestAnimationFrame(this.tick) : 0;
  }
  kick() { if (this.running) return; this.running = true; if (!this.raf) this.raf = requestAnimationFrame(this.tick); }
  onScroll() {
    this.target = this.readProgress();
    if (this.options.smoothing <= 0 || this.reduceMotion) { this.current = this.target; this.applyProgress(this.current); return; }
    this.kick();
  }
  onResize() { this.measure(); this.target = this.readProgress(); this.current = this.target; this.applyProgress(this.current); }
  applyProgress(p) {
    const c = this.options;
    const e = smoothstep(0, 1, p);
    const w = c.startWidth + (100 - c.startWidth) * e;
    const h = c.startHeight + (100 - c.startHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * e;
    this.frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;
    this.media.style.transform = `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;
    if (this.scrim) this.scrim.style.opacity = c.overlayScrim * e;
    if (this.title) { const out = smoothstep(0.15, 0.6, p); this.title.style.opacity = 1 - out; this.title.style.transform = `translate3d(0, ${-40 * out}px, 0) scale(${1 + 0.08 * out})`; }
    if (this.hint) { const gone = smoothstep(0, 0.12, p); this.hint.style.opacity = 1 - gone; this.hint.style.transform = `translate3d(0, ${8 * gone}px, 0)`; }
    if (this.overlay) { const inn = smoothstep(0.68, 1, p); this.overlay.style.opacity = inn; this.overlay.style.transform = `translate3d(0, ${18 * (1 - inn)}px, 0)`; this.overlay.style.pointerEvents = inn > 0.9 ? "auto" : "none"; }
  }
}

function buildScrollProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;
  container.innerHTML = "";

  projects.forEach((p, i) => {
    const tags = p.stack.map((t) => `<span class="se-tag">${t}</span>`).join("");
    const isLive = p.status === "live" || p.status === "client-live";
    const btnIcon = isLive
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`;

    const root = document.createElement("div");
    root.className = "scroll-expand scroll-expand--window";
    root.innerHTML = `
<div class="scroll-expand__track">
<div class="scroll-expand__stage">
<div class="scroll-expand__frame">
<img class="scroll-expand__media" src="${p.image}" alt="${p.name}" draggable="false">
<div class="scroll-expand__scrim"></div>
<div class="scroll-expand__overlay">
<div class="se-overlay-content">
<p class="se-desc">${p.description}</p>
<div class="se-tags">${tags}</div>
<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="se-btn">
                  ${isLive ? "Visit Live" : "View on GitHub"}
                  ${btnIcon}
</a>
</div>
</div>
</div>
<div class="scroll-expand__title">${p.name}</div>
          ${i === 0 ? '<div class="scroll-expand__hint">Scroll to explore</div>' : ""}
</div>
</div>
    `;

    container.appendChild(root);
    new ScrollExpand(root, {
      startWidth: 60, startHeight: 45, mediaZoom: 1.1,
      scrollDistance: 1.0, overlayScrim: 0.92,
    });
  });
}

/* ========================================================
   PAGE INIT
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Common: ShapeGrid background
  const bgCanvas = document.getElementById("shapegrid-canvas");
  if (bgCanvas) {
    new ShapeGrid(bgCanvas, {
      direction: "diagonal",
      speed: 0.5,
      squareSize: 40,
      borderColor: "rgba(255, 255, 255, 0.06)",
      hoverFillColor: "rgba(45, 212, 191, 0.12)",
      shape: "hexagon",
      hoverTrailAmount: 5,
    });
  }

  // Common
  initProgress();
  initHeader();
  initMobileMenu();
  initFadeInSections();

  // Home page
  if (document.getElementById("constellationCanvas")) {
    buildConstellationMap();
    initScrollHint();
    initTyping();
    setTimeout(animateCount, 300);
  }

  // Projects page
  if (document.getElementById("projects-list")) {
    buildScrollProjects();
  }
});