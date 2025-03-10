import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from 'react-simple-typewriter'
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const HeroText = () => {
  const offset = useResponsiveOffset();
  return (
    <div className=" flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2
       
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        {" "}
        Front-End Web Developer{" "}
      </h2>
      <h1
        
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Atiqur Rahman
      </h1>
      <p
        
        className="text-lg text-white my-4"
      >
        A passionate Web Developer with 3 years of experience in responsive,
        <br />
        user-friendly, and visually stunning websites.
        <br />
        Dedicated to turning innovative ideas into functional digital
        experiences.
      </p>
    </div>
  );
};

export default HeroText;
