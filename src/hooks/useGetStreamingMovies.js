import { useEffect } from 'react'
import { allMoviesApi, tmdbNowStreamingApi, tmdbOptions, tmdbVideosApi, trailerNumber} from '../utils/constants';
import { useDispatch, useSelector} from 'react-redux';
import { addAllMoviesList, addMovies, addTrailerMovie } from '../redux/movies';

const useGetStreamingMovies = () => {
    const dispatch = useDispatch();
    const user = useSelector(s => s.user);
    
    const fetchStreamingMovies  = async() => {
      if(!user) {
        return
      }

      const fetchTrailerMovieDetails = async(trailerMovieId) => {
        try{
          const _data = await fetch(tmdbVideosApi+ "" +trailerMovieId+"/videos?", tmdbOptions)
          const data = await _data.json();
          // console.log(data.results);

          let trailers = data.results.filter(i => i.type==="Trailer" );
  
          if(!trailers.length) {
            trailers = data.results.filter(i => i.type ==="Teaser");
          }
  
          const trailer = !trailers.length?data.results[trailerNumber]:trailers[trailerNumber];
          // console.log(trailer);
          
          dispatch(addTrailerMovie(trailer.key));
          
        }catch(error){
          console.log(error);
        }
      }

      try {
        const _data = await fetch(tmdbNowStreamingApi, tmdbOptions)
        const data = await _data.json();
        // console.log(data.results);  
        dispatch(addMovies(data.results));
        fetchTrailerMovieDetails(data.results[0].id);
      }catch (error){
        console.log(error);
      }
    }

    const fetchMoviesList = async() => {
      if(!user) {
        return
      }
      try {
        const moviePromises = allMoviesApi.map(ele => fetch(ele.api, tmdbOptions));
        const responses = await Promise.all(moviePromises);
  
        const jsonPromises = responses.map(r => r.json())
        const data = await Promise.all(jsonPromises);
  
        const allMoviesList = data.map((data, index) => ({
          name: allMoviesApi[index].name,
          movies: data.results.slice(0,18)
        }));
  
        // console.log(allMoviesList);
        dispatch(addAllMoviesList(allMoviesList))
      }catch(error) {
        console.log(error);
      }

    }
    
    useEffect(() => {
      fetchStreamingMovies();
      fetchMoviesList();
    },[])
}

export default useGetStreamingMovies;