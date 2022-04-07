export const boxVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ballVariants = {
  start: {
    y: "5vh",
  },
  end: {
    y: "-5vh",
    backgroundColor: [
      "#0B111E",
      "#141E39",
      "#3D4462",
      "#686E8F",
      "#959BBF",
      "#C5CBF0",
    ],
    transition: {
      y: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
      backgroundColor: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.2,
      },
    },
  },
};

export const ballStyle = {
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#141E39",
  borderRadius: "50%",
  boxShadow:
    "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};
