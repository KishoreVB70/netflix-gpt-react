import React from 'react'

const TrailerVideo = ({title, trailerId}) => {
  // const loop = `&loop=1&playlist=${trailerId}`;
  return (
    <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden'>
      <div className='absolute w-screen h-screen inset-0 bg-black z-0 opacity-30' ></div>
      <iframe 
          title={title} 
          className='absolute w-full h-full top-0 left-0 -z-10'
          style={{ transform: 'scale(1.4)' }}
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=0&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
  </div>
  )
}

export default TrailerVideo