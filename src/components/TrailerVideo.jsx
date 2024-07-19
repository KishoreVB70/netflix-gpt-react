import React, { useState } from 'react'
import { netflixLoginBackgroundImageURL } from '../utils/constants';

const TrailerVideo = ({title, trailerId}) => {
  // const loop = `&loop=1&playlist=${trailerId}`;
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden'>
      <div className='absolute w-screen h-screen inset-0 bg-black -z-30 opacity-40' ></div>
      {!videoLoaded && <img className='absolute w-full h-full -z-40' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />}
      <iframe 
          title={title} 
          className='absolute w-full h-[55vh] md:h-full inset-0 -z-50'
          style={{ transform: 'scale(1.4)' }}
          onLoad={() => setVideoLoaded(true)}
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
  </div>
  )
}

export default TrailerVideo