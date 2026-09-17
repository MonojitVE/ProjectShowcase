document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    name: "Blog Gen",
    description:
      "An AI-powered platform that automatically generates engaging, high-quality blog posts with customizable tone and style.",
    image: "https://iili.io/nJccMcx.png",
    link: "https://blog-gen-psi.vercel.app/",
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
    link: "https://multi-rag-chatbot-bvpw.vercel.app/",
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
    link: "https://travel-content-agent.vercel.app/",
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
    link: "https://github.com/SarthakMukherjee/AI-DAM.git",
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

function buildSkyline() {
  const grad = document.getElementById("ridgeGrad");
  grad.innerHTML = MONTHS.map(
    (m, i) =>
      `<stop offset="${(i / (MONTHS.length - 1)) * 100}%" stop-color="${m.color}"/>`,
  ).join("");

  const counts = MONTHS.map(
    (m) => projects.filter((p) => p.month === m.key).length,
  );
  const W = 1200,
    padX = 90,
    baseY = 250,
    maxLift = 150,
    minLift = 40;
  const maxCount = Math.max(...counts, 1);
  const pts = MONTHS.map((m, i) => {
    const x = padX + i * ((W - padX * 2) / (MONTHS.length - 1));
    const lift = minLift + (counts[i] / maxCount) * maxLift;
    return { x, y: baseY - lift, m, count: counts[i] };
  });

  function smoothPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  const ridgeD = smoothPath(pts);
  document.getElementById("ridgePath").setAttribute("d", ridgeD);
  document
    .getElementById("ridgeFill")
    .setAttribute(
      "d",
      `${ridgeD} L ${pts[pts.length - 1].x} ${baseY + 30} L ${pts[0].x} ${baseY + 30} Z`,
    );

  const peaksG = document.getElementById("peaks");
  peaksG.innerHTML = pts
    .map(
      (pt) => `
<g class="peak" data-month="${pt.m.key}" data-x="${pt.x}" data-y="${pt.y}" style="color:${pt.m.color}">
<circle class="peak-dot" cx="${pt.x}" cy="${pt.y}" r="5.5" fill="${pt.m.color}"></circle>
<text class="peak-label" x="${pt.x}" y="${baseY + 40}" text-anchor="middle">${pt.m.short}</text>
<text class="peak-count" x="${pt.x}" y="${baseY + 58}" text-anchor="middle">${pt.count} project${pt.count !== 1 ? "s" : ""}</text>
</g>
  `,
    )
    .join("");

  const tip = document.getElementById("peakTip");
  const wrap = document.getElementById("skylineWrap");
  peaksG.querySelectorAll(".peak").forEach((peak) => {
    peak.addEventListener("mouseenter", () => {
      const key = peak.getAttribute("data-month");
      const names = projects.filter((p) => p.month === key).map((p) => p.name);
      const svg = document.getElementById("skylineSvg");
      const pt = svg.createSVGPoint();
      pt.x = +peak.getAttribute("data-x");
      pt.y = +peak.getAttribute("data-y");
      const screenPt = pt.matrixTransform(svg.getScreenCTM());
      const wrapRect = wrap.getBoundingClientRect();
      tip.style.left = `${screenPt.x - wrapRect.left}px`;
      tip.style.top = `${screenPt.y - wrapRect.top}px`;
      tip.innerHTML = names.length
        ? `<b>${MONTHS.find((m) => m.key === key).label}</b><br>${names.join("<br>")}`
        : `<b>${MONTHS.find((m) => m.key === key).label}</b><br>No projects yet`;
      tip.classList.add("show");
    });
    peak.addEventListener("mouseleave", () => tip.classList.remove("show"));
  });

  const path = document.getElementById("ridgePath");
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          wrap.classList.add("in-view");
          path.style.transition =
            "stroke-dashoffset 1.6s cubic-bezier(.16,1,.3,1)";
          path.style.strokeDashoffset = 0;
          io.disconnect();
        }
      });
    },
    { threshold: 0.35 },
  );
  io.observe(wrap);
}

