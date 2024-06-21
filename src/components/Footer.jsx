import React from 'react'

function Footer() {
  return (
    <div
     className='w-full bg-gray-100 py-4'>
      <div className='w-[91%] mx-auto '>
      <p className='text-gray-700 text-center pb-3'>© {new Date().getFullYear()} Newsapp. All rights reserved.</p>
      </div>
      </div>
  )
}

export default Footer