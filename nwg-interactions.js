// NourishWithGina — Interactive features
// Feature 3: Recipe card flip (recipes.html + homepage)
// Feature 5: Live cook timer (recipe pages)
// Feature 6: Ingredients + steps tick-off (recipe pages)

(function() {

// ══════════════════════════════════════════════
// FEATURE 6: Ingredients & Steps tick-off
// ══════════════════════════════════════════════
function initTickOff() {
  // Ingredients
  var ingWrap = document.getElementById('recipe-ingredients-wrap');
  if (ingWrap) {
    var items = ingWrap.querySelectorAll('li');
    items.forEach(function(li) {
      li.style.cursor = 'pointer';
      li.style.transition = 'opacity 0.2s, text-decoration 0.2s';
      li.style.userSelect = 'none';
      li.addEventListener('click', function() {
        var ticked = li.getAttribute('data-ticked') === '1';
        if (ticked) {
          li.setAttribute('data-ticked', '0');
          li.style.opacity = '1';
          li.style.textDecoration = 'none';
          li.style.color = '';
        } else {
          li.setAttribute('data-ticked', '1');
          li.style.opacity = '0.4';
          li.style.textDecoration = 'line-through';
          li.style.color = 'var(--terracotta)';
        }
      });
      // Hint tooltip on first item
      if (li === items[0]) {
        li.title = 'Tap to check off';
      }
    });

    // Add hint label above ingredients
    var hint = document.createElement('div');
    hint.innerHTML = '<span style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;opacity:0.45;font-weight:600;">tap to check off</span>';
    hint.style.marginBottom = '0.5rem';
    ingWrap.insertBefore(hint, ingWrap.firstChild);
  }

  // Steps
  var stepsWrap = document.getElementById('recipe-steps-wrap');
  if (stepsWrap) {
    var steps = stepsWrap.querySelectorAll('.instruction-item');
    steps.forEach(function(step) {
      step.style.cursor = 'pointer';
      step.style.transition = 'opacity 0.2s';
      var num = step.querySelector('.instruction-number');
      step.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') return; // don't tick when clicking links
        var ticked = step.getAttribute('data-ticked') === '1';
        if (ticked) {
          step.setAttribute('data-ticked', '0');
          step.style.opacity = '1';
          if (num) { num.style.background = ''; num.style.color = ''; }
        } else {
          step.setAttribute('data-ticked', '1');
          step.style.opacity = '0.4';
          if (num) {
            num.style.background = 'var(--sage)';
            num.style.color = '#fff';
          }
        }
      });
    });
  }
}

