import React from 'react'

const FooterMain = () => {
    const links =[ 
        {link: "About Me", section: "about"},
        {link: "Skills", section: "skills"},
        {link: "Experience", section: "experience"},
        {link: "Projects", section: "projects"},
        {link: "Contact", section: "contact"},
    ]
  return (
    <div  className='px-4'>
        <div className="bg-lightGrey w-full h-[1px] mt-24"></div>
        <div className='md:flex sm:hidden justify-between max-w-[1200px] mx-auto'>
            <p className='text-3xl text-lightGrey'>Atiqur Rahman</p>
            <ul className='flex gap-4 text-lightGrey text-xl '>
                {links.map((link, index)=>{
                    return(
                        <li key={index}>
                            <a href={`#${link.section}`} className='hover:text-white transition-all duration-300 cursor-pointer' >{link.link}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] text-right mx-auto text-lightBrown mt-2 mb-12  text-sm'>@2025 AtiqurRahman | All Rights Reserved</p>
    </div>
  )
}

export default FooterMain