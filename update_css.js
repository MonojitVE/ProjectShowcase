const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf-8');

const newCss = `.scroll-expand {
  position: relative;
  width: 100%;
  height: 100%;
}

.scroll-expand--window {
}

.scroll-expand__track {
  position: relative;
  width: 100%;
}

.scroll-expand__stage {
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
  --se-title-size: 4rem;
}

.scroll-expand__frame {
  position: absolute;
  inset: 0;
  clip-path: inset(21% 29% 21% 29% round 24px);
  will-change: clip-path;
}

.scroll-expand__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  user-select: none;
  -webkit-user-drag: none;
}

.scroll-expand__scrim {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to top, rgba(10, 10, 20, 0.95), rgba(10, 10, 20, 0.3) 45%, rgba(10, 10, 20, 0.65));
  opacity: 0;
}

.scroll-expand__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6%;
  opacity: 0;
  will-change: opacity, transform;
}

.scroll-expand__title {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 6%;
  text-align: center;
  font-family: var(--font-h);
  font-size: var(--se-title-size);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #fff;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.65);
  pointer-events: none;
  will-change: opacity, transform;
}

.scroll-expand__hint {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2rem;
  text-align: center;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  color: var(--ink-3);
  pointer-events: none;
  will-change: opacity, transform;
}

.se-overlay-content {
  max-width: 680px;
  margin: 0 auto;
}

.se-desc {
  font-size: 1.15rem;
  color: var(--ink-2);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.se-tags {
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.se-tag {
  font-size: .8rem;
  padding: .3rem .8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--ink);
}

.se-btn {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .85rem 1.7rem;
  background: var(--ink);
  color: var(--bg-0);
  border-radius: 999px;
  font-size: .95rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform .25s var(--ease);
}

.se-btn:hover {
  transform: translateY(-2px);
}
`;

fs.writeFileSync('styles.css', css + '\\n' + newCss);
