import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="h-[70vh] w-full flex flex-col justify-center items-center bg-[#1A2238]">
    <h1 className="text-4xl font-extrabold text-white tracking-widest">About Us</h1>
   
    <button className="mt-5">
        <a
            className="relative inline-block text-sm font-medium text-gray-100 group active:text-white focus:outline-none focus:ring"
        >
            <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-100 group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link to="/">Go Home</Link>
            </span>
        </a>
    </button>
</div>
  )
}

export default About