import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, title}) => {
  return (
    <div className='flex flex-col justify-start m-2' >
        <h1>{title}</h1>
        <div className='flex flex-row overflow-x-scroll' >
          {movies.map(i => <MovieCard key={i.id} movie={i} />)}
        </div>
    </div>
  )
}

export default MovieList