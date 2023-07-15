import HomeContainer from '@/containers/home'
import { getGenres, getMoviesByGenre, getTopRatedMovies } from '@/services/movie'

export default async function Home({ params }) {

  let selectedGenre = null
  let selectedTitle = null

  const topRatedMoviesPromise = getTopRatedMovies()
  const genresPromise = getGenres()

  const [topRatedMovies, genres] = await Promise.all([topRatedMoviesPromise, genresPromise])

  if (params.category) {
    selectedTitle = genres.genres.find(genre => genre.id === Number(params.category[0]))
  }

  if (params.category && selectedTitle) {
    selectedGenre = await getMoviesByGenre(params.category[0])
  }

  return <HomeContainer
    categories={genres}
    selectedGenre={{
      name: params.category && selectedTitle ? selectedTitle.name : null,
      movies: selectedGenre ? selectedGenre.results : topRatedMovies.results
    }}
  />
}
