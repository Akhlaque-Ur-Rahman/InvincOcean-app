import React from 'react'
import Marquee from "react-fast-marquee";
import tata from "../assets/TATA.png"
import olx from "../assets/olx.png"
import unipe from "../assets/unipe.png"
import tata_aig from "../assets/TATA_AIG_logo.png"
import star_cement from "../assets/star-cement.png"
import plantix from "../assets/Plantix-logo.png"
import bajaj from "../assets/bajaj-finance.png"
import bb from "../assets/bigb.png"
import digiseva from "../assets/digiseva.png"
import droom from "../assets/droom.png"
import gromo from "../assets/gromo1.png"

const Carousel = () => {
  return (
    <>
        {/* <div className='carousel-box bg-blue-950 h-80 mb-60 overflow-x-hidden flex whitespace-nowrap'>
            <div className="carousel flex items-center justify-between h-full w-full gap-12">
                <img src={olx} alt="" className='w-52' />
                <img src={tata} alt=""  className='w-52'/>
                <img src={tata_aig} alt=""  className='w-52'/>
                <img src={unipe} alt=""  className='w-52'/>
                <img src={plantix} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
            </div>
            
        </div> */}
        <Marquee pauseOnHover loop={0} autoFill className='bg-blue-950 gap-16 carousel h-80'> 
                <img src={olx} alt="" className='w-52' />
                <img src={droom} alt=""  className='w-52'/>
                <img src={digiseva} alt=""  className='w-52 bg-black'/>
                <img src={bb} alt=""  className='w-52 bg-white'/>
                <img src={tata} alt=""  className='w-52'/>
                <img src={tata_aig} alt=""  className='w-52'/>
                <img src={unipe} alt=""  className='w-52'/>
                <img src={plantix} alt=""  className='w-52'/>
                <img src={bajaj} alt=""  className='w-52'/>
                <img src={star_cement} alt=""  className='w-52'/>
                <img src={gromo} alt=""  className='w-52'/>
                
                
        </Marquee>
    </>
  )
}

export default Carousel
