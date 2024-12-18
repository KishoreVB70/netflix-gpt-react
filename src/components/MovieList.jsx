import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, title}) => {
  return (
    <div className='flex flex-col items-center m-2 mb-10' >
        <h1 className='text-2xl font-bold text-white' >{title}</h1>
        <div className='flex flex-row flex-wrap justify-start mt-5' >
          {movies.map(i => <MovieCard key={i.id} movie={i} />)}
        </div>
    </div>
  )
}

export default MovieList