// ══════════════════════════════════════════════
// FEATURE 5: Live cook timer
// ══════════════════════════════════════════════
function initCookTimer() {
  // Find cook time from stats bar
  var statPills = document.querySelectorAll('.stat-pill-text');
  var cookTime = 0;
  statPills.forEach(function(el) {
    var match = el.textContent.match(/(\d+)\s*min/i);
    if (match) cookTime = parseInt(match[1]);
  });
  if (!cookTime) return;

  // Find a good place to inject timer — after stats bar
  var statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;

  var timerWrap = document.createElement('div');
  timerWrap.id = 'cookTimerWrap';
  timerWrap.style.cssText = 'text-align:center;padding:1rem 2rem 0;';

  var btn = document.createElement('button');
  btn.id = 'cookTimerBtn';
  btn.textContent = "⏱ I'm starting now";
  btn.style.cssText = 'background:none;border:1px solid var(--terracotta);border-radius:2rem;padding:0.5rem 1.4rem;cursor:pointer;font-size:0.8rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--terracotta);font-family:var(--font-sans);transition:background 0.2s,color 0.2s;';
  btn.onmouseover = function() { this.style.background='var(--terracotta)'; this.style.color='#fff'; };
  btn.onmouseout = function() { this.style.background='none'; this.style.color='var(--terracotta)'; };

  var display = document.createElement('div');
  display.id = 'cookTimerDisplay';
  display.style.cssText = 'font-family:var(--font-serif);font-size:2.2rem;color:var(--darkbrown);margin-top:0.5rem;display:none;letter-spacing:0.05em;';

  var label = document.createElement('div');
  label.style.cssText = 'font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.5;margin-top:0.2rem;';
  label.textContent = 'until done';

  timerWrap.appendChild(btn);
  timerWrap.appendChild(display);
  timerWrap.appendChild(label);
  statsBar.appendChild(timerWrap);

  var interval = null;
  var endTime = null;

  btn.addEventListener('click', function() {
    if (interval) {
      clearInterval(interval);
      interval = null;
      display.style.display = 'none';
      label.style.display = 'none';
      btn.textContent = "⏱ I'm starting now";
      return;
    }
    endTime = Date.now() + cookTime * 60 * 1000;
    display.style.display = 'block';
    label.style.display = 'block';
    btn.textContent = '✕ Cancel timer';
    btn.onmouseover = null;
    btn.onmouseout = null;
    btn.style.color = '#999';
    btn.style.borderColor = '#ccc';

    function tick() {
      var remaining = endTime - Date.now();
      if (remaining <= 0) {
        clearInterval(interval);
        display.textContent = "Done! 🎉";
        display.style.color = 'var(--sage)';
        btn.textContent = "⏱ Start again";
        btn.style.color = 'var(--terracotta)';
        btn.style.borderColor = 'var(--terracotta)';
        btn.onmouseover = function() { this.style.background='var(--terracotta)'; this.style.color='#fff'; };
        btn.onmouseout = function() { this.style.background='none'; this.style.color='var(--terracotta)'; };
        interval = null;
        return;
      }
      var m = Math.floor(remaining / 60000);
      var s = Math.floor((remaining % 60000) / 1000);
      display.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }
    tick();
    interval = setInterval(tick, 1000);
  });
}




// ══════════════════════════════════════════════
// FEATURE 1: Ambient kitchen sound (Web Audio API — no files needed)
// Generates: soft rain + gentle white noise + subtle hum
// ══════════════════════════════════════════════
function initAmbientSound() {
  var btn = document.getElementById('ambientSoundBtn');
  if (!btn) return;

  var ctx = null;
  var nodes = [];
  var playing = false;

  function createRain(audioCtx) {
    // White noise buffer
    var bufferSize = audioCtx.sampleRate * 3;
    var buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    var source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    // Bandpass filter (rain frequency range)
    var filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2500;
    filter.Q.value = 0.8;

    // Low shelf for warmth
    var shelf = audioCtx.createBiquadFilter();
    shelf.type = 'lowshelf';
    shelf.frequency.value = 300;
    shelf.gain.value = -8;

    var gain = audioCtx.createGain();
    gain.gain.value = 0.18;

    source.connect(filter);
    filter.connect(shelf);
    shelf.connect(gain);
    gain.connect(audioCtx.destination);
    source.start();
    return [source, filter, shelf, gain];
  }

  function createKitchenHum(audioCtx) {
    // Gentle low hum (refrigerator/stove ambience)
    var osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 52;
    var gain = audioCtx.createGain();
    gain.gain.value = 0.04;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    return [osc, gain];
  }

  function startAmbient() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    nodes = nodes.concat(createRain(ctx));
    nodes = nodes.concat(createKitchenHum(ctx));
    playing = true;
    btn.innerHTML = '🔊 <span style="font-size:0.75rem;">Kitchen sounds on</span>';
    btn.style.background = 'rgba(255,255,255,0.15)';
  }

  function stopAmbient() {
    nodes.forEach(function(n) { try { n.stop ? n.stop() : n.disconnect(); } catch(e) {} });
    nodes = [];
    if (ctx) { try { ctx.close(); } catch(e) {} ctx = null; }
    playing = false;
    btn.innerHTML = '🍃 <span style="font-size:0.75rem;">Kitchen sounds</span>';
    btn.style.background = 'rgba(255,255,255,0.06)';
  }

  btn.addEventListener('click', function() {
    if (playing) stopAmbient(); else startAmbient();
  });
}


