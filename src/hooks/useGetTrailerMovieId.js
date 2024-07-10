import { useEffect } from 'react'
import { tmdbOptions, tmdbVideosApi } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerMovie } from '../redux/movies';

const useGetTrailerMovieId = () => {
    const dispatch = useDispatch();
    const movies = useSelector(s => s.movies.nowStreaming);

    const fetchTrailerMovieDetails = async() => {
      try{
        const trailerMovieId = movies[0].id
        const _data = await fetch(tmdbVideosApi+ "" +trailerMovieId+"/videos?", tmdbOptions)
        const data = await _data.json();
        let trailers = data.results.filter(i => i.type==="Trailer" );

        if(!trailers.length) {
          trailers = data.results.filter(i => i.type ==="Teaser");
        }

        const trailer = !trailers.length?data.results[0]:trailers[0];
        console.log(trailer);
        dispatch(addTrailerMovie(trailer.id));
        
      }catch(error){
        console.log(error);
      }
    }
    
    useEffect(() => {
        fetchTrailerMovieDetails();
    },[])
}

export default useGetTrailerMovieId;