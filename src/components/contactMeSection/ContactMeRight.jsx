import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="../../images/email-image.png" alt="email-image" className='m-w-[300px]'/>
        <div>
            <ContactInfo />
            <ContactSocial />
        </div>
    </div>
  )
}

export default ContactMeRight