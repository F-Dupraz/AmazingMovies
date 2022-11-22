window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });
  getTrendingMoviesPreview();
  getCategoriesPreview();
  
  switch (location.hash.startsWith('')) {
    case '#trends':
      trendingPage();
      break;
    case '#search=':
      searchPage();
      break;
    case '#movie=':
      movieDetailsPage();
      break;
    case '#category=':
      categoryPage();
      break;
  
    default:
      homePage();
      break;
  }
}

const homePage = () => {
  console.log("Estamos en: ", location.hash);
}

const trendingPage = () => {
  console.log("Estamos en: ", location.hash);
}

const searchPage = () => {
  console.log("Estamos en: ", location.hash);
}

const movieDetailsPage = () => {
  console.log("Estamos en: ", location.hash);
}

const categoryPage = () => {
  console.log("Estamos en: ", location.hash);
}