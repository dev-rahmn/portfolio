import React from "react";
import { PiPentagon } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import useResponsiveOffset from "../../framerMotion/useResponsiveOffset";
const HeroPic = () => {
  const offset = useResponsiveOffset();
  return (
    <div
      
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../images/polotno.png"
        alt="AtiqurRahman"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiPentagon className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </div>
  );
};

export default HeroPic;
