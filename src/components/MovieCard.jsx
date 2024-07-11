import React from 'react'
import { netflixLoginBackgroundImageURL } from '../utils/constants'

const MovieCard = () => {
  return (
    <div className='my-2 mr-2'>
      <img className='w-56' src={netflixLoginBackgroundImageURL} alt="movie-image" />
    </div>
  )
}

export default MovieCard