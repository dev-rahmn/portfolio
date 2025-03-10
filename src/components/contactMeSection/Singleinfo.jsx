import React from 'react'

const Singleinfo = ({text,Image}) => {
  return (
    <div className='flex items-center justify-start gap-4'>
       <Image className='text-3xl'/>
        <p className='text-white'>{text}</p>
    </div>
  )
}

export default Singleinfo