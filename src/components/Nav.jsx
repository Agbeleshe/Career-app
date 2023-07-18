import React, { useEffect, useState } from "react";
import { GiFairyWand } from "react-icons/gi";
import { PiHouseDuotone } from "react-icons/pi";
import { GiTalk } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { Link } from "react-scroll";



const  Themes = ["light", "dark"]

const Nav = () => {
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

const handleThemeChange = (e)=>{
  var val = e.target.getAttribute('data-set-theme');
  setTheme(val)
}
  return (
    <nav className="sticky top-0 z-50 bg-base-100">
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn bg-black text-white rounded-full btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm font-extrabold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="flex flex-rows">
                <Link to="Home" smooth={true} duration={500}><PiHouseDuotone size={23} color="black" className="font-extrabold"/>Home</Link>
              </li>
              <li>
               <Link to="Services" smooth={true} duration={500}><GiTalk size={23} color="black" className="font-extrabold"/>Services</Link>
              </li>
              <li>
                <Link to="Search" smooth={true} duration={500}><IoMdHelpCircle size={23} color="black" className="font-extrabold"/>Search</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><a/> <GiFairyWand/> MHS </a>
        </div>
        
        {/* On larg screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-medium px-1">
          <li className="flex flex-rows">
                <Link to="Home" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
              <Link to="Services" smooth={true} duration={500}>Services</Link>
              </li>
              <li>
               <Link to="Search" smooth={true} duration={500}>Search</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="font-extrabold dropdown dropdownend">
            <label tabIndex={0} className=" font-bold btn btn-primary">{Themes.length }  ThemeS</label>
            <ul className="menu menu-sm font-extrabold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto overflow-y-auto">
              {
              Themes.map((theme,i)=><li key={theme + i}>
                <button data-set-theme={theme} onClick={handleThemeChange}>{theme}</button>
              </li>)
            }
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
