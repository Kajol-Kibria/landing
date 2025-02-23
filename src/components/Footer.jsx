import React from 'react'
import { FaLinkedin, FaFacebook , FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className='bg-[#000E28] py-10 sm:px-10 2xl:px-36 px-3 text-white'>
      <div className='sm:flex justify-between mb-28 px-5 sm:px-0 '>
        <div>
        <div className='  gap-3 z-50 flex items-center '>
                <img className=' sm:w-12 w-8' src='/log.png'/>
                <p className=' font-bold text-white  sm:text-3xl text-2xl'>Solve</p>
            </div>
            <div className='flex items-center gap-5 my-8'>
              <a href='https://www.linkedin.com/company/106595161'>
                <FaLinkedin size={25}/>
              </a>
              <a href='https://x.com/solvebyrovasoft?s=09'>
                <FaXTwitter size={25}/>
              </a>
              <a href='https://www.facebook.com/profile.php?id=61572909408001'>
                  <FaFacebook size={25}/>
              </a>
              <FaYoutube size={25}/>
            </div>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 sm:gap-20'>
          <div>
            <p  className='font-semibold text-lg mb-3'>Call Us</p>
            <p>08065153918</p>
            <p>09073710865</p>
          </div>
          <div>
            <p className='font-semibold text-lg mb-3'>Email</p>
            <p>info@solve.ng</p>
            <p>business@solve.ng</p>
          </div>
          <div>
            <p className='font-semibold text-lg mb-3'>Location</p>
            <p className='w-2/3'>35, Opebi Road, Ikeja, Lagos</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between text-[10px] sm:text-sm text-[#BDC2F6]'>
        <div className='hidden sm:block '>
        
        <p className='flex items-center text-white gap-1'><MdCopyright/>2025 Rovasoft Tech Solutions Ltd. All rights reserved.</p>
        </div>
        <div className='sm:w-auto w-full flex justify-center gap-2 sm:gap-16'>
        <NavLink to='/'  >
        About Solve
        </NavLink>
        <NavLink to='/privacy-policy'  >
        Privacy policy
        </NavLink>
        <NavLink to='/terms&conditions'  >
        Terms & conditions
        </NavLink>
        <NavLink to='/'  >
        Cookies
        </NavLink>
        </div>
      </div>
        <p className='sm:hidden flex items-center justify-center mt-3 text-white text-xs  gap-1'><MdCopyright/>2025 Rovasoft Tech Solutions Ltd. All rights reserved.</p>
    </div>
  )
}
