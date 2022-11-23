const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
});

function moviesGenerator(movies, section) {
  section.innerHTML = "";

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    movieContainer.appendChild(movieImg);
    section.appendChild(movieContainer);
  });
}

function categoriesGenerator(categories, section) {
  section.innerHTML = "";

  categories.forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', `id${category.id}`);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}_${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    section.appendChild(categoryContainer);
  });
}

async function getTrendingMoviesPreview() {
  const { data } = await api('/trending/all/day');
  const movies = data.results;
  moviesGenerator(movies, trendingMoviesPreviewList);
}

async function getTrending() {
  const { data } = await api('/trending/all/day');
  const movies = data.results;
  moviesGenerator(movies, genericSection);
}

async function getCategoriesPreview() {
  const { data } = await api('/genre/movie/list');
  const categories = data.genres;
  categoriesGenerator(categories, categoriesPreviewList)
}

async function getMoviesByCategory(id) {
  const { data } = await api('/discover/movie', {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  moviesGenerator(movies, genericSection);
}

async function getMoviesBySearchQuery(query) {
  const { data } = await api('/search/multi', {
    params: {
      query,
    },
  });
  const movies = data.results;
  moviesGenerator(movies, genericSection);
}
