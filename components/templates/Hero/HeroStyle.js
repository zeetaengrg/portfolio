export const commonVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
      type: "spring",
      stiffness: 110,
    },
  },
};

export const boxStyle = {
  position: "absolute",
  opacity: "0.3",
  display: {
    base: "none",
    md: "block",
  },

  "&>span": {
    top: {
      base: 0,
      lg: "-8rem",
      xl: "0rem",
    },
  },
};

export const flexStyle = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: {
    base: "1rem",
    md: "2rem",
  },
  flexDirection: {
    base: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
};

export const linkStyle = {
  _hover: {
    "&::after": {
      content: "none",
    },
  },
};
