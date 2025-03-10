// useResponsiveOffset.js
import { useState, useEffect } from "react";

const useResponsiveOffset = () => {
  const [offset, setOffset] = useState(40);

  useEffect(() => {
    const updateOffset = () => {
      // Use a breakpoint of 768px (adjust if needed)
      if (window.innerWidth < 768) {
        setOffset(20);
      } else {
        setOffset(40);
      }
    };

    updateOffset(); // Set initial offset
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return offset;
};

export default useResponsiveOffset;
