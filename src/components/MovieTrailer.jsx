import React from 'react';
import { useSelector } from 'react-redux';
import { trailerNumber } from '../utils/constants';

const MovieTrailer = () => {
    const trailerId = useSelector(s => s.movies.trailerMovieId);
    const movies = useSelector(s => s.movies.nowStreaming);

    if(!trailerId){
        return
    }

    const {overview, original_title} = movies[trailerNumber];
    const loop = `&loop=1&playlist=${trailerId}`;

    return (
        <div >
            <div className='absolute top-48 left-24 text-white w-4/12' >
                <h1>{original_title}</h1>
                <h1>{overview}</h1>
            </div>
            <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden'>
                <div className='absolute w-screen h-screen inset-0 bg-black z-0 opacity-30' ></div>
                <iframe 
                    className='absolute w-full h-full top-0 left-0 -z-10'
                    style={{ transform: 'scale(1.4)' }}
                    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MovieTrailer