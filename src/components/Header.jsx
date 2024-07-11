import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/user'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { neflixUserIconURL, netflixLogoURL } from '../utils/constants'

const Header = () => {
  const user = useSelector(s => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[])

  if(!user) {
    return
  }

  return (
    <div className='flex flex-row w-screen h-[10%] bg-transparent items-center mb-2 p-2 justify-between '>
      <div className='ml-10 h-full w-1/6' >
        <img className='h-full w-1/2  transform scale-150 ' src={netflixLogoURL} alt="netflix-logo" />
      </div>
      <div className='flex flex-row w-1/6 h-full items-center' >
        <img className='h-[85%]' src={user.photoURL} alt="user-icon object-cover" />
        <h1 className='text-white text-xl font-semibold' >{user.displayName}</h1>
        <button onClick={handleSignOut} className=' txt-center w-24 h-1/2 p-2 m-2 text-white border-white border' >Sign Out</button>
        <button onClick={() => {navigate("/gpt")}} className=' txt-center w-24 h-1/2 p-2 m-2 text-black border-white border' >Go to GPT</button>
      </div>
    </div>
  )
}

export default Header