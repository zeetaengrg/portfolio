export const boxStyle = {
  position: "absolute",
  top: {
    base: "0",
    md: "7rem",
    lg: "-8rem",
  },
  opacity: "0.3",
  display: {
    base: "none",
    md: "block",
  },
};

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

export const flexStyle = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: {
    base: "1rem",
  },
  flexDirection: {
    base: "column",
    md: "column",
    lg: "row",
  },
};

export const linkStyle = {
  _hover: {
    "&::after": {
      content: "none",
    },
  },
};
