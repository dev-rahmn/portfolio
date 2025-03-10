import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
const NavbarBtn = () => {
  return (
    <button className='flex text-white py-2 px-4 rounded-full text-xl font-bold border-cyan border items-center gap-1 cursor-pointer bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
        Hire Me
        <div className='sm:hidden md:block'>
         <GoArrowDownRight />
        </div>
         </button>
  )
}

export default NavbarBtn