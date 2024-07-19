import React from 'react';
import { useSelector } from 'react-redux';
import { netflixLoginBackgroundImageURL, trailerNumber } from '../utils/constants';
import TrailerVideo from './TrailerVideo';

const MovieTrailer = () => {
    const trailerId = useSelector(s => s.movies.trailerMovieId);
    const movies = useSelector(s => s.movies.nowStreaming);
    const {overview, title} = (movies!== null&&movies[trailerNumber]);


    // const loop = `&loop=1&playlist=${trailerId}`;

    return (
        <div >
        {trailerId
         ?
         (   
            <>
                <div className='absolute top-48 left-24 text-white w-4/12' >
                    <h1 className='text-3xl font-bold mb-4'>{title}</h1>
                    <h1 className='text-lg'>{overview}</h1>
                </div>
                <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden'>
                    <div className='absolute w-screen h-screen inset-0 bg-black z-0 opacity-30' ></div>
                    <TrailerVideo title={title} trailerId={trailerId}/>
                </div>
            </>         
        )
        :(
            <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden bg-black'>
                <img className='w-full h-full' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
            </div>
        )        
    }

        </div>
    )
}

export default MovieTrailer