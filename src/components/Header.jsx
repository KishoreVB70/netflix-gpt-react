import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/user'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

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
  })

  return (
    <div >
      {user && 
        <div className='flex flex-row'>
          <img src={user.photoURL} alt="user-icon" />
          <h1>{user.displayName}</h1>
          <button onClick={handleSignOut} className='p-2 m-2 border-black border' >Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header