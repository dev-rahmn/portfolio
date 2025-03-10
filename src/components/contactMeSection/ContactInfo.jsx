import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import Singleinfo from './Singleinfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <Singleinfo text="csatiqrahman@gmail.com" Image={HiOutlineMail} />
        <Singleinfo text="+91 8840362901" Image={FaPhoneVolume } />
        <Singleinfo text="Noida Sector 63, India" Image={IoLocation} />
    </div>
  )
}

export default ContactInfo