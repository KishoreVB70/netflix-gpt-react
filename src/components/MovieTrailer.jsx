import React from 'react';
import { useSelector } from 'react-redux';

const MovieTrailer = () => {
    const trailerId = useSelector(s => s.movies.trailerMovieId);

    if(!trailerId){
        return
    }

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