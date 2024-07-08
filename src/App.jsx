import './App.css';
import { createBrowserRouter, BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Demo from './components/Demo';
import Body from './components/Body';

function App() {
  return (
    <div className="w-screen h-screen ">
      <Header />
      <Outlet />
    </div>
  );
}

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
        element: <Demo />
      }
    ]
  }
])




export default App;