// ══════════════════════════════════════════════
// FEATURE 7: Print recipe button
// ══════════════════════════════════════════════
function initPrintButton() {
  var statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;

  var printBtn = document.createElement('button');
  printBtn.innerHTML = '🖨 <span style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Print / Save PDF</span>';
  printBtn.style.cssText = 'background:none;border:1px solid rgba(44,26,14,0.2);border-radius:2rem;padding:0.5rem 1.1rem;cursor:pointer;font-family:var(--font-sans);color:var(--darkbrown,#2c1a0e);display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;transition:all 0.2s;font-size:0.8rem;';
  printBtn.onmouseover = function() { this.style.background='var(--terracotta)'; this.style.color='#fff'; this.style.borderColor='var(--terracotta)'; };
  printBtn.onmouseout = function() { this.style.background='none'; this.style.color='var(--darkbrown,#2c1a0e)'; this.style.borderColor='rgba(44,26,14,0.2)'; };
  printBtn.addEventListener('click', function() { window.print(); });

  statsBar.appendChild(printBtn);
}

// ══════════════════════════════════════════════
// FEATURE 2: Mood selector (recipes.html + homepage)
// ══════════════════════════════════════════════
function initMoodSelector() {
  var wrap = document.getElementById('moodSelectorWrap');
  if (!wrap) return;

  var MOODS = [
    { id: 'healing',   emoji: '🤒', label: "I'm sick",     tags: ['healing'] },
    { id: 'tired',     emoji: '😴', label: "I'm tired",    tags: ['main', 'healing'] },
    { id: 'indulgent', emoji: '🤤', label: "Treat me",     tags: ['main'] },
    { id: 'quick',     emoji: '⚡', label: "Quick only",   maxMin: 15 },
    { id: 'veg',       emoji: '🌱', label: "Plant-based",  keywords: ['tempe', 'zucchini', 'cucumber', 'tomato'] },
    { id: 'all',       emoji: '✨', label: "Show all",     reset: true },
  ];

  var html = '<div style="font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.5;margin-bottom:0.75rem;font-weight:600;">How are you feeling?</div>';
  html += '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">';
  MOODS.forEach(function(m) {
    html += '<button class="mood-btn" data-mood="' + m.id + '" style="' +
      'background:rgba(255,255,255,0.06);border:1px solid rgba(245,235,220,0.2);' +
      'border-radius:2rem;padding:0.45rem 0.9rem;cursor:pointer;font-size:0.8rem;' +
      'color:var(--cream);font-family:var(--font-sans);transition:all 0.2s;white-space:nowrap;">' +
      m.emoji + ' ' + m.label + '</button>';
  });
  html += '</div>';
  wrap.innerHTML = html;

  // Apply mood filter to masonry cards
  wrap.querySelectorAll('.mood-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      wrap.querySelectorAll('.mood-btn').forEach(function(b) {
        b.style.background = 'rgba(255,255,255,0.06)';
        b.style.borderColor = 'rgba(245,235,220,0.2)';
        b.style.color = 'var(--cream)';
      });
      btn.style.background = 'var(--terracotta)';
      btn.style.borderColor = 'var(--terracotta)';
      btn.style.color = '#fff';

      var moodId = btn.getAttribute('data-mood');
      var mood = MOODS.find(function(m) { return m.id === moodId; });
      var cards = document.querySelectorAll('.masonry-card');

      cards.forEach(function(card) {
        var wrapper = card.closest('a') || card;
        if (!mood || mood.reset) {
          wrapper.style.display = '';
          return;
        }
        var title = (card.querySelector('.masonry-card-title') || {}).textContent || '';
        var cat = (card.querySelector('.masonry-card-category') || {}).textContent || '';
        var combined = (title + ' ' + cat).toLowerCase();
        var show = false;

        if (mood.tags) {
          show = mood.tags.some(function(t) { return combined.includes(t); });
        }
        if (mood.keywords) {
          show = mood.keywords.some(function(k) { return combined.includes(k); });
        }
        if (mood.maxMin) {
          var minMatch = combined.match(/(\d+)\s*min/);
          if (minMatch && parseInt(minMatch[1]) <= mood.maxMin) show = true;
        }
        wrapper.style.display = show ? '' : 'none';
      });
    });
  });
}

// ══════════════════════════════════════════════
// FEATURE 8: Search bar
// ══════════════════════════════════════════════
function initSearch() {
  var input = document.getElementById('recipeSearchInput');
  if (!input) return;

  input.addEventListener('input', function() {
    var q = input.value.toLowerCase().trim();
    var cards = document.querySelectorAll('.masonry-card');
    var anyVisible = false;

    cards.forEach(function(card) {
      var wrapper = card.closest('a') || card;
      var title = (card.querySelector('.masonry-card-title, .recipe-card-title') || {}).textContent || '';
      var cat = (card.querySelector('.masonry-card-category, .masonry-card-category') || {}).textContent || '';
      var desc = (card.querySelector('.masonry-card-desc') || {}).textContent || '';
      var combined = (title + ' ' + cat + ' ' + desc).toLowerCase();
      var show = !q || combined.includes(q);
      wrapper.style.display = show ? '' : 'none';
      if (show) anyVisible = true;
    });

    var empty = document.getElementById('searchEmpty');
    if (empty) empty.style.display = anyVisible || !q ? 'none' : 'block';
  });

  // Clear on ESC
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    }
  });
}

// ── Cinematic scroll reveal: word-by-word for section titles ──
function initCinematicScroll() {
  // Select hero tagline words (already has typewriter, skip)
  // Apply to section titles and intro quote
  var targets = document.querySelectorAll('.intro-quote, .section-title, .about-name, .email-title');

  targets.forEach(function(el) {
    if (el.getAttribute('data-cinematic')) return;
    el.setAttribute('data-cinematic', '1');

    var text = el.textContent.trim();
    var words = text.split(' ');
    el.style.opacity = '1';

    // Wrap each word in a span
    el.innerHTML = words.map(function(w, i) {
      return '<span class="cin-word" style="display:inline-block;opacity:0;transform:translateY(18px);transition:opacity 0.4s ease ' + (i * 0.08) + 's, transform 0.4s ease ' + (i * 0.08) + 's;">' + w + '&nbsp;</span>';
    }).join('');

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          el.querySelectorAll('.cin-word').forEach(function(span) {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          });
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
  });
}

// ── Card flip: wrap existing masonry cards ──
function initCardFlip() {
  // Skip flip on touch/mobile devices — tap should navigate directly
  if (window.matchMedia('(hover: none)').matches) return;
  var cards = document.querySelectorAll('.masonry-card');
  cards.forEach(function(card) {
    if (card.querySelector('.masonry-card-inner')) return; // already wrapped

    var front = document.createElement('div');
    front.className = 'masonry-card-front';
    // Move all existing children into front
    while (card.firstChild) front.appendChild(card.firstChild);

    var backNote = card.getAttribute('data-back-note') || 'A recipe crafted with care and real ingredients.';
    var backHref = card.getAttribute('data-href') ||
      (card.closest('a') ? card.closest('a').href : '#');
    var backTag = card.getAttribute('data-back-tag') || 'Why this works';

    var back = document.createElement('div');
    back.className = 'masonry-card-back';
    back.innerHTML =
      '<div class="card-back-tag">' + backTag + '</div>' +
      '<p class="card-back-note">' + backNote + '</p>' +
      '<a class="card-back-cta" href="' + backHref + '">View Recipe →</a>';

    var inner = document.createElement('div');
    inner.className = 'masonry-card-inner';
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Touch support
    card.addEventListener('click', function(e) {
      if (window.matchMedia('(hover: none)').matches) {
        if (!card.classList.contains('flipped')) {
          e.preventDefault();
          card.classList.add('flipped');
        }
      }
    });
  });
}

// ══════════════════════════════════════════════
// INIT on DOM ready
// ══════════════════════════════════════════════
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initCinematicScroll();
  initPrintButton();
  initAmbientSound();
  initMoodSelector();
  initSearch();
    initPrintButton();
    initPrintButton();
  initAmbientSound();
    initMoodSelector();
    initSearch();
    initCardFlip();
    initTickOff();
    initCookTimer();
  });
} else {
  initCinematicScroll();
  initPrintButton();
  initAmbientSound();
  initMoodSelector();
  initSearch();
  initCardFlip();
  initTickOff();
  initCookTimer();
}

})();
