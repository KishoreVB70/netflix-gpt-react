import React, { useEffect, useState } from 'react'
import { netflixLoginBackgroundImageURL, tmdbMovieDetailsAPI, tmdbOptions, tmdbVideosApi, trailerNumber } from '../utils/constants'
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
      console.log(data.results);

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
      <div className='h-[85%] w-full flex flex-col text-white'>
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
        {/* <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-40' ></div>
        <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" /> */}
        <h1 className='text-white text-3xl'>Title</h1>
        <p>Over view</p>
        <p>Release date</p>
        <p>Rating</p>
  
    </div>

    )
  )
}

export default AboutMovie