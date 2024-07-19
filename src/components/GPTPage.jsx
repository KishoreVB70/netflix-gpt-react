import React from 'react'
import GPTSearch from './GPTSearch'
import { netflixLoginBackgroundImageURL } from '../utils/constants'
import { useSelector } from 'react-redux';


const GPTPage = () => {
  const gptMovies = useSelector(s => s.movies.gptMovies);

  return (
    <div className='h-[85%] w-full flex flex-col'>
      <div className='w-screen h-[70%] flex items-center justify-center'>
        <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-20' ></div>
        <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
        <GPTSearch />
      </div>
      {gptMovies && 
            gptMovies.map(i => <h1 className='text-white' key={i.id}>{i.title}</h1>)
      }
    </div>
  )
}

export default GPTPage