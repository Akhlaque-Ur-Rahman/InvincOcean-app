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
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aspernatur? Necessitatibus eius similique, quos odio commodi error harum quo illum corrupti mollitia perferendis tenetur maiores nulla, explicabo libero quis temporibus.</div>
        </div>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
