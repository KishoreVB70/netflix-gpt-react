import React from 'react'
import GPTSearch from './GPTSearch'
import { netflixLoginBackgroundImageURL } from '../utils/constants'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GPTPage = () => {
  const gptMovies = useSelector(s => s.movies.gptMovies);

  return (
    <div className='h-[85%] w-full flex flex-col'>
      <div className='w-screen h-[45%] flex items-center justify-center'>
        <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-40' ></div>
        <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
        <GPTSearch />
      </div>
      {gptMovies && 
            <MovieList movies={gptMovies} title="GPT recommendations" />
      }
    </div>
  )
}

export default GPTPage