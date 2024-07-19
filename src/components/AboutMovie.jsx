import React, { useEffect } from 'react'
import { netflixLoginBackgroundImageURL, tmdbOptions, tmdbVideosApi, trailerNumber } from '../utils/constants'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addTrailerMovie } from '../redux/movies'


const AboutMovie = () => {
  const movies = useSelector(s => s.movies.allMoviesList);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
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
        
        dispatch(addTrailerMovie(trailer.key));
        
      }catch(error){
        console.log(error);
      }
    }

  })
  return (
    <div className='h-[85%] w-full flex flex-col text-white'>
      <div className='absolute inset-0 bg-black h-screen w-screen -z-40 opacity-40' ></div>
      <img className='absolute inset-0 w-screen h-screen -z-50' src={netflixLoginBackgroundImageURL} alt="netflix-background-image" />
      <h1 className='text-white text-3xl'>Title</h1>
      <p>Over view</p>
      <p>Release date</p>
      <p>Rating</p>

  </div>
  )
}

export default AboutMovie