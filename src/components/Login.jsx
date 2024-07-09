import React, { useRef, useState } from 'react'
import LoginHeader from './LoginHeader'
import { validateInput } from '../utils/validateInput';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //State
  const emailValue = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [formState, setFormState] = useState("Sign In");
  const [validationErrorString, setValidationErrorString] = useState(null);



  const handleFormToggle = () => {
    setFormState(s => s==="Sign In"?"Sign Up":"Sign In");
  }

  const handleFormSubmit = () => {
    const validationResult = validateInput(emailValue.current.value, password.current.value, name);
    setValidationErrorString(validationResult);

    if(validationResult) return;
    const setStuffUp = () => {
      const { displayName, email, uid, photoURL } = auth.currentUser;
  
      const userObject = { displayName, email, uid, photoURL };

      // Set user into store
      dispatch(setUser(userObject));

      // Change page
      navigate('/browse');
    }

    const handleSignUpPromise = () => {
      createUserWithEmailAndPassword(auth, emailValue.current.value, password.current.value)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: "https://www.iconpacks.net/icons/5/free-icon-gamer-boy-15169.png"
        })
        .then(() => {
          const {displayName, email, uid, photoURL} = auth.currentUser;

          const userObject = {displayName, email, uid, photoURL}
  
          console.log(userObject);
  
          // Set user into store
          dispatch(setUser(userObject));
          navigate("/browse");
        })
      })
      .catch(error => console.log(error));
    }

    const signUpUser = async () => {
      try {
        // Create user
        await createUserWithEmailAndPassword(auth, emailValue.current.value, password.current.value);
  
        // Update user profile
        await updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: "https://www.iconpacks.net/icons/5/free-icon-gamer-boy-15169.png"
        });
        setStuffUp();
  
      } catch (error) {
        console.log('Error during sign up:', error.message);
      }
    };

    const signInUser = async() => {
      try {
        //Sign in user
        await signInWithEmailAndPassword(auth, emailValue.current.value, password.current.value);

        setStuffUp();
      } catch (error) {
        setValidationErrorString(error.message);
      }
    }

    if(formState === "Sign Up") {
      signUpUser();
    } else {
      signInUser();
    }
  }

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

            <h1 className='z-50 text-white text-[2rem] font-bold mx-10 mt-10'>{formState}</h1>

            <div className=" flex flex-col z-50  top-auto left-auto mx-10 mt-5" > 
              {formState === "Sign Up" && 
                <input ref={name} className={`h-[3.3 rem] border text-white border-gray-500   p-4 m-2 bg-gray-900 bg-opacity-50 ${validationErrorString==="Name not valid"?"border-red-500":"border-gray-500"} `} placeholder='Name' type="text" />
              }
              <input  className={`border h-[3.3 rem] text-white p-4 m-2 bg-gray-900 bg-opacity-50 ${validationErrorString==="Email not valid"?"border-red-500":"border-gray-500"}`} ref={emailValue} placeholder='Email' type="text" />
              <input className={`h-[3.3 rem] border text-white border-gray-500   p-4 m-2 bg-gray-900 bg-opacity-50 ${validationErrorString==="Password not valid"?"border-red-500":"border-gray-500"}`} ref={password} placeholder='password' type="password" />
              <p className='text-red-500 ml-2 z-50 font-semibold text-lg' >{validationErrorString}</p>
              <button onClick={handleFormSubmit} className='z-50 rounded-md hover:bg-red-700 text-white bg-red-600 h-10 m-2 font-semibold' >{formState}</button>
            </div>

            {formState === "Sign In" &&                 
              <div className='m-12 flex'>
                <span className='text-white z-50 mr-1'>New to Netflix?</span>
                <span onClick={handleFormToggle} className='text-white z-50 hover:cursor-pointer font-[640] hover:underline'>Sign up now</span>
              </div>
            }

            {formState === "Sign Up" &&                 
              <div className='m-12 flex'>
                <span className='text-white z-50 mr-1'>Already have an account?</span>
                <span onClick={handleFormToggle} className='text-white z-50 hover:cursor-pointer font-[640] hover:underline'>Sign in</span>
              </div>
            }
          </div>
        </div>

    </div>
  )
}

export default Login