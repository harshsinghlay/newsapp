import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="pt-16">
      <div className="h-[70vh] w-full flex flex-col justify-center items-center bg-gray-100 my-4">
        <h1 className="text-4xl font-extrabold text-black tracking-widest">
          Contact Us
        </h1>

        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 text-black bg-gray-300  border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Contact;
