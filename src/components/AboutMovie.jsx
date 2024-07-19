import React from 'react'
import { netflixLoginBackgroundImageURL } from '../utils/constants'
import { useParams } from 'react-router-dom'


const AboutMovie = () => {
  const params = useParams();
  return (
    <div className='h-[85%] w-full flex flex-col text-white'>
      <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-40' ></div>
      <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
      <h1 className='text-white text-3xl'>Title</h1>
      <p>Over view</p>
      <p>Release date</p>
      <p>Rating</p>

  </div>
  )
}

export default AboutMovie