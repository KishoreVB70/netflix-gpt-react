import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const MoviesComponent = () => {
    const allMoviesList = useSelector(s => s.movies.allMoviesList)
    if(allMoviesList) {
        console.log(allMoviesList)
    }
    return (
        <div className='absolute z-50 top-[80%] bg-transparent' > 
            {allMoviesList && allMoviesList.map(i => <MovieList key={i.name} title={i.name} movies={i.movies} />)}
        </div>
    )
}

export default MoviesComponent