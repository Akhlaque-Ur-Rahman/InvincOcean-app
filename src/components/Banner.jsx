import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Invinc-logo.png'
import pic1 from '../assets/img-KSYLXPX-1.jpg'
import pic2 from '../assets/img-3M3XBB9-1.jpg'
import pic3 from '../assets/img-7KF25CX-1.jpg'
import pic4 from '../assets/img-P7QPQKN-1.jpg'
import pic5 from '../assets/Group-8251-800x1024.png'
import pic6 from '../assets/Group-83541.png'
import pic7 from '../assets/Group-8464.png'

import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className='banner mx-72 p-4 mt-12 flex justify-between'>
      <div className="banner-box1 w-3/5">
        <p className='text-color2'>EKYC SOLUTIONS FOR 150+ COUNTRIES</p>
        <h1 className='banner-slogan text-7xl font-bold'>
        <p>250+ APIs to</p>
         <p className='text-color2 curve-text underline'>Detect and Identify</p>
         <p>Fraudster</p>
        </h1>
      </div>
      <div className="banner-box2 w-2/5">
        <p className='text-lg'>
        Transform your identity challenges into opportunities with the award-winning trust solutions from Invincible Ocean, tailored specifically for your needs.
        </p>
        <div className='mt-6 flex relative'>
        <img src={pic1} className='size-16 rounded-full absolute left-0 z-1'/>
        <img src={pic2} className='size-16 rounded-full absolute left-12 z-2'/>
        <img src={pic3} className='size-16 rounded-full absolute left-24 z-3'/>
        <img src={pic4} className='size-16 rounded-full absolute left-36 z-4'/>
        <p className='absolute right-36 '>
          <h1 className='text-xl text-color2 font-semibold'>500 Million+</h1>
          <h3>Verifications</h3>
        </p>
        </div>
      </div>
    </div>
    <div className="flex mx-72 p-4 mt-12 gap-10">
      <div className='relative  p-2 px-8 pt-6 posters card1 rounded-2xl text-left'>
        <h1 className='text-2xl font-semibold'>Identity Verification APIs</h1>
        <p className='mt-2'>250+ API Powered APIs including Aadhaar, PAN, GST, Vehicle RC Verification APIs</p>
        <div className='flex justify-center'><img src={pic5} alt="" className='w-60 h-72 absolute bottom-0'/></div>
      </div>
      <div className='relative p-2 px-8 pt-6 posters card1 rounded-2xl text-left'>
      <div className='flex justify-center'><img src={pic6} alt="" className=' h-72'/></div>
      <div className=''>
      <h1 className='text-2xl font-semibold'>EKYC solutions for 150+ countries</h1>
      <p className='mt-2'>Transform Onboarding with Advanced Passport, National ID, Visa OCR, Face Match, and Video KYC Solutions</p>
      </div>
        
      </div>
      <div className='relative  p-2 px-8 pt-6 posters card1 rounded-2xl text-left'>
        <h1 className='text-2xl font-semibold'>Power Is in The Platform</h1>
        <p className='mt-2'>DIY API Integration Platform with Built-in Testing and Usage Tracking Dashboard</p>
        <div className='flex justify-center'><img src={pic7} alt="" className='w-60 h-72 absolute bottom-0'/></div>
      </div>
      
    </div>
    
    </>
    
  )
}

export default Banner
