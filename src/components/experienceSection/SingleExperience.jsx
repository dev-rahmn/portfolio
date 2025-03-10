import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", "0.2")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="lg:h-full lg:w-[240px] sm:h-auto sm:w-full md:h-auto md:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-2xl text-cyan">{experience.job}</p>
      <p className="text-orange text-lg">{experience.company}</p>
      <p className="text-lightGrey text-lg">{experience.duration}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
