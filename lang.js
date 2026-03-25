// NourishWithGina, Language Toggle (i18n)
// Opsi A: flag toggle in navbar, localStorage persists choice

const NWG_TRANSLATIONS = {
  en: {
    // Nav
    nav_home: "Home",
    nav_recipes: "Recipes",
    nav_about: "About",
    // Hero
    hero_taste: "Taste",
    hero_guilty_line: "guilty, but it isn't.",
    hero_by: "by Gina",
    // Intro
    intro_quote: "\"I cook because healing starts in the kitchen.\"",
    intro_body: "Every recipe here is backed by science, driven by flavor, and made with the belief that food should love you back. No guilt. No restriction. Just real food that makes you feel alive.",
    stat_recipes: "Curated Recipes",
    stat_clean: "Real Food",
    stat_guilt: "Guilt",
    // Section titles
    section_recipes: "The Recipes",
    section_quote: "\"Food should make you feel alive, not guilty.\"",
    // Card labels
    card_taste_guilty: "Flavor",
    card_clean_factor: "Clean factor",
    card_mood_boost: "Mood boost",
    card_view: "View Recipe →",
    // Card subtitles
    card_korean_sub: "Main dish · 30 min",
    card_tuna_mar_sub: "Main dish · 20 min",
    card_cherry_sub: "Snack · 12 min",
    // Psychonutrition
    psycho_label: "The science behind the plate",
    psycho_heading: "Food is medicine.",
    psycho_body: "<strong>Psychonutrition</strong> is the study of how food affects your mind. Every ingredient I choose, the leafy greens, the fermented foods, the good fats, is picked not just for flavor, but for what it does to your brain chemistry.<br><br>Serotonin, dopamine, cortisol, all of it is shaped by what you eat. When you nourish your body right, you nourish your whole self. That's what these recipes are about.",
    // About
    about_label: "About",
    about_heading: "Hi, I'm Gina.",
    about_body: "I'm a writer, actress, and content creator from Indonesia. I cook because it centers me, and because I believe that what you put in your body is one of the most powerful decisions you make every day.<br><br>These recipes are real. No performance, no perfection. Just the things I actually cook, eat, and feel good about.",
    about_cta: "See All Recipes →",
    // Footer
    footer_tagline: "Tastes guilty. Isn't.",
    footer_links_title: "Explore",
    footer_connect: "Connect",
    footer_sign: "Tastes guilty. Isn't. 🌿",
    footer_copy: "Made with love & science by Gina",
    // Recipes page
    recipes_hero_label: "The Kitchen",
    recipes_hero_title: "All Recipes",
    recipes_hero_sub: "Real food. Real science. Real flavor.",
    filter_all: "All",
    filter_protein: "🥩 Protein",
    filter_veggie: "🥬 Veggie",
    filter_healing: "🌿 Healing",
    filter_quick: "⚡ Quick",
    recipes_count: "recipes",
    // Recipe detail page
    recipe_breadcrumb_recipes: "Recipes",
    recipe_time: "Time",
    recipe_servings: "Servings",
    recipe_section_ingredients: "Ingredients",
    recipe_section_steps: "How to Make It",
    recipe_section_chefnote: "Chef's Note",
    recipe_section_psych: "Psycho Barometer",
    recipe_psych_sub: "How this dish works on your mind",
    recipe_barometer_taste: "Flavor",
    recipe_barometer_clean: "Clean Factor",
    recipe_barometer_mood: "Mood Boost",
    recipe_barometer_energy: "Energy",
    recipe_section_nutrition: "Nutrition",
    recipe_nutrition_per: "per serving",
    recipe_nutrition_protein: "Protein",
    recipe_nutrition_carbs: "Carbs",
    recipe_nutrition_fat: "Fat",
    recipe_section_mood: "Mood Tags",
    recipe_section_related: "You Might Also Like",
    recipe_brain_label: "Brain Note",
  },
  id: {
    // Nav
    nav_home: "Beranda",
    nav_recipes: "Resep",
    nav_about: "Tentang",
    // Hero
    hero_taste: "Taste",
    hero_guilty_line: "guilty, tapi ternyata tidak.",
    hero_by: "oleh Gina",
    // Intro
    intro_quote: "\"Aku memasak karena proses penyembuhan dimulai dari dapur.\"",
    intro_body: "Setiap resep di sini didukung oleh sains, penuh cita rasa, dan dibuat dengan keyakinan bahwa makanan seharusnya menyayangimu balik. Tanpa rasa bersalah. Tanpa larangan. Cukup makanan nyata yang membuatmu merasa hidup.",
    stat_recipes: "Resep Pilihan",
    stat_clean: "Makanan Nyata",
    stat_guilt: "Rasa Bersalah",
    // Section titles
    section_recipes: "Resep-Resepnya",
    section_quote: "\"Makanan harus membuatmu merasa hidup, bukan bersalah.\"",
    // Card labels
    card_taste_guilty: "Flavor",
    card_clean_factor: "Faktor bersih",
    card_mood_boost: "Boost mood",
    card_view: "Lihat Resep →",
    // Card subtitles
    card_korean_sub: "Hidangan utama · 30 mnt",
    card_tuna_mar_sub: "Hidangan utama · 20 mnt",
    card_cherry_sub: "Camilan · 12 mnt",
    // Psychonutrition
    psycho_label: "Sains di balik piring",
    psycho_heading: "Makanan adalah obat.",
    psycho_body: "<strong>Psikogizi</strong> adalah ilmu yang mempelajari bagaimana makanan memengaruhi pikiran kita. Setiap bahan yang aku pilih, sayuran hijau, makanan fermentasi, lemak baik, dipilih bukan hanya untuk rasa, tapi untuk apa yang dilakukannya pada kimia otakmu.<br><br>Serotonin, dopamin, kortisol, semua dibentuk oleh apa yang kamu makan. Ketika kamu merawat tubuhmu dengan benar, kamu merawat seluruh dirimu. Itulah inti dari resep-resep ini.",
    // About
    about_label: "Tentang",
    about_heading: "Hai, aku Gina.",
    about_body: "Aku seorang penulis, aktris, dan content creator dari Indonesia. Aku memasak karena itu membuatku tenang, dan karena aku percaya bahwa apa yang kamu masukkan ke dalam tubuhmu adalah salah satu keputusan paling powerful yang kamu buat setiap hari.<br><br>Resep-resep ini nyata. Tanpa pencitraan, tanpa kesempurnaan. Hanya hal-hal yang benar-benar aku masak, makan, dan membuat aku merasa baik.",
    about_cta: "Lihat Semua Resep →",
    // Footer
    footer_tagline: "Tastes guilty. Isn't.",
    footer_links_title: "Jelajahi",
    footer_connect: "Terhubung",
    footer_sign: "Tastes guilty. Isn't. 🌿",
    footer_copy: "Dibuat dengan cinta & sains oleh Gina",
    // Recipes page
    recipes_hero_label: "Dapur",
    recipes_hero_title: "Semua Resep",
    recipes_hero_sub: "Makanan nyata. Sains nyata. Rasa nyata.",
    filter_all: "Semua",
    filter_protein: "🥩 Protein",
    filter_veggie: "🥬 Sayur",
    filter_healing: "🌿 Penyembuhan",
    filter_quick: "⚡ Cepat",
    recipes_count: "resep",
    // Recipe detail page
    recipe_breadcrumb_recipes: "Resep",
    recipe_time: "Waktu",
    recipe_servings: "Porsi",
    recipe_section_ingredients: "Bahan-Bahan",
    recipe_section_steps: "Cara Membuatnya",
    recipe_section_chefnote: "Catatan Chef",
    recipe_section_psych: "Barometer Psiko",
    recipe_psych_sub: "Bagaimana hidangan ini bekerja di pikiranmu",
    recipe_barometer_taste: "Flavor",
    recipe_barometer_clean: "Faktor Bersih",
    recipe_barometer_mood: "Boost Mood",
    recipe_barometer_energy: "Energi",
    recipe_section_nutrition: "Nutrisi",
    recipe_nutrition_per: "per porsi",
    recipe_nutrition_protein: "Protein",
    recipe_nutrition_carbs: "Karbohidrat",
    recipe_nutrition_fat: "Lemak",
    recipe_section_mood: "Tag Mood",
    recipe_section_related: "Mungkin Kamu Suka Ini",
    recipe_brain_label: "Catatan Otak",
  }
};

(function () {
  // Detect saved lang or default to 'en'
  function getLang() {
    return localStorage.getItem('nwg_lang') || 'en';
  }

  function setLang(lang) {
    localStorage.setItem('nwg_lang', lang);
    applyLang(lang);
    updateToggleUI(lang);
    // Fire event so recipe pages can swap their content
    document.dispatchEvent(new CustomEvent('nwg_lang_change', { detail: lang }));
  }

  function applyLang(lang) {
    const t = NWG_TRANSLATIONS[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });
    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function updateToggleUI(lang) {
    // Navbar desktop button
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
      if (lang === 'en') {
        btn.innerHTML = '🇮🇩 <span>ID</span>';
        btn.title = 'Ganti ke Bahasa Indonesia';
      } else {
        btn.innerHTML = '🇺🇸 <span>EN</span>';
        btn.title = 'Switch to English';
      }
    }
    // Floating button
    const floating = document.getElementById('floatingLangInner');
    if (floating) {
      floating.innerHTML = lang === 'en' ? '🇮🇩 ID' : '🇺🇸 EN';
    }
    // Mobile nav button
    const mob = document.getElementById('mobileLangBtn');
    if (mob) {
      mob.innerHTML = lang === 'en' ? '🇮🇩 ID' : '🇺🇸 EN';
    }
  }

  function injectToggleButton() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    const li = document.createElement('li');
    li.innerHTML = `<button id="langToggleBtn" onclick="window.__nwgToggleLang()" style="background:none;border:1px solid rgba(255,255,255,0.35);border-radius:20px;padding:4px 12px;cursor:pointer;font-family:var(--font-body,sans-serif);font-size:0.7rem;font-weight:700;letter-spacing:0.08em;color:inherit;display:flex;align-items:center;gap:5px;transition:border-color 0.2s,opacity 0.2s;" onmouseover="this.style.borderColor='rgba(255,255,255,0.7)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.35)'">🇮🇩 <span>ID</span></button>`;
    nav.appendChild(li);
  }

  window.__nwgToggleLang = function () {
    const current = getLang();
    setLang(current === 'en' ? 'id' : 'en');
  };

  // Expose applyLang for recipe pages to call directly
  window.__nwgApplyLang = function(lang) {
    applyLang(lang);
    updateToggleUI(lang);
  };

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    injectToggleButton();
    const saved = getLang();
    applyLang(saved);
    updateToggleUI(saved);
  });
})();
