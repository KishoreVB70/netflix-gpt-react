import React from 'react';
import useGetTrailerMovieId from '../hooks/useGetTrailerMovieId';



const MovieTrailer = () => {
    useGetTrailerMovieId();
    return (
        <div>MovieTrailer</div>
    )
}

export default MovieTrailer