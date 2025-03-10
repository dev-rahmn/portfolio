import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const SingleExperience = ({ experience }) => {
  const offset = useResponsiveOffset();
  return (
    <div
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
    </div>
  );
};

export default SingleExperience;
