import React from 'react'
import { Menu } from 'lucide-react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/Invinc-logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar py-6 px-72 flex justify-between align-middle sticky top-0 z-10'>
      <ul className='flex justify-between align-middle'>
        
        <li >
          <img src={logo} alt="" className='w-48'/>
        </li>
        
        <li className='text-lg'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='text-lg'>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li className='text-lg' >
          <NavLink>Solutions</NavLink>
        </li>
        <li className='text-lg'>
          <NavLink>Products</NavLink>
        </li>
        <li className='text-lg'>
         <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <div className="navbar-right-btns flex">
        <Link to='' className='navbar-btns mr-12 rounded-lg'> Dashboard Login </Link>
        <Link to='' className='navbar-btns rounded-lg'> Contact Sales </Link>
        <Menu id='menu-icon'/>
      </div>
    </div>
  )
}

export default Navbar
