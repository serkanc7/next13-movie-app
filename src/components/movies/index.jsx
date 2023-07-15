import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function Movies({ movies, title }) {
  return (
    <div className={styles.movies}>
      <h2 className={styles.movies__title}>{title}</h2>
      <div className={styles.movies__movies}>
        {movies.map((movie) => (
          <div className={styles.movies__movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image width={200} height={300} quality={30} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies