import React from 'react';
import useGetTrailerMovieId from '../hooks/useGetTrailerMovieId';
import { useSelector } from 'react-redux';



const MovieTrailer = () => {
    useGetTrailerMovieId();
    const trailerId = useSelector(s => s.movies.trailerMovieId);

    if(!trailerId) {
        return
    }

    console.log(trailerId);

    return (
        <div>
            <iframe 
                width="967" height="544" 
                src={"https://www.youtube.com/embed/"+trailerId} 
                title="315 - Optimization using Genetic Algorithm" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>

    )
}

export default MovieTrailer