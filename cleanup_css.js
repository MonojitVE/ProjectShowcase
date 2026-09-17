const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf-8');

// The multi_replace already replaced `.grid` to the end of `.card-face` block with `.scroll-expand...`
// I need to clean up everything from `.card-face-front` down to the media query that mentions `.grid`.
// Let's just find the first leftover card class and the footer class, and delete the card stuff.

const cleanupStart = css.indexOf('.card:hover .card-face-front {');
const cleanupEnd = css.indexOf('.footer {');

if (cleanupStart !== -1 && cleanupEnd !== -1) {
  css = css.substring(0, cleanupStart) + css.substring(cleanupEnd);
}

// Clean up the media query references to grid and card
css = css.replace(/\.grid \{\s*grid-template-columns: 1fr;\s*\}/, '');
css = css.replace(/\.card \{\s*height: 440px;\s*\}/, '');

fs.writeFileSync('styles.css', css);
console.log('Cleanup done');
