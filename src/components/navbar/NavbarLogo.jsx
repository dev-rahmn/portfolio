import React from 'react'
import { Link } from "react-scroll";
const NavbarLogo = () => {
  return (
    <main className='font-secondary'>
      <Link to='home' smooth={true} offset={-100} duration={500} className='cursor-pointer'>
        <h1 className='text-2xl font-bold text-white sm:hidden md:block'>Atiqur Rahman</h1>
      </Link>
        <Link to='home' smooth={true} offset={-100} duration={500} className='cursor-pointer'>
        <h1 className='text-white font-secondary text-3xl sm:block md:hidden'>A R</h1>
        </Link>
    </main>
  )
}

export default NavbarLogo