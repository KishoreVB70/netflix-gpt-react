import React from 'react'
import useGetStreamingMovies from '../hooks/useGetStreamingMovies'
import MovieTrailer from './MovieTrailer';
import MoviesComponent from './MoviesComponent';
const Body = () => {
  useGetStreamingMovies();

  return (
    <div className='h-full w-full'>
      <MovieTrailer />
      <MoviesComponent />
    </div>
  )
}

export default Body