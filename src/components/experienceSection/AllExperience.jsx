import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const AllExperience = () => {
  const offset = useResponsiveOffset();
  const experience = [
    {
      job: "Frontend Developer",
      company: "Ennovation TechServs Pvt. Ltd.",
      duration: "2022 - Present",
      responsibilities: [
        "Developing the UI of the website using HTML, CSS, and JavaScript.",
        "Responsible for the responsiveness of the website.",
        "Responsible for the performance of the website.",
        "Responsible for the SEO of the website.",
      ],
    },
    {
      job: "Frontend Developer",
      company: "Ennovation TechServs Pvt. Ltd.",
      duration: "2022 - Present",
      responsibilities: [
        "Developing the UI of the website using HTML, CSS, and JavaScript.",
        "Responsible for the responsiveness of the website.",
        "Responsible for the performance of the website.",
        "Responsible for the SEO of the website.",
      ],
    },
  ];
  return (
    <div className="flex lg:flex-row sm:flex-col justify-between items-center">
      {experience.map((item, index) => {
        return (
          <>
            <SingleExperience key={index} experience={item} />
            {index < 1 && (
              <div>
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
export default AllExperience;
