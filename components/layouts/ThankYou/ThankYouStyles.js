export const boxVariants = {
  start: {
    opacity: 0,
    y: "20vh",
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

export const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: {
    base: "1rem",
    md: "4rem",
    xl: "0rem",
  },
  height: {
    base: "62.5vh",
    md: "77vh",
    lg: "80vh",
    xl: "90vh",
  },
  marginBottom: {
    base: "6rem",
    xl: "2rem",
  },
  position: "relative",
  "&>a": {
    position: "absolute",
    bottom: {
      base: "-5rem",
      md: "1rem",
      lg: "10rem",
      xl: "-2.5rem",
    },
    zIndex: "1",
  },
};

export const headingStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: {
    base: "1.1rem",
    md: "1.5rem",
  },
  textTransform: "uppercase",
  position: "absolute",
  top: {
    base: "0.5rem",
    xl: "2rem",
  },
  left: "50%",
  transform: "translateX(-50%)",
};

export const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const textStyle = {
  fontSize: {
    base: "1.1rem",
    xl: "1.2rem",
  },
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  bottom: {
    base: "-1rem",
    md: "1rem",
    xl: "2rem",
  },
  padding: {
    base: "0 3rem",
    md: "0 5rem",
  },
};
