import React from 'react'
import {Logo} from '../assets/index'
import {  NavLink , Link} from 'react-router-dom'

function Header() {
  return (
    <div className='w-full fixed bg-gray-200 text-lg z-10'>
      <div className='max-w-[90%] mx-auto flex items-center justify-between py-3'>
        <div>
          <Link to="/">
        <div className='w-12'>
          <img src={Logo} alt="Logo" className='w-full h-full' />
        </div>
        </Link>
        </div>
        <div>
          <ul className='flex font-poppins gap-4'>
           <li>
            <NavLink to="/" className={({isActive})=>isActive ? "text-gray-800 font-semibold" : "text-gray-600"}>Home</NavLink>
           </li>
           <li>
            <NavLink to="/about" className={({isActive})=>isActive ? "text-gray-800 font-semibold" : "text-gray-600"}>About</NavLink>
           </li>
           <li>
            <NavLink to="/contact" className={({isActive})=>isActive ? "text-gray-800 font-semibold" : "text-gray-600"}>Contact</NavLink>
           </li>
           
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header