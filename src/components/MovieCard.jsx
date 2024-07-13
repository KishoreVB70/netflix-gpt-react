import React from 'react'
import { netflixLoginBackgroundImageURL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='my-2 mr-2'>
      <img className='w-80' src={'https://image.tmdb.org/t/p/original/'+ movie.poster_path} alt="movie-image" />
    </div>
  )
}

export default MovieCard