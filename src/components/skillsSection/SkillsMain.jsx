import React from "react";
import SkillsText from "./SkillsText";
import AllSkils from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const SkillsMain = () => {
  const offset = useResponsiveOffset();
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <div
        >
          <SkillsText />
        </div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkils />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
