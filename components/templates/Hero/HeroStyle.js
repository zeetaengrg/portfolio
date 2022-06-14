export const heroImgStyle = {
  position: "absolute",
  opacity: "0.3",
  height: {
    base: "50vh",
    md: "60vh",
    lg: "100vh",
  },
  width: "100%",
  objectFit: {
    base: "cover",
    md: "contain",
    lg: "cover",
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
    md: "2rem",
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
