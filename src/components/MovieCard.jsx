import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  return (
    <div className='my-2 mx-2 w-[10vw]'>
      <img onClick={() => navigate("/browse/movie")} className='h-full w-full hover:cursor-pointer' src={'https://image.tmdb.org/t/p/original/'+ movie.poster_path} alt="movie-image" />
    </div>
  )
}

export default MovieCard