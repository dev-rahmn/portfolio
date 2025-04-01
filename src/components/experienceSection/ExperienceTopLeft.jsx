import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold text-3xl uppercase font-special text-center'>Since 2022</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='3' text='Years '/>
        <p className='font-bold items-center justify-center text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number='8' text='Projects'/>

      </div >
      <p className='text-center text-white text-xl font-bold uppercase'>2022 - 2023</p>
      {/* <div>
        <ExperienceInfo number='₹10,00,000' text='Max budget' />
      </div> */}
    </div>
  )
}

export default ExperienceTopLeft