import React from 'react';
import { useSelector } from 'react-redux';
import { netflixLoginBackgroundImageURL, trailerNumber } from '../utils/constants';
import TrailerVideo from './TrailerVideo';

const MovieTrailer = () => {
    const trailerId = useSelector(s => s.movies.trailerMovieId);
    const movies = useSelector(s => s.movies.nowStreaming);
    const {overview, title} = (movies!== null&&movies[trailerNumber]);

    return (
        <div >
        {trailerId
         ?
         (   
            <>
                <div className='absolute top-[32%] md:top-48 left-3 md:left-24 text-white md:w-4/12' >
                    <h1 className='text-3xl font-bold mb-4'>{title}</h1>
                    <h1 className='text-md md:text-lg'>{overview}</h1>
                </div>
                <TrailerVideo title={title} trailerId={trailerId}/>
            </>         
        )
        :(
            <>
            <div className='absolute w-screen h-screen inset-0 bg-black -z-30 opacity-40' ></div>
            <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
            </>
        )        
    }

        </div>
    )
}

export default MovieTrailer