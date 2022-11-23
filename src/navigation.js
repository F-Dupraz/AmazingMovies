searchFormBtn.addEventListener('click', () => {
  location.hash = `#search=${searchFormInput.value.trim()}`;
});

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
  location.hash = window.history.back();
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });
  
  switch (true) {
    case location.hash.startsWith('#trends'):
      trendingPage();
      break;
    case location.hash.startsWith('#search='):
      searchPage();
      break;
    case location.hash.startsWith('#movie='):
      movieDetailsPage();
      break;
    case location.hash.startsWith('#category='):
      categoryPage();
      break;
  
    default:
      homePage();
      break;
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const homePage = () => {
  // console.log("1 Estamos en: ", location.hash);

  getTrendingMoviesPreview();
  getCategoriesPreview();

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');
}

const trendingPage = () => {
  console.log("2 Estamos en: ", location.hash);

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  headerCategoryTitle.innerHTML = 'Tendencias';
  getTrending();
}

const searchPage = () => {
  console.log("3 Estamos en: ", location.hash);

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [ _search, query ] = location.hash.split('=');
  getMoviesBySearchQuery(query);
}

const movieDetailsPage = () => {
  console.log("4 Estamos en: ", location.hash);

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
}

const categoryPage = () => {
  console.log("5 Estamos en: ", location.hash);

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [ _category, categoryData ] = location.hash.split('=');
  const [ categoryId, categoryName ] = categoryData.split('_');
  const [ categoryTitle1, categoryTitle2 ] = categoryName.split('%20');
  if(categoryTitle2) {
    headerCategoryTitle.innerHTML = `${categoryTitle1} ${categoryTitle2}`;
  } else {
    headerCategoryTitle.innerHTML = `${categoryTitle1}`;
  }
  getMoviesByCategory(categoryId);
}