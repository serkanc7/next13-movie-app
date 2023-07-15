import React from 'react'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies';

function HomeContainer({categories = [], selectedGenre }) {


  return (
    <>
      <Categories categories={categories.genres}/>
      <MoviesSection 
        title={selectedGenre.name ? selectedGenre.name : 'Top Rated Movies'} 
        movies={selectedGenre.movies}
      />
    </>
  )
}

export default HomeContainer