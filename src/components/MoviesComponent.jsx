import React from 'react'
import MovieList from './MovieList'

const MoviesComponent = () => {
    return (
        <div className=' bg-gray-100' > 
            <MovieList />
            <MovieList />
            <MovieList />
        </div>
    )
}

export default MoviesComponent