import { getSearchMovies } from '@/services/movie';
import React from 'react'
import SearchContainer from '@/containers/search'

const SearchPage = async ({ params }) => {

  const movies = await getSearchMovies(params.searchTerm);

  return <SearchContainer movies={movies} searchTerm={params.searchTerm} />
}

export default SearchPage