import './App.css';

//Components
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login.jsx';
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from './utils/firebase.js';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// lazy loading
import { lazy, Suspense, useEffect } from 'react';

function App() {
  return (
    <div className="w-screen h-screen ">
      <Provider store={store} >        
        <Outlet />
      </Provider>
    </div>
  );
}

const DemoComponent = lazy(() => import("./components/Demo.jsx"));

// useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       updateProfile(auth.currentUser, {
//         displayName: 
//         photoURL:
//       })
//       // ...
//     } else {
  
//     }
//   });
// },[])

export const browserRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <> <Header /> <Body /> </>
      },
      {
        path: "/demo",
        element: <Suspense fallback={<Body />} ><DemoComponent /></Suspense>
        
      }
    ]
  },
])




export default App;
