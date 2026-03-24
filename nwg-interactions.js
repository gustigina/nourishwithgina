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
    initCardFlip();
    initTickOff();
    initCookTimer();
  });
} else {
  initCinematicScroll();
  initCardFlip();
  initTickOff();
  initCookTimer();
}

})();