function initProgress() {
  const fill = document.getElementById("progressFill");
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}
function initHeader() {
  const header = document.getElementById("header");
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
function initScrollHint() {
  const hint = document.getElementById("scrollHint");
  window.addEventListener(
    "scroll",
    () => {
      hint.style.opacity = window.scrollY > 80 ? "0" : "";
    },
    { passive: true },
  );
}
function initTyping() {
  const el = document.getElementById("typing");
  const words = ["experiments", "interfaces", "AI agents", "products"];
  let w = 0,
    c = 0,
    del = false;
  function tick() {
    const word = words[w];
    el.textContent = del ? word.slice(0, c - 1) : word.slice(0, c + 1);
    c += del ? -1 : 1;
    let speed = del ? 40 : 85;
    if (!del && c === word.length) {
      speed = 2200;
      del = true;
    } else if (del && c === 0) {
      del = false;
      w = (w + 1) % words.length;
      speed = 300;
    }
    setTimeout(tick, speed);
  }
  setTimeout(tick, 1600);
}
function animateCount() {
  const el = document.getElementById("count");
  const target = projects.length;
  const start = performance.now(),
    dur = 1400;
  function step(now) {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - t, 4)) * target);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

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
    this.hoverTrailAmount =
      options.hoverTrailAmount !== undefined ? options.hoverTrailAmount : 5;

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
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
        this.isVisible ? this.tryStart() : this.tryStop();
      },
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
      if (i === 0) this.ctx.moveTo(vx, vy);
      else this.ctx.lineTo(vx, vy);
    }
    this.ctx.closePath();
  }

  drawCircle(cx, cy, size) {
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
    this.ctx.closePath();
  }

  drawTriangle(cx, cy, size, flip) {
    this.ctx.beginPath();
    if (flip) {
      this.ctx.moveTo(cx, cy + size / 2);
      this.ctx.lineTo(cx + size / 2, cy - size / 2);
      this.ctx.lineTo(cx - size / 2, cy - size / 2);
    } else {
      this.ctx.moveTo(cx, cy - size / 2);
      this.ctx.lineTo(cx + size / 2, cy + size / 2);
      this.ctx.lineTo(cx - size / 2, cy + size / 2);
    }
    this.ctx.closePath();
  }

  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.isHex) {
      const colShift = Math.floor(this.gridOffset.x / this.hexHoriz);
      const offsetX =
        ((this.gridOffset.x % this.hexHoriz) + this.hexHoriz) % this.hexHoriz;
      const offsetY =
        ((this.gridOffset.y % this.hexVert) + this.hexVert) % this.hexVert;

      const cols = Math.ceil(this.canvas.width / this.hexHoriz) + 3;
      const rows = Math.ceil(this.canvas.height / this.hexVert) + 3;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * this.hexHoriz + offsetX;
          const cy =
            row * this.hexVert +
            ((col + colShift) % 2 !== 0 ? this.hexVert / 2 : 0) +
            offsetY;

          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) {
            this.ctx.globalAlpha = alpha;
            this.drawHex(cx, cy, this.squareSize);
            this.ctx.fillStyle = this.hoverFillColor;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
          }

          this.drawHex(cx, cy, this.squareSize);
          this.ctx.strokeStyle = this.borderColor;
          this.ctx.stroke();
        }
      }
    } else if (this.isTri) {
      const halfW = this.squareSize / 2;
      const colShift = Math.floor(this.gridOffset.x / halfW);
      const rowShift = Math.floor(this.gridOffset.y / this.squareSize);
      const offsetX = ((this.gridOffset.x % halfW) + halfW) % halfW;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const cols = Math.ceil(this.canvas.width / halfW) + 4;
      const rows = Math.ceil(this.canvas.height / this.squareSize) + 4;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * halfW + offsetX;
          const cy = row * this.squareSize + this.squareSize / 2 + offsetY;
          const flip = (((col + colShift + row + rowShift) % 2) + 2) % 2 !== 0;

          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) {
            this.ctx.globalAlpha = alpha;
            this.drawTriangle(cx, cy, this.squareSize, flip);
            this.ctx.fillStyle = this.hoverFillColor;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
          }

          this.drawTriangle(cx, cy, this.squareSize, flip);
          this.ctx.strokeStyle = this.borderColor;
          this.ctx.stroke();
        }
      }
    } else if (this.shape === "circle") {
      const offsetX =
        ((this.gridOffset.x % this.squareSize) + this.squareSize) %
        this.squareSize;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const cols = Math.ceil(this.canvas.width / this.squareSize) + 3;
      const rows = Math.ceil(this.canvas.height / this.squareSize) + 3;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * this.squareSize + this.squareSize / 2 + offsetX;
          const cy = row * this.squareSize + this.squareSize / 2 + offsetY;

          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) {
            this.ctx.globalAlpha = alpha;
            this.drawCircle(cx, cy, this.squareSize);
            this.ctx.fillStyle = this.hoverFillColor;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
          }

          this.drawCircle(cx, cy, this.squareSize);
          this.ctx.strokeStyle = this.borderColor;
          this.ctx.stroke();
        }
      }
    } else {
      const offsetX =
        ((this.gridOffset.x % this.squareSize) + this.squareSize) %
        this.squareSize;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const cols = Math.ceil(this.canvas.width / this.squareSize) + 3;
      const rows = Math.ceil(this.canvas.height / this.squareSize) + 3;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const sx = col * this.squareSize + offsetX;
          const sy = row * this.squareSize + offsetY;

          const cellKey = `${col},${row}`;
          const alpha = this.cellOpacities.get(cellKey);
          if (alpha) {
            this.ctx.globalAlpha = alpha;
            this.ctx.fillStyle = this.hoverFillColor;
            this.ctx.fillRect(sx, sy, this.squareSize, this.squareSize);
            this.ctx.globalAlpha = 1;
          }

          this.ctx.strokeStyle = this.borderColor;
          this.ctx.strokeRect(sx, sy, this.squareSize, this.squareSize);
        }
      }
    }

    const gradient = this.ctx.createRadialGradient(
      this.canvas.width / 2,
      this.canvas.height / 2,
      0,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.sqrt(this.canvas.width ** 2 + this.canvas.height ** 2) / 2,
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateAnimation() {
    const effectiveSpeed = Math.max(this.speed, 0.1);
    const wrapX = this.isHex ? this.hexHoriz * 2 : this.squareSize;
    const wrapY = this.isHex
      ? this.hexVert
      : this.isTri
        ? this.squareSize * 2
        : this.squareSize;

    switch (this.direction) {
      case "right":
        this.gridOffset.x =
          (this.gridOffset.x - effectiveSpeed + wrapX) % wrapX;
        break;
      case "left":
        this.gridOffset.x =
          (this.gridOffset.x + effectiveSpeed + wrapX) % wrapX;
        break;
      case "up":
        this.gridOffset.y =
          (this.gridOffset.y + effectiveSpeed + wrapY) % wrapY;
        break;
      case "down":
        this.gridOffset.y =
          (this.gridOffset.y - effectiveSpeed + wrapY) % wrapY;
        break;
      case "diagonal":
        this.gridOffset.x =
          (this.gridOffset.x - effectiveSpeed + wrapX) % wrapX;
        this.gridOffset.y =
          (this.gridOffset.y - effectiveSpeed + wrapY) % wrapY;
        break;
      default:
        break;
    }

    this.updateCellOpacities();
    this.drawGrid();
    this.requestRef = requestAnimationFrame(this.updateAnimation);
  }

  updateCellOpacities() {
    const targets = new Map();

    if (this.hoveredSquare) {
      targets.set(`${this.hoveredSquare.x},${this.hoveredSquare.y}`, 1);
    }

    if (this.hoverTrailAmount > 0) {
      for (let i = 0; i < this.trailCells.length; i++) {
        const t = this.trailCells[i];
        const key = `${t.x},${t.y}`;
        if (!targets.has(key)) {
          targets.set(
            key,
            (this.trailCells.length - i) / (this.trailCells.length + 1),
          );
        }
      }
    }

    for (const [key] of targets) {
      if (!this.cellOpacities.has(key)) {
        this.cellOpacities.set(key, 0);
      }
    }

    for (const [key, opacity] of this.cellOpacities) {
      const target = targets.get(key) || 0;
      const next = opacity + (target - opacity) * 0.15;
      if (next < 0.005) {
        this.cellOpacities.delete(key);
      } else {
        this.cellOpacities.set(key, next);
      }
    }
  }

  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (this.isHex) {
      const colShift = Math.floor(this.gridOffset.x / this.hexHoriz);
      const offsetX =
        ((this.gridOffset.x % this.hexHoriz) + this.hexHoriz) % this.hexHoriz;
      const offsetY =
        ((this.gridOffset.y % this.hexVert) + this.hexVert) % this.hexVert;
      const adjustedX = mouseX - offsetX;
      const adjustedY = mouseY - offsetY;

      const col = Math.round(adjustedX / this.hexHoriz);
      const rowOffset = (col + colShift) % 2 !== 0 ? this.hexVert / 2 : 0;
      const row = Math.round((adjustedY - rowOffset) / this.hexVert);

      if (
        !this.hoveredSquare ||
        this.hoveredSquare.x !== col ||
        this.hoveredSquare.y !== row
      ) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) {
          this.trailCells.unshift({ ...this.hoveredSquare });
          if (this.trailCells.length > this.hoverTrailAmount)
            this.trailCells.length = this.hoverTrailAmount;
        }
        this.hoveredSquare = { x: col, y: row };
      }
    } else if (this.isTri) {
      const halfW = this.squareSize / 2;
      const offsetX = ((this.gridOffset.x % halfW) + halfW) % halfW;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const adjustedX = mouseX - offsetX;
      const adjustedY = mouseY - offsetY;

      const col = Math.round(adjustedX / halfW);
      const row = Math.floor(adjustedY / this.squareSize);

      if (
        !this.hoveredSquare ||
        this.hoveredSquare.x !== col ||
        this.hoveredSquare.y !== row
      ) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) {
          this.trailCells.unshift({ ...this.hoveredSquare });
          if (this.trailCells.length > this.hoverTrailAmount)
            this.trailCells.length = this.hoverTrailAmount;
        }
        this.hoveredSquare = { x: col, y: row };
      }
    } else if (this.shape === "circle") {
      const offsetX =
        ((this.gridOffset.x % this.squareSize) + this.squareSize) %
        this.squareSize;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const adjustedX = mouseX - offsetX;
      const adjustedY = mouseY - offsetY;

      const col = Math.round(adjustedX / this.squareSize);
      const row = Math.round(adjustedY / this.squareSize);

      if (
        !this.hoveredSquare ||
        this.hoveredSquare.x !== col ||
        this.hoveredSquare.y !== row
      ) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) {
          this.trailCells.unshift({ ...this.hoveredSquare });
          if (this.trailCells.length > this.hoverTrailAmount)
            this.trailCells.length = this.hoverTrailAmount;
        }
        this.hoveredSquare = { x: col, y: row };
      }
    } else {
      const offsetX =
        ((this.gridOffset.x % this.squareSize) + this.squareSize) %
        this.squareSize;
      const offsetY =
        ((this.gridOffset.y % this.squareSize) + this.squareSize) %
        this.squareSize;

      const adjustedX = mouseX - offsetX;
      const adjustedY = mouseY - offsetY;

      const col = Math.floor(adjustedX / this.squareSize);
      const row = Math.floor(adjustedY / this.squareSize);

      if (
        !this.hoveredSquare ||
        this.hoveredSquare.x !== col ||
        this.hoveredSquare.y !== row
      ) {
        if (this.hoveredSquare && this.hoverTrailAmount > 0) {
          this.trailCells.unshift({ ...this.hoveredSquare });
          if (this.trailCells.length > this.hoverTrailAmount)
            this.trailCells.length = this.hoverTrailAmount;
        }
        this.hoveredSquare = { x: col, y: row };
      }
    }
  }

  handleMouseLeave() {
    if (this.hoveredSquare && this.hoverTrailAmount > 0) {
      this.trailCells.unshift({ ...this.hoveredSquare });
      if (this.trailCells.length > this.hoverTrailAmount)
        this.trailCells.length = this.hoverTrailAmount;
    }
    this.hoveredSquare = null;
  }

  tryStart() {
    if (this.isVisible && this.isPageVisible && !this.requestRef) {
      this.requestRef = requestAnimationFrame(this.updateAnimation);
    }
  }

  tryStop() {
    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
      this.requestRef = null;
    }
  }

  onVisibility() {
    this.isPageVisible = !document.hidden;
    this.isPageVisible ? this.tryStart() : this.tryStop();
  }

  destroy() {
    window.removeEventListener("resize", this.resizeCanvas);
    this.tryStop();
    this.io.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.canvas.removeEventListener("mousemove", this.handleMouseMove);
    this.canvas.removeEventListener("mouseleave", this.handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ShapeGrid(document.getElementById("shapegrid-canvas"), {
    direction: "diagonal",
    speed: 0.5,
    squareSize: 40,
    borderColor: "rgba(255, 255, 255, 0.08)",
    hoverFillColor: "rgba(20, 184, 166, 0.15)",
    shape: "hexagon",
    hoverTrailAmount: 5,
  });

  buildSkyline();
  buildScrollProjects();
  initProgress();
  initHeader();
  initScrollHint();
  initTyping();
  setTimeout(animateCount, 300);
});

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
    this.frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    this.media.style.transform = `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;

    if (this.scrim) this.scrim.style.opacity = c.overlayScrim * e;

    if (this.title) {
      const out = smoothstep(0.15, 0.6, p);
      this.title.style.opacity = 1 - out;
      this.title.style.transform = `translate3d(0, ${-40 * out}px, 0) scale(${1 + 0.08 * out})`;
    }

    if (this.hint) {
      const gone = smoothstep(0, 0.12, p);
      this.hint.style.opacity = 1 - gone;
      this.hint.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
    }

    if (this.overlay) {
      const inn = smoothstep(0.68, 1, p);
      this.overlay.style.opacity = inn;
      this.overlay.style.transform = `translate3d(0, ${18 * (1 - inn)}px, 0)`;
      this.overlay.style.pointerEvents = inn > 0.9 ? 'auto' : 'none';
    }
  }
}

function buildScrollProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;
  container.innerHTML = "";

  projects.forEach((p, i) => {
    const tags = p.stack.map((t) => `<span class="se-tag">${t}</span>`).join("");
    const isLive = p.status === "live";
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
                  ${isLive ? 'Visit Live' : 'View on GitHub'}
                  ${btnIcon}
</a>
</div>
</div>
</div>
<div class="scroll-expand__title">${p.name}</div>
          ${i === 0 ? '<div class="scroll-expand__hint">Scroll to explore</div>' : ''}
</div>
</div>
    `;

    container.appendChild(root);
    new ScrollExpand(root, {
      startWidth: 60,
      startHeight: 45,
      mediaZoom: 1.1,
      scrollDistance: 1.0,
      overlayScrim: 0.92
    });
  });
}