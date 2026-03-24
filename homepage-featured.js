// NourishWithGina — personalized featured recipes
// Reads localStorage view data and renders top 6 on homepage

window.NWG_RECIPES = [
  {
    id: 'korean-beef',
    back_tag: 'Why this works',
    back_note: 'Lean beef + sesame = iron, zinc, and omega-3. The marinade\'s acidity pre-digests the protein. Your body absorbs more of every bite.',
    page: 'recipe-korean-beef.html',
    photo: 'photos/beef-bowl.jpg',
    cat_en: 'Main Dish · 30 min',
    cat_id: 'Lauk · 30 mnt',
    title_en: 'Korean Beef Bulgogi Bowl',
    title_id: 'Korean Beef Bulgogi Bowl',
    size: 'large', // spans 2 rows
  },
  {
    id: 'tuna-seared',
    back_tag: 'Brain food',
    back_note: 'Tuna is one of the richest sources of DHA, the omega-3 that builds your brain. One bowl covers your weekly need.',
    page: 'recipe-tuna-seared.html',
    photo: 'photos/tuna-seared.jpg',
    cat_en: 'Main Dish · 15 min',
    cat_id: 'Lauk · 15 mnt',
    title_en: 'Pan Seared Tuna Bowl',
    title_id: 'Pan Seared Tuna Bowl',
    size: 'normal',
  },
  {
    id: 'mayak-eggs-soy',
    back_tag: 'The science',
    back_note: 'Marinating eggs in soy creates a Maillard reaction that deepens flavor without adding calories. High protein, zero guilt.',
    page: 'recipe-mayak-eggs-soy.html',
    photo: 'photos/mayak-eggs-soy.jpg',
    cat_en: 'Breakfast · 10 min + overnight',
    cat_id: 'Sarapan · 10 mnt + semalam',
    title_en: 'Mayak Eggs — Soy Sauce',
    title_id: 'Mayak Eggs — Kecap Asin',
    size: 'normal',
  },
  {
    id: 'cherry-tomato',
    back_tag: 'Why roast?',
    back_note: 'Heat concentrates lycopene, the antioxidant in tomatoes, by up to 3x. Roasted is actually healthier than raw.',
    page: 'recipe-cherry-tomato.html',
    photo: 'photos/cherry-tomato.jpg',
    cat_en: 'Side Dish · 12 min',
    cat_id: 'Lauk · 12 mnt',
    title_en: 'Air Fryer Cherry Tomato',
    title_id: 'Air Fryer Cherry Tomato',
    size: 'normal',
  },
  {
    id: 'tuna-marinated',
    back_tag: 'Healing fat',
    back_note: 'Sesame oil contains sesamol, a powerful antioxidant that protects liver cells. This dish is medicine dressed as lunch.',
    page: 'recipe-tuna-marinated.html',
    photo: 'photos/tuna-marinated.jpg',
    cat_en: 'Main Dish · 20 min',
    cat_id: 'Lauk · 20 mnt',
    title_en: 'Marinated Sesame Tuna',
    title_id: 'Marinated Sesame Tuna',
    size: 'normal',
  },
  {
    id: 'tumis-tempe-terong',
    back_tag: 'Plant power',
    back_note: 'Fermentation makes tempeh protein more bioavailable than most meats. Combined with eggplant anthocyanins, this is brain food.',
    page: 'recipe-tumis-tempe-terong.html',
    photo: 'photos/tumis-tempe-terong.jpg',
    cat_en: 'Main Dish · 20 min',
    cat_id: 'Lauk · 20 mnt',
    title_en: 'Tumis Tempe & Terong Pedas Manis',
    title_id: 'Tumis Tempe & Terong Pedas Manis',
    size: 'normal',
  },
  {
    id: 'mayak-eggs-fish',
    back_tag: 'Fish sauce magic',
    back_note: 'Fish sauce is fermented, rich in umami glutamates that signal satiety faster. You eat less but feel more satisfied.',
    page: 'recipe-mayak-eggs-fish.html',
    photo: 'photos/mayak-eggs-fish.jpg',
    cat_en: 'Breakfast · 10 min + overnight',
    cat_id: 'Sarapan · 10 mnt + semalam',
    title_en: 'Mayak Eggs — Fish Sauce',
    title_id: 'Mayak Eggs — Fish Sauce',
    size: 'normal',
  },
  {
    id: 'jahe',
    back_tag: 'Ancient antiviral',
    back_note: 'Gingerol, the active compound in fresh ginger, blocks virus replication at a cellular level. This is what your body wants when it\'s fighting something.',
    page: 'recipe-jahe.html',
    photo: 'photos/jahe-drink.jpg',
    cat_en: '🌿 Healing · 10 min',
    cat_id: '🌿 Penyembuh · 10 mnt',
    title_en: 'Rebusan Jahe',
    title_id: 'Rebusan Jahe',
    size: 'normal',
  },
  {
    id: 'couscous',
    back_tag: 'Couscous truth',
    back_note: 'Couscous has a lower glycemic index than rice or bread. It digests slower, keeping you full and focused longer.',
    page: 'recipe-couscous.html',
    photo: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    cat_en: 'Side Dish · 15 min',
    cat_id: 'Lauk · 15 mnt',
    title_en: 'Couscous Basic',
    title_id: 'Couscous Basic',
    size: 'normal',
  },
  {
    id: 'steam-inhalasi',
    back_tag: 'Breathe easier',
    back_note: 'Allicin from garlic, gingerol from ginger, eugenol from cloves, all activated by steam. Your airways clear within minutes.',
    page: 'recipe-steam-inhalasi.html',
    photo: 'photos/steam-inhalasi.jpg',
    cat_en: '🌿 Healing · 20 min',
    cat_id: '🌿 Penyembuh · 20 mnt',
    title_en: 'Steam Inhalasi Rempah',
    title_id: 'Steam Inhalasi Rempah',
    size: 'normal',
  },
  {
    id: 'sesame-cucumber',
    back_tag: 'Cooling food',
    back_note: 'In traditional Korean medicine, cucumber is considered a \'cooling\' food that reduces internal inflammation. Sesame adds zinc for immunity.',
    page: 'recipe-sesame-cucumber.html',
    photo: 'photos/sesame-cucumber.png',
    cat_en: 'Side Dish · 10 min',
    cat_id: 'Lauk · 10 mnt',
    title_en: 'Korean Sesame Cucumber',
    title_id: 'Korean Sesame Cucumber',
    size: 'normal',
  },
  {
    id: 'egg-drop-soup',
    back_tag: 'Ancient medicine',
    back_note: 'Chicken broth glycine soothes your gut lining. Ginger blocks virus replication. Eggs deliver cysteine, the same compound in flu medicine.',
    page: 'recipe-egg-drop-soup.html',
    photo: 'photos/egg-drop-soup.jpg',
    cat_en: '🌿 Healing · 15 min',
    cat_id: '🌿 Penyembuh · 15 mnt',
    title_en: 'Egg Drop Soup',
    title_id: 'Egg Drop Soup',
    size: 'normal',
  },
  {
  id: 'zucchini-buncis',
    back_tag: 'Green means GO',
    back_note: 'Zucchini is 95% water and packed with potassium. Green beans have more protein than most vegetables. Simple and seriously effective.',
    page: 'recipe-zucchini-buncis.html',
    photo: 'photos/zucchini-green-beans.png',
    cat_en: 'Side Dish · 15 min',
    cat_id: 'Lauk · 15 mnt',
    title_en: 'Zucchini & Green Beans',
    title_id: 'Zucchini & Green Beans',
    size: 'normal',
  },
];

// Default order (shown to new visitors)
var DEFAULT_ORDER = [
  'korean-beef', 'tuna-seared', 'mayak-eggs-soy',
  'cherry-tomato', 'tumis-tempe-terong', 'tuna-marinated',
  'mayak-eggs-fish', 'jahe', 'sesame-cucumber', 'zucchini-buncis'
];

function getPersonalizedTop10() {
  var views = {};
  try { views = JSON.parse(localStorage.getItem('nwg_views') || '{}'); } catch(e) {}

  var hasViews = Object.keys(views).some(function(k) { return views[k] > 0; });

  var allIds = window.NWG_RECIPES.map(function(r) { return r.id; });

  if (!hasViews) {
    // New visitor — use default order
    return DEFAULT_ORDER;
  }

  // Sort all recipes by view count (desc), then by default order for ties
  var sorted = allIds.slice().sort(function(a, b) {
    var va = views[a] || 0;
    var vb = views[b] || 0;
    if (vb !== va) return vb - va;
    return DEFAULT_ORDER.indexOf(a) - DEFAULT_ORDER.indexOf(b);
  });

  // Return top 6, but always ensure first card = most viewed (for large card slot)
  return sorted.slice(0, 10);
}

function buildCard(recipe, isFirst, lang) {
  var cat = lang === 'id' ? recipe.cat_id : recipe.cat_en;
  var title = lang === 'id' ? recipe.title_id : recipe.title_en;
  var backNote = recipe.back_note || 'A recipe crafted with care and real ingredients.';
  var backTag = recipe.back_tag || 'Why this works';
  return '<a href="' + recipe.page + '" style="text-decoration:none;color:inherit;display:block;">' +
    '<article class="masonry-card fade-in visible" data-back-note="' + backNote + '" data-back-tag="' + backTag + '" data-href="' + recipe.page + '">' +
    '<img class="masonry-card-img" src="' + recipe.photo + '" alt="' + title + '" loading="lazy" />' +
    '<div class="masonry-card-body">' +
    '<div class="masonry-card-category">' + cat + '</div>' +
    '<h2 class="masonry-card-title">' + title + '</h2>' +
    '<a href="' + recipe.page + '" class="card-cta">View Recipe →</a>' +
    '</div></article></a>';
}

function renderFeatured() {
  var container = document.getElementById('featured-recipes-grid');
  if (!container) return;

  var lang = localStorage.getItem('nwg_lang') || 'en';
  var top10ids = getPersonalizedTop10();
  var recipeMap = {};
  window.NWG_RECIPES.forEach(function(r) { recipeMap[r.id] = r; });

  var html = '';
  top10ids.forEach(function(id, i) {
    var r = recipeMap[id];
    if (r) html += buildCard(r, i === 0, lang);
  });
  container.innerHTML = html;
}

// Re-render when language changes
document.addEventListener('nwg_lang_change', renderFeatured);

// Initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFeatured);
} else {
  renderFeatured();
}
