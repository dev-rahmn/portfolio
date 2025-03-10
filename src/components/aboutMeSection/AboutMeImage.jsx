import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img src="../../images/about-me.jpg" alt="aboutme" className='h-full w-auto object-cover'/>
        </div>
        <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounder-tr-[120px] ronded-br-[120px] rounder-tl-[120px] -z-10'>

        </div>
    </div>
  )
}

export default AboutMeImage