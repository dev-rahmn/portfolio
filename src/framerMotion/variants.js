// fadeIn.js
export const fadeIn = (direction, delay, offset = 40) => {
    return {
      hidden: {
        y: direction === "up" ? offset : direction === "down" ? -offset : 0,
        x: direction === "left" ? offset : direction === "right" ? -offset : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: 1.2,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  