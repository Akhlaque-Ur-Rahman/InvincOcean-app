import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
        <Navbar/>
        <Banner/>
        <div>
      
        </div>
      </div>,
    },
    {
      path:'/about',
      element:<div>
        <Navbar/>
        <h1 className='text-9xl'>About Us</h1>
      </div>
    },
    {
      path:'/contact',
      element:<div>
        <Navbar/>
        <h1 className='text-9xl'>Contact Us</h1>
      </div>
    }
  ]
)

function App() {
  

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
