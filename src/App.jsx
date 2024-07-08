import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Demo from './components/Demo';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './redux/store';
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
  }
])




export default App;
