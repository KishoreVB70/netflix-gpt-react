import React from 'react'
import useGetStreamingMovies from '../hooks/useGetStreamingMovies'
import MovieTrailer from './MovieTrailer';
import MoviesComponent from './MoviesComponent';
const Body = () => {
  useGetStreamingMovies();

  return (
    <div>
      <MovieTrailer />
      <MoviesComponent />
    </div>
  )
}

export default Body