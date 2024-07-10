import { useEffect } from 'react'
import { tmdbNowStreamingApi, tmdbOptions} from '../utils/constants';
import { useDispatch} from 'react-redux';
import { addMovies } from '../redux/movies';

const useGetStreamingMovies = () => {
    const dispatch = useDispatch();
    
    const fetchStreamingMovies  = async() => {
      try {
        const _data = await fetch(tmdbNowStreamingApi, tmdbOptions)
        const data = await _data.json();
        console.log(data.results);  
        dispatch(addMovies(data.results));
      }catch (error){
        console.log(error);
      }
    }
    
    useEffect(() => {
      fetchStreamingMovies()
    },[])
}

export default useGetStreamingMovies;