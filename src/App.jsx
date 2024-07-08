import './App.css';

//Components
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login.jsx';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// lazy loading
import { lazy, Suspense } from 'react';

function App() {
  return (
    <div className="w-screen h-screen ">
      <Provider store={store} >        
        <Header />
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
        element: <Body />
      },
      {
        path: "/demo",
        element: <Suspense fallback={<Body />} ><DemoComponent /></Suspense>
        
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])




export default App;
