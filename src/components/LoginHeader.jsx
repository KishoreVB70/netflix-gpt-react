import React from 'react'
import { netflixLogoURL } from '../utils/constants'

const LoginHeader = () => {
  return (
    <div className='flex justify-center md:justify-start absolute w-screen md:h-[14%] z-50' >
        <div className='md:w-[12%] w-[50%] h-full md:ml-80 overflow-hidden' >
            <img className='w-full h-full object-cover' src={netflixLogoURL} alt="netflix-logo" />
        </div>
    </div>
  )
}

export default LoginHeader