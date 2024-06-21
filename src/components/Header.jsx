import React from "react";
import { Logo } from "../assets/index";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#102039] w-full fixed  text-lg z-10">
      <div className="max-w-[91%] mx-auto flex items-center justify-between py-3">
        <div>
          <Link to="/">
            <div className="w-24 sm:w-28">
              <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex font-poppins gap-4 sm:gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-gray-100 font-semibold" : "text-gray-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-gray-100 font-semibold" : "text-gray-400"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-gray-100 font-semibold" : "text-gray-400"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
