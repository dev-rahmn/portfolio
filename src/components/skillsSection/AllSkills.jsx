import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const AllSkils = () => {
  const offset = useResponsiveOffset();
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Reactjs", icon: RiReactjsFill },
    { name: "Redux", icon: SiRedux },
    { name: "Nextjs", icon: RiNextjsFill },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "Tailwindcss", icon: RiTailwindCssFill },
    { name: "MongoDB", icon: SiMongodb },
  ];

  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((skill, index) => {
        return (
          <div>
            <SingleSkill
              key={index}
              text={skill.name}
              imgSvg={<skill.icon />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllSkils;
