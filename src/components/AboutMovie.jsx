import React, { useEffect, useState } from 'react'
import { netflixLoginBackgroundImageURL, tmdbMovieDetailsAPI, tmdbOptions, tmdbPosterBaseUrl, tmdbVideosApi, trailerNumber } from '../utils/constants'
import { useParams } from 'react-router-dom'
import TrailerVideo from './TrailerVideo'



const AboutMovie = () => {
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const {id} = useParams();

  const fetchTrailerMovieDetails = async(trailerMovieId) => {
    try{
      const _data = await fetch(tmdbVideosApi+ "" +trailerMovieId+"/videos?", tmdbOptions)
      const data = await _data.json();

      let trailers = data.results.filter(i => i.type==="Trailer" );

      if(!trailers.length) {
        trailers = data.results.filter(i => i.type ==="Teaser");
      }

      const trailer = !trailers.length?data.results[trailerNumber]:trailers[trailerNumber];
      console.log(trailer);
      
      setMovieTrailer(trailer);
      
    }catch(error){
      console.log(error);
    }
  }
  
  const fetchMovieDetails = async(movieId) => {
    const _data = await fetch(tmdbMovieDetailsAPI+""+movieId, tmdbOptions);
    const data = await _data.json();
    console.log(data);
    setMovieDetails(data);
  }


  useEffect(() => {
    fetchTrailerMovieDetails(id);
    fetchMovieDetails(id);
  }, [])


  return (
    movieDetails && (
      <div className='h-[85%] w-full flex flex-row justify-between text-white pl-10'>
        {movieTrailer
          ?
            (   
              <TrailerVideo trailerId={movieTrailer.key} title={movieDetails.title} /> 
            )
            :(
              <div className='absolute w-screen h-screen inset-0 -z-10 overflow-hidden bg-black'>
                  <img className='w-full h-full' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
              </div>
            )        
        }
        <div className='flex flex-col w-[40%] mt-20'>
          <img className='hover:cursor-pointer hover:scale-105 w-[30%] transition aspect-square ' src={`${tmdbPosterBaseUrl}${movieDetails.poster_path}`}alt="movie-poster" />
          <p className='text-lg mt-10'>{movieDetails.overview}</p>
        </div>
        <div className='flex flex-col w-[20%] items-center mt-20'>
          <h1 className='text-white text-3xl'>{movieDetails.title}</h1>
          <p className='text-lg' >Release: {movieDetails.release_date}</p>
          <p className='text-lg'>Rating: {(movieDetails.vote_average).toFixed(1)}/10</p>
        </div>
  
    </div>

    )
  )
}

export default AboutMovie