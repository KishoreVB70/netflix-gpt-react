import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  return (
    <div className='my-2 mx-2 w-[10vw]'>
      <img onClick={() => navigate("/browse/movie/"+movie.id)} className='h-full w-full hover:cursor-pointer hover:-translate-y-3 hover:shadow-lg transition-all duration-300' src={'https://image.tmdb.org/t/p/original/'+ movie.poster_path} alt="movie-image" />
    </div>
  )
}

export default MovieCard