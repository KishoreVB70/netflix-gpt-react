import React from 'react'
import LoginHeader from './LoginHeader'

const Login = () => {
  return (
    <div className='relative w-full h-full' >
        <LoginHeader />
        <img className='absolute w-screen h-screen bg-black z-0' src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt="login-background-image" />
        <div className='absolute h-screen w-screen z-10 top-0 left-0 bg-black opacity-50' >
        </div>

        <div className='absolute h-screen w-screen flex justify-center items-center' >
            <div className='relative flex flex-col w-[22%] h-[78%]'>
                <div className='absolute w-full h-full opacity-70 bg-black' >
                </div>

                <h1 className='z-50 text-white text-[2rem] font-bold mx-10 mt-10'>Sign In</h1>

                <form className=" flex flex-col z-50  top-auto left-auto mx-10 mt-5"  action="">
                    <input  className='border h-[3.3 rem] text-white border-gray-400 p-4 m-2 bg-black' placeholder='Email' type="text" />
                    <input className='h-[3.3 rem] border text-white border-gray-400     p-4 m-2 bg-black' placeholder='password' type="password" />
                    <button className='hover:bg-red-700 text-white bg-red-600 h-9 m-2 font-semibold' >Sign In</button>
                </form>
                <p className='text-white z-50 m-12'>New to netflix? Sign up now</p>
            </div>
        </div>

    </div>
  )
}

export default Login