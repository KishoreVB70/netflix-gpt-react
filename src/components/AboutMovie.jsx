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
      // console.log(trailer);
      
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
    <>
    {!movieDetails && 
      <>
      <div className='absolute inset-0 bg-black h-screen w-screen -z-10 opacity-40' ></div>
      <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
      </>
    }
    {movieDetails &&
    (
      <div className='h-[85%] w-full flex flex-col md:flex-row md:justify-between text-white p-2 md:pl-10'>
        {movieTrailer
          ?
            (   
              <TrailerVideo trailerId={movieTrailer.key} title={movieDetails.title} /> 
            )
            :(
              <div className='absolute w-screen h-screen inset-0 -z-10'>
                  <div className='absolute inset-0 bg-black h-screen w-screen -z-10 opacity-40' ></div>
                  <img className='absolute inset-0 w-full h-full -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
              </div>
            )        
        }
        <div className='flex flex-row items-center md:items-start md:flex-col md:w-[40%] mt-64 md:mt-20 md:opacity-80'>
          <img className='hover:cursor-pointer hover:scale-105 md:w-[30%] w-[40%] transition aspect-auto' src={`${tmdbPosterBaseUrl}${movieDetails.poster_path}`}alt="movie-poster" />
          <p className='text-lg md:mt-10 md:ml-0 ml-3'>{movieDetails.overview}</p>
        </div>
        <div className='flex flex-col md:w-[15%] items-start mt-5 md:mt-20 opacity-80'>
          <h1 className='text-white text-3xl w-[80%] font-bold mb-5'>{movieDetails.title}</h1>
          <p className='text-lg' >Release: {movieDetails.release_date}</p>
          <p className='text-lg'>Rating: {(movieDetails.vote_average)?.toFixed(1)}/10</p>
        </div>
      </div>
    )
    }
    </>

  )
}

export default AboutMovie