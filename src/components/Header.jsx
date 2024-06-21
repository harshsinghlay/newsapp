import React from 'react'
import {Logo} from '../assets/index'

function Header() {
  return (
    <div className='w-full fixed bg-red-100 text-lg z-10'>
      <div className='max-w-[90%] mx-auto flex items-center justify-between py-6'>
        <div>
          <img src={Logo} alt="Logo" className='w-[20px]' />
        </div>
        <div >
          <ul className='font-poppins flex'>
            <li >Home</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header