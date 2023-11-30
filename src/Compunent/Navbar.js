import { useState } from "react";
import {  Link } from "react-router-dom";
import { BiHome } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { CgWebsite } from 'react-icons/cg';
import { IoMdContacts } from 'react-icons/io';
import DayNightToggle from 'react-day-and-night-toggle'

const Navbar = ({children}) => {
  const [dark,setDark] = useState(false);

    return (
      
        <div className="drawer drawer-end"  data-theme={dark ? "dark" : "light" }>
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    <div className="w-full navbar fixed top-0 z-50 bg-base-100 max-sm:px-10  px-20">
    <div className="flex-1   mx-2 text-2xl font-bold text-orange-600 font-mono"><Link to="/">SAKIB.</Link></div>
    <div className="">

 <li className="lg:hidden" style={{marginTop:"-23px"}}><Link><DayNightToggle  onChange={() => setDark(!dark)}  checked={dark} /></Link></li>


 </div>
      <div className="flex-none lg:hidden max-sm:ml-2 sm:ml-2">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-x-1" >
          
          <li><Link  to="/" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"><BiHome className="text-base" /> Home</Link></li>
          <li><Link to="/about" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"><BiUser className="text-base" /> About</Link></li>
          <li><Link  to="/skills" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"><CgFileDocument className="text-base" /> Skills</Link></li>
          <li><Link  to="/portfolio" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"><CgWebsite className="text-base" /> Portfolio</Link></li>
          <li><Link  to="/contact" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"><IoMdContacts className="text-base" /> Contact</Link></li>
          <li className="mt-2"><><DayNightToggle  onChange={() => setDark(!dark)}  checked={dark} /></></li>
        </ul>
      </div>
    </div>
 {children}
 
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    
    <ul className="menu p-4 overflow-y-auto w-40 bg-base-100">
      
          <li><Link to="/" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg">Home</Link></li>
          <li ><Link  to="/about" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg"> About</Link></li>
          <li><Link  to="/skills" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg">Skills</Link></li>
          <li><Link  to="/portfolio" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg">Portfolio</Link></li>
          <li><Link  to="/contact" className="focus:bg-orange-100 focus:text-orange-800 rounded-lg">Contact</Link></li>
    </ul>  
  </div>
</div>
    );
};

export default Navbar;