import React from 'react'
import './HeroBox.css'
import Navbar from './Navbar'
import { Menu } from 'lucide-react'
import logo from '../assets/Invinc-logo.png'
import pic1 from '../assets/Group-82141.png'
import pic2 from '../assets/img-3M3XBB9-1.jpg'
import pic3 from '../assets/img-7KF25CX-1.jpg'
import pic4 from '../assets/img-P7QPQKN-1.jpg'
import pic5 from '../assets/Group-8251-800x1024.png'
import pic6 from '../assets/Group-83541.png'
import pic7 from '../assets/Group-8464.png'
import { NavLink } from 'react-router-dom'

const HeroBox = () => {

  const toggleHandler = ()=>{
      document.getElementById('nav-opts').style.display='block';
      document.getElementById('nav-opts').style.transform='translateX(-100%)';
  }

  return (
    <>
        
      <div className='header w-full h-auto'>
        <div className="nav flex text-black justify-between align-middle px-60 py-2" id='navbar'>
        <div className='flex justify-center items-center'>
                <img src={logo} alt="InvincbleOcean-logo" className='w-48 text-white'/>
        </div>
        <ul className='flex justify-evenly align-middle ' id='nav-opts'>
        <li className='text-xl p-3'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='text-xl p-3'>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li className='text-xl p-3' >
          <NavLink>Solutions</NavLink>
        </li>
        <li className='text-xl p-3'>
          <NavLink>Products</NavLink>
        </li>
        <li className='text-xl p-3'>
         <NavLink to='/contact'>Contact Us</NavLink>
        </li>
        </ul>
        
        <div className=" flex justify-center items-center justify-self-end text-white">
            <button className='p-2 mx-4 nav-btn rounded hover:scale-110 active:scale-90 transition-all duration-200 ease-in'>Dashboard Login</button>
            <button className='p-2 mx-4 nav-btn rounded hover:scale-110 active:scale-90 transition-all duration-200 ease-in'>Contact Sales</button>
        </div>
        <div className="toggle-icon flex justify-center items-center cursor-pointer" >
        <Menu id='menu-icon' onClick={toggleHandler}/>
        </div>

        </div>
        <div className="hero-box relative px-60 pt-20 pb-20 mb-60 w-full h-auto text-white flex items-center justify-center gap-10" id='hero-container'>
          <div className='w-1/2 hero-text'>
          <h3 className='text-lg'>Invincible Ocean - Secure Your Digital Future</h3>
          <h1 className='text-7xl font-extrabold'> SKY ROCKET<br/>YOUR WEBSITE</h1>
          <h2 className='text-xl'>Protect your digital assets with Invincible Ocean. Our advanced technology ensures secure and reliable identity verification..</h2>
          </div>
          <div>
            <img src={pic1} alt="" className='contrast-100 brightness-100 mix-blend-plus-darker'/>
          </div>
          
          <div className='absolute -bottom-96 flex text-black justify-between px-60  w-full gap-16' id='cards-box'>
            <div className='py-6 px-4 posters card1 rounded-2xl text-left w-1/3' id='poster1'>
              <h1 className='text-2xl font-semibold'>Identity Verification APIs</h1>
              <p className='mt-2 mb-5'>250+ API Powered APIs including Aadhaar, PAN, GST, Vehicle RC Verification APIs</p>
              <div className='flex justify-center items-center'><img src={pic5} alt="" className='w-2/4'/></div>
            </div>
            <div className='py-6 px-4 posters card1 rounded-2xl text-left w-1/3' id='poster2'>
              <h1 className='text-2xl font-semibold'>EKYC solutions for 150+ countries</h1>
              <p className='mt-2 mb-5'>Transform Onboarding with Advanced Passport, National ID, Visa OCR, Face Match, and Video KYC Solutions</p>
              <div className='flex justify-center items-center'><img src={pic6} alt="" className='w-60 h-64'/></div>
            </div>
            <div className='py-6 px-4 posters card1 rounded-2xl text-left w-1/3' id='poster3'>
              <h1 className='text-2xl font-semibold'>Power Is in The Platform</h1>
              <p className='mt-2 mb-5'>DIY API Integration Platform with Built-in Testing and Usage Tracking Dashboard</p>
              <div className='flex justify-center items-center'><img src={pic7} alt="" className='w-2/4'/></div>
            </div>
          </div>
          
        </div>
        
        
          
        
          
          
        
        
      </div>
    </>
  )
}

export default HeroBox
