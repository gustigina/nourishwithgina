// NourishWithGina — recipe view tracker
// Tracks per-user view counts in localStorage for personalized homepage

(function() {
  var PAGE_RECIPE_MAP = {
    'recipe-korean-beef.html': 'korean-beef',
    'recipe-tuna-seared.html': 'tuna-seared',
    'recipe-tuna-marinated.html': 'tuna-marinated',
    'recipe-cherry-tomato.html': 'cherry-tomato',
    'recipe-mayak-eggs-soy.html': 'mayak-eggs-soy',
    'recipe-mayak-eggs-fish.html': 'mayak-eggs-fish',
    'recipe-jahe.html': 'jahe',
    'recipe-couscous.html': 'couscous',
    'recipe-steam-inhalasi.html': 'steam-inhalasi',
    'recipe-zucchini-buncis.html': 'zucchini-buncis',
    'recipe-sesame-cucumber.html': 'sesame-cucumber',
    'recipe-tumis-tempe-terong.html': 'tumis-tempe-terong',
  };

  var page = window.location.pathname.split('/').pop() || 'index.html';
  var recipeId = PAGE_RECIPE_MAP[page];
  if (!recipeId) return;

  try {
    var views = JSON.parse(localStorage.getItem('nwg_views') || '{}');
    views[recipeId] = (views[recipeId] || 0) + 1;
    localStorage.setItem('nwg_views', JSON.stringify(views));
  } catch(e) {}
})();
