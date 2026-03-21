// ——— Custom Leaf Cursor — NourishWithGina ———
// Hides default cursor, replaces with leaf SVG + trailing leaves effect

(function() {
  // Inject custom cursor styles
  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { cursor: none !important; }

    #nwg-cursor {
      position: fixed;
      width: 28px;
      height: 28px;
      pointer-events: none;
      z-index: 999999;
      transform: translate(-50%, -50%);
      transition: transform 0.08s ease;
      will-change: transform;
    }

    #nwg-cursor svg {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 1px 3px rgba(0,0,0,0.25));
    }

    .nwg-leaf-trail {
      position: fixed;
      pointer-events: none;
      z-index: 999998;
      font-size: 14px;
      line-height: 1;
      transform-origin: center;
      will-change: transform, opacity;
      animation: nwg-leaf-fall 1s ease-out forwards;
    }

    @keyframes nwg-leaf-fall {
      0%   { opacity: 0.9; transform: translate(0, 0) rotate(0deg) scale(1); }
      100% { opacity: 0; transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0.4); }
    }
  `;
  document.head.appendChild(style);

  // Create leaf cursor element
  const cursor = document.createElement('div');
  cursor.id = 'nwg-cursor';
  cursor.innerHTML = `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28 C4 28 8 10 20 6 C28 3 30 2 30 2 C30 2 29 4 26 12 C22 22 10 26 4 28Z"
        fill="#6B8F71" stroke="#4a6b50" stroke-width="1"/>
      <path d="M4 28 C10 22 18 16 30 2" stroke="#4a6b50" stroke-width="0.8" stroke-linecap="round" opacity="0.6"/>
    </svg>
  `;
  document.body.appendChild(cursor);

  // Trail emojis
  const trailLeaves = ['🌿', '🍃', '🌱', '✿', '🍀'];
  let mouseX = -100, mouseY = -100;
  let lastTrailTime = 0;

  // Move cursor
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Trail
    const now = Date.now();
    if (now - lastTrailTime > 90) {
      spawnTrailLeaf(mouseX, mouseY);
      lastTrailTime = now;
    }
  });

  // Scale on click
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.75) rotate(-20deg)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

  function spawnTrailLeaf(x, y) {
    const leaf = document.createElement('div');
    leaf.className = 'nwg-leaf-trail';
    leaf.textContent = trailLeaves[Math.floor(Math.random() * trailLeaves.length)];

    const dx = (-15 + Math.random() * 30) + 'px';
    const dy = (-20 - Math.random() * 30) + 'px';
    const rot = (-180 + Math.random() * 360) + 'deg';

    leaf.style.left = x + 'px';
    leaf.style.top = y + 'px';
    leaf.style.setProperty('--dx', dx);
    leaf.style.setProperty('--dy', dy);
    leaf.style.setProperty('--rot', rot);
    leaf.style.fontSize = (10 + Math.random() * 10) + 'px';

    document.body.appendChild(leaf);
    setTimeout(() => leaf.remove(), 1000);
  }
})();
