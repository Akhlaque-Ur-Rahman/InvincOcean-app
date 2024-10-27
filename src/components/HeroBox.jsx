import React from 'react'
import './HeroBox.css'
import Navbar from './Navbar'
import { Menu } from 'lucide-react'
import logo from '../assets/Invinc-logo.png'
import pic1 from '../assets/Group-82141.png'
import pic5 from '../assets/Group-8251-800x1024.png'
import { NavLink } from 'react-router-dom'

const HeroBox = () => {
  return (
    <>
        
      <div className='header'>
        <div className="nav flex text-black justify-between align-middle px-60">
        <div className='flex justify-center items-center'>
                <img src={logo} alt="InvincbleOcean-logo" className='w-48 text-white'/>
        </div>
        <ul className='flex justify-evenly align-middle'>
        <li className='text-lg p-3'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='text-lg p-3'>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li className='text-lg p-3' >
          <NavLink>Solutions</NavLink>
        </li>
        <li className='text-lg p-3'>
          <NavLink>Products</NavLink>
        </li>
        <li className='text-lg p-3'>
         <NavLink to='/contact'>Contact Us</NavLink>
        </li>
        </ul>
        
        <div className=" flex justify-center items-center justify-self-end text-white">
            <button className='p-3 mx-4 nav-btn rounded'>Dashboard Login</button>
            <button className='p-3 mx-4 nav-btn rounded'>Contact Sales</button>
        </div>
        <div className="toggle-icon flex justify-center items-center cursor-pointer">
        <Menu id='menu-icon' />
        </div>

        </div>
        <div className="hero-box relative px-60 size-full text-white flex items-center">
          <div className='w-1/2'>
          <h3 className='text-lg'>Invincible Ocean - Secure Your Digital Future</h3>
          <h1 className='text-7xl font-extrabold'> SKY ROCKET<br/>YOUR WEBSITE</h1>
          <h2 className='text-xl'>Protect your digital assets with Invincible Ocean. Our advanced technology ensures secure and reliable identity verification..</h2>
          </div>
          <div>
            <img src={pic1} alt="" className='contrast-100 brightness-100 mix-blend-plus-darker'/>
          </div>
        </div>
        
          
          <div className='absolute z-1 -bottom-96 left-0 size-96 h-auto p-2 px-8 ml-60 pt-6 posters card1 rounded-2xl text-left'>
            <h1 className='text-2xl font-semibold'>Identity Verification APIs</h1>
            <p className='mt-2 mb-5'>250+ API Powered APIs including Aadhaar, PAN, GST, Vehicle RC Verification APIs</p>
            <div className=''><img src={pic5} alt="" className=''/></div>
          </div>
          <div className='absolute -bottom-96 right-1/2 translate-x-2/4 size-96 h-auto p-2 px-8 pt-6 posters card1 rounded-2xl text-left'>
          <h1 className='text-2xl font-semibold'>Identity Verification APIs</h1>
            <p className='mt-2 mb-5'>250+ API Powered APIs including Aadhaar, PAN, GST, Vehicle RC Verification APIs</p>
            <div className=''><img src={pic5} alt="" className=''/></div>
          </div>
          <div className='absolute -bottom-96 right-0 h-auto size-96 p-2 mr-60 px-8 pt-6 posters card1 rounded-2xl text-left'>
            <h1 className='text-2xl font-semibold'>Identity Verification APIs</h1>
            <p className='mt-2 mb-5'>250+ API Powered APIs including Aadhaar, PAN, GST, Vehicle RC Verification APIs</p>
            <div className=''><img src={pic5} alt="" className=''/></div>
          </div>
          {/* Try to make a div and place cards and flex it then make the box absolute */}
          
        
        
      </div>
    </>
  )
}

export default HeroBox
