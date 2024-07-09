import React, { useEffect } from 'react'
import { tmdbNowStreamingApi, tmdbOptions } from '../utils/constants';

const Body = () => {

  const fetchStreamingMovies  = async() => {
    try {
      const _data = await fetch(tmdbNowStreamingApi, tmdbOptions)
      const data = await _data.json();
      console.log(data);
    }catch (error){
      console.log(error);
    }
  }

 useEffect(() => {
  fetchStreamingMovies();
 },[])

  return (
    <div>Body</div>
  )
}

export default Body