import MovieContainer from '@/containers/movie'
import React from 'react'
import { notFound } from 'next/navigation'
import { getMovie } from '@/services/movie'

async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  if (movie.success === false) {
    notFound();
  }

  return <MovieContainer movie={movie} />
}

export default MoviePage