

const ExperienceInfo = ({number, text}) => {
  return <div className='flex flex-col  justify-center items-center'>
    <p className='text-cyan text-6xl font-bold'>
        {number}
    </p>
    <p className='text-white text-xl font-bold uppercase mt-2'>
        {text}
    </p>
  </div>
}

export default ExperienceInfo