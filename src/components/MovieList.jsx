import React from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div className='flex flex-col justify-start m-2' >
        <h1>Genre</h1>
        <div className='flex flex-row overflow-x-scroll overflow-hidden' >
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    </div>
  )
}

export default MovieList