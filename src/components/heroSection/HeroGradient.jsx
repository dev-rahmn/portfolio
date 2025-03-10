import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-orangeMediumShadow absolute top-0 right-[0px] -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[250px] left-[0px] -z-10 opacity-50"></div>
        <div className="shadow-orangeMediumShadow absolute top-[500px] left-[0px] -z-10 opacity-50"></div>
    </div>
  )
}

export default HeroGradient