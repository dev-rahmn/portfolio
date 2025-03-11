import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from 'react-simple-typewriter'

const HeroText = () => {
  return (
    <div className=" flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        {" "}
        Front-End Developer{" "}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        <Typewriter
          words={["Atiqur Rahman", "Web Developer"]}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={2000}
        />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-white my-4"
      >
        A passionate Web Developer with 3 years of experience in responsive,
        <br />
        user-friendly, and visually stunning websites.
        <br />
        Dedicated to turning innovative ideas into functional digital
        experiences.
      </motion.p>
    </div>
  );
};

export default HeroText;
