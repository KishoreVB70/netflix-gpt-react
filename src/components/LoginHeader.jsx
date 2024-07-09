import React from 'react'
import { netflixLogoURL } from '../utils/constants'

const LoginHeader = () => {
  return (
    <div className='absolute w-screen h-[14%] z-50' >
        <div className='w-[12%] h-full ml-80 overflow-hidden' >
            <img className='w-full h-full object-cover' src={netflixLogoURL} alt="netflix-logo" />
        </div>
    </div>
  )
}

export default LoginHeader