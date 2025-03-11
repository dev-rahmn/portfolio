import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import { Link } from 'react-scroll';
const NavbarBtn = () => {
  return (
    <Link to='contact' spy={true} smooth={true} className='flex text-white lg:py-1 px-2 rounded-full text-lg font-bold border-cyan border items-center gap-1 cursor-pointer bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
        Hire Me
        <div className='sm:hidden md:block'>
         <GoArrowDownRight />
        </div>
         </Link>
  )
}

export default NavbarBtn