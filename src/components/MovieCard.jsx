import React from 'react'
import { netflixLoginBackgroundImageURL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='my-2 mx-2 w-[10vw]'>
      <img className='h-full w-full' src={'https://image.tmdb.org/t/p/original/'+ movie.poster_path} alt="movie-image" />
    </div>
  )
}

export default MovieCard