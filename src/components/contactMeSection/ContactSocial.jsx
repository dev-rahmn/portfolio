import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SingleContatSocial from './SingleContatSocial';

const ContactSocial = () => {
  return (
    <div className='flex items-center justify-center mt-2 gap-4'>
        <SingleContatSocial Icon={CiLinkedin} link='www.linkedin.com/in/atiqur-rahman-723608169' />
        <SingleContatSocial Icon={FaGithub} link='https://github.com/dev-rahmn' />
        <SingleContatSocial Icon={FaInstagram} link='https://www.instagram.com/bahubali_ateeq?igsh=bTFlejV5MGZtajJt' />
    </div>
  )
}

export default ContactSocial