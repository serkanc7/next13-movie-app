import Movies from '@/components/movies'
import React from 'react'

const SearchContainer = ({movies, searchTerm}) => {
  return <Movies title={`Results: ${searchTerm}`} movies={movies.results} />
}

export default SearchContainer