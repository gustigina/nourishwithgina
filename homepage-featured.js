// NourishWithGina — personalized featured recipes
// Reads localStorage view data and renders top 6 on homepage

window.NWG_RECIPES = [
  {
    id: 'korean-beef',
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
    page: 'recipe-sesame-cucumber.html',
    photo: 'photos/sesame-cucumber.png',
    cat_en: 'Side Dish · 10 min',
    cat_id: 'Lauk · 10 mnt',
    title_en: 'Korean Sesame Cucumber',
    title_id: 'Korean Sesame Cucumber',
    size: 'normal',
  },
  {
    id: 'zucchini-buncis',
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
  'cherry-tomato', 'tumis-tempe-terong', 'tuna-marinated'
];

function getPersonalizedTop6() {
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
  return sorted.slice(0, 6);
}

function buildCard(recipe, isFirst, lang) {
  var cat = lang === 'id' ? recipe.cat_id : recipe.cat_en;
  var title = lang === 'id' ? recipe.title_id : recipe.title_en;
  var cardClass = isFirst ? 'masonry-card masonry-card--large fade-in visible' : 'masonry-card fade-in visible';
  return '<a href="' + recipe.page + '" style="text-decoration:none;color:inherit;display:block;">' +
    '<article class="' + cardClass + '" data-category="main">' +
    '<img class="masonry-card-img" src="' + recipe.photo + '" alt="' + title + '" loading="lazy" />' +
    '<div class="masonry-card-body">' +
    '<div class="masonry-card-category">' + cat + '</div>' +
    '<h3 class="recipe-card-title">' + title + '</h3>' +
    '<a href="' + recipe.page + '" class="card-cta" data-i18n="card_view">View Recipe →</a>' +
    '</div></article></a>';
}

function renderFeatured() {
  var container = document.getElementById('featured-recipes-grid');
  if (!container) return;

  var lang = localStorage.getItem('nwg_lang') || 'en';
  var top6ids = getPersonalizedTop6();
  var recipeMap = {};
  window.NWG_RECIPES.forEach(function(r) { recipeMap[r.id] = r; });

  var html = '';
  top6ids.forEach(function(id, i) {
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
