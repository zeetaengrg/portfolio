export const heroImgStyle = {
  position: "absolute",
  opacity: "0.3",
  height: "89vh",
  width: "100%",
  objectFit: "cover",
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
  height: {
    base: "80vh",
    md: "60vh",
    lg: "87vh",
  },
  gap: {
    base: "1rem",
    md: "4rem",
  },
  flexDirection: {
    base: "column",
    md: "row",
  },
};

export const imgStyle = {
  borderRadius: "50%",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.5)",
};

export const linkStyle = {
  _hover: {
    "&::after": {
      content: "none",
    },
  },
};
