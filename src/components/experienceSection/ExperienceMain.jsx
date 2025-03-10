import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const ExperienceMain = () => {
  const offset = useResponsiveOffset();
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <div 
      >
        <ExperienceText />
      </div>
      <div
      >
        <ExperienceTop />
      </div>

      <div className="w-full h-[1px] bg-lightBrown mt-4 lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
