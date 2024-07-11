import React from 'react'
import GPTSearch from './GPTSearch'
import { netflixLoginBackgroundImageURL } from '../utils/constants'

const GPTPage = () => {
  return (
    <div className='w-screen h-[70%] flex items-center justify-center'>
      <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-20' ></div>
      <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
      <GPTSearch />
    </div>
  )
}

export default GPTPage