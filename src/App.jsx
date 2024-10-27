import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomePage from './pages/Home'
import {Routes,Route } from 'react-router-dom';
import {Home} from 'lucide-react';
import About from './pages/About';
import Contact from './pages/Contact';
import HeroBox from './components/HeroBox';



function App() {
  

  return (
    <>
    
    
    <Routes>
        <Route path='/' element={
        <div>
          <HeroBox/>

        </div>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
