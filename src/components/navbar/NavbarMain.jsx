import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLink from './NavbarLink'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
  return (
   <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 '>
    <div className='flex gap-4 justify-between w-full max-w-[1200px] mx-auto bg-gray items-center px-4 py-2 rounded-r-full rounded-l-full border-[0.5px] border-orange bg-darkBrown'>

    <NavbarLogo />
    <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`} >

    <NavbarLink/>
    </div>
    <NavbarBtn/>
    </div>
    <div className='flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
        <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}> 

        <GiHamburgerMenu />
        </button>
    </div>
   </nav>
  )
}

export default NavbarMain