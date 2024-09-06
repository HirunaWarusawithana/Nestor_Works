export  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "tween",
          delay: delay,
          duration: 1.2,
          ease: "easeOut",
        },
      },
    };
  };