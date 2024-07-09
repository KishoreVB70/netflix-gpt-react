import React, { useEffect } from 'react'
import useGetStreamingMovies from '../utils/useGetStreamingMovies'
const Body = () => {
  useGetStreamingMovies();
  
  return (
    <div>Body</div>
  )
}

export default Body