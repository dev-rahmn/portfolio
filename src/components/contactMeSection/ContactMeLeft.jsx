import React from 'react'
import ContactForm from './ContactForm'
const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-3xl text-orange mb-4'>
                Get in touch
            </h2>
            <p className='text-white '>
                I'm currently looking for new opportunities.<br/>
                 Whether you have a question or just want to say hi,<br/>
                  I'll try my best to get back to you!
            </p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMeLeft