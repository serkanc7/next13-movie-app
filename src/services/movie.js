const API_URL = `https://api.themoviedb.org/3`

const fetchData = async (pathname, query = '') => {
  try {
    const res = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`)
    return res.json()
  } catch (error) {
    throw new Error(error);
  }
}

async function getGenres() {
  try {
    return fetchData('/genre/movie/list','language=en-US')
  } catch (error) {
    throw new Error(error);
  }
}

async function getMoviesByGenre(genreId) {
  try {
    return fetchData('/discover/movie',`language=en-US&page=1&with_genres=${genreId}`)
  } catch (error) {
    throw new Error(error);
  }
}

async function getTopRatedMovies() {
  try {
    return fetchData('/movie/top_rated','language=en-US&page=1')
  } catch (error) {
    throw new Error(error);
  }
}

async function getMovie(id) {
  try {
    return fetchData(`/movie/${id}`,'language=en-US&page=1')
  } catch (error) {
    throw new Error(error);
  }
}

async function getSearchMovies (query) { 
  try {
    return fetchData('/search/movie',`language=en-US&query=${query}&page=1&include_adult=false`)
  } catch (error) {
    throw new Error(error);
  }
}

export { getMovie, getGenres, getMoviesByGenre, getTopRatedMovies, getSearchMovies }