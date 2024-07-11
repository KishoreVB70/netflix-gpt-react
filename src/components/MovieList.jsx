import React from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div className='flex flex-col justify-start w-full' >
        <h1>Genre</h1>
        <div className='flex flex-row w-full' >
            <MovieCard />
            <MovieCard />
        </div>
    </div>
  )
}

export default MovieList