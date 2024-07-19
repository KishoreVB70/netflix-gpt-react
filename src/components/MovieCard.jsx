import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tmdbPosterBaseUrl } from '../utils/constants';

const MovieCard = ({movie}) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='my-2 mx-2 w-[10vw]'>
      {!loaded && 
        <div className='w-full h-full bg-gray-100'></div>
      }
      <img onLoad={() => setLoaded(true)} onClick={() => navigate("/browse/movie/"+movie.id)} className={` ${loaded ? "block" : "hidden"} w-full hover:cursor-pointer hover:-translate-y-3 hover:shadow-lg transition-all duration-300`} src={`${tmdbPosterBaseUrl}${movie.poster_path}`} alt="movie-image" />
    </div>
  )
}

export default MovieCard