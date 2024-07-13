import React from 'react'
const movies = [1,2,3,4,5,6,7,8,9,10]

const MovieCardShimmer = () => {
  return (
    <div className='my-2 mx-2 w-[13vw] bg-gray-50 h-[20vh]'></div>
  )
}
const MovieListShimmer = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start' >
        {movies.map((i,id )=> <MovieCardShimmer key={id}/>)}
    </div>
  )
}

export default MovieListShimmer