import React, { useEffect } from 'react'
import useGetStreamingMovies from '../hooks/useGetStreamingMovies'
import MovieTrailer from './MovieTrailer';
import MoviesComponent from './MoviesComponent';
import useGetTrailerMovieId from '../hooks/useGetTrailerMovieId';
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