import './App.css';

//Components
import { BrowserRouter, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login.jsx';
import AboutMovie from './components/AboutMovie.jsx';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// lazy loading
import { lazy, Suspense} from 'react';
import Browse from './components/Browse.jsx';
import BrowseBody from './components/BrowseBody.jsx';

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
        element: <Browse />,
        children: [
          {
            path: "/browse",
            element: <BrowseBody />
          },
          {
            path:"/browse/movie",
            element: <AboutMovie />,
          }
        ]
      },
      {
        path: "/demo",
        element: <Suspense fallback={<Body />} ><DemoComponent /></Suspense>
      },
    ]
  },
])

export default App;
