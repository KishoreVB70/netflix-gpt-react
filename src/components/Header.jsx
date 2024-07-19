import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/user'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { netflixLogoURL } from '../utils/constants'
import { togglePage } from '../redux/pageToggle'
import { changeLang } from '../redux/config'

const Header = () => {
  const user = useSelector(s => s.user);
  const location = useLocation();
  const { pathname } = location;
  const isGptPage = useSelector(s => s.pageToggle.isGptPage);
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

  const actionButtonNameFunction = () => {
    if (pathname === "/browse" ) {
      if (isGptPage) {
        return "Go Home"
      } else {
        return "Go to GPT"
      }
    } else {
      return "Go Back"
    }
  }

  const actionButtonName = actionButtonNameFunction();

  const handleActionButtonClick = () => {
    if (pathname === "/browse" ) {
      dispatch(togglePage());
    } else {
      navigate("/browse")
    }
  }
    
 
  const changeLanguage = (e)=> {
    dispatch(changeLang(e.target.value));
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[user])

  if(!user) {
    return
  }

  return (
    <div className=' flex flex-col md:flex-row md:h-[10%] bg-transparent items-center md:mb-2 p-2 md:justify-between'>
      <div className='md:ml-10 md:h-full md:w-1/6 flex justify-center md:justify-start' >
        <Link className='w-4/12 md:w-1/2' to={"/browse"}>
          <img className='hover:cursor-pointer md:h-full md:w-full transform scale-150' src={netflixLogoURL} alt="netflix-logo" />
        </Link>
      </div>
      <div className='flex flex-row md:w-2/6 md:h-full items-center md:mr-8 md:justify-end justify-between' >
        {isGptPage &&
          <select className='hidden md:block bg-transparent w-24 border border-white text-white hover:cursor-pointer p-2' onChange={changeLanguage}>
            <option className='text-black ' value="en">English</option>
            <option className='text-black ' value="tn">Tamil</option>
            <option className='text-black ' value="hn">Hindi</option>
          </select>}
        <img className='hidden md:block h-[85%]' src={user.photoURL} alt="user-icon object-cover" />
        <h1 className='text-white text-xl font-semibold' >{user.displayName}</h1>
        <button onClick={handleActionButtonClick} className='transition duration-300 ease-in-out hover:rounded-xl text-md flex justify-center items-center txt-center w-24 h-1/2 p-2 text-white mx-2 border-red-600 hover:bg-red-600 border' >{actionButtonName}</button>
        <button onClick={handleSignOut} className='text-md flex justify-center items-center txt-center w-24 h-1/2 p-2 text-white border-white border ' >Sign Out</button>
      </div>
    </div>
  )
}

export default Header