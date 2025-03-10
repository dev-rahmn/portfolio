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
const AllSkilsSm = () => {
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
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((skill, index) => {
        return (
          <motion.div
            variants={fadeIn("up", '0.2')}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center "
          >
            <skill.icon className="text-7xl text-orange" />
            <p className="text-center text-white mt-4">{skill.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkilsSm;
