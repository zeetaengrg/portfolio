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
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: {
    base: "1rem",
    md: "4rem",
    xl: "2rem",
  },
  margin: {
    base: "0",
    md: "0",
    lg: "0",
    xl: "1rem auto 3rem",
  },
  height: {
    base: "68.5vh",
    md: "79vh",
    lg: "81vh",
    xl: "55vh",
  },
};

export const headingStyle = {
  color: "#0B111E",
  fontWeight: "700",
  textTransform: "uppercase",
};

export const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#384765",
  width: {
    base: "80%",
    md: "60%",
    lg: "55%",
  },
  padding: {
    base: "0.5rem",
    md: "1rem",
  },
  borderRadius: "0.5rem",
};

export const textStyle = {
  fontSize: "1.2rem",
  color: "#fff",
  margin: "1rem",
  textAlign: "center",
};
