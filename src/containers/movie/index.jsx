import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

function MovieContainer({ movie }) {
    return (
        <div className={styles.movieDetail}>
            <h1 className={styles.movieDetail__title}>{movie.title}</h1>
            <div className={styles.movieDetail__content}>
                <div className={styles.movieDetail__img}>
                    <Image width={500} height={500} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
                </div>
                <div className={styles.movieDetail__info}>
                    <p className={styles.movieDetail__infoItem}><span className={styles.movieDetail__infoTitle}>Overview: </span>{movie.overview}</p>
                    <p className={styles.movieDetail__infoItem}><span className={styles.movieDetail__infoTitle}>Release Date: </span>{movie.release_date}</p>
                    <p className={styles.movieDetail__infoItem}><span className={styles.movieDetail__infoTitle}>Rating: </span>{movie.vote_average}</p>
                    <p className={styles.movieDetail__infoItem}><span className={styles.movieDetail__infoTitle}>Genres: </span>{movie.genres.map((genre) => genre.name).join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer