export const commonVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const flexStyle = {
  margin: {
    base: "1.5rem 2rem",
    md: "2rem 3rem",
    lg: "3rem 5rem",
  },
  gap: {
    base: "1.5rem",
    md: "2rem",
  },
  justifyContent: "center",
};

export const imgBoxStyle = {
  width: {
    base: "90%",
    md: "85%",
    lg: "65%",
  },
  height: {
    base: "8rem",
    md: "20rem",
    lg: "23.14rem",
  },
  margin: {
    base: "0 auto",
  },
  position: "relative",
  border: {
    base: "none",
    md: "1px solid rgba(165, 171, 189, 0.5)",
  },
  borderRadius: "0.5rem",
  transition: "border 0.25s linear",
};

export const imgStyle = {
  objectFit: {
    base: "cover",
  },
  width: {
    base: "90%",
    md: "100%",
    lg: "100%",
  },
  height: {
    base: "8rem",
    md: "20rem",
    lg: "23rem",
  },
  position: {
    base: "initial",
    md: "absolute",
  },
  margin: {
    base: "0 auto",
  },
  top: {
    base: {
      margin: "0 auto",
    },
    md: "1rem",
  },
  left: {
    base: {
      margin: "0 auto",
    },
    md: "1rem",
  },
  borderRadius: "0.5rem",
  transition: "all 0.25s ease-in-out",
  boxShadow: "0 0.5rem 1.5rem 1rem rgba(0,0,0,0.5)",
  _hover: {
    md: {
      transform: "translate(-1rem, -1rem)",
    },
  },
};

export const gridStyle = {
  display: "grid",
  columnGap: {
    base: "2rem",
    md: "9rem",
    lg: "1.5rem",
  },
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: { base: "0rem", md: "0rem 5rem", lg: "0rem" },
};

export const techTextStyle = {
  color: "#ecb7d4",
  marginTop: "1rem",
  textTransform: "uppercase",
  textAlign: {
    base: "center",
    md: "center",
    lg: "left",
  },
};

export const techTextStyleRight = {
  ...techTextStyle,
  textAlign: {
    base: "center",
    md: "center",
    lg: "right",
  },
};

export const techFlexStyle = {
  flexWrap: "wrap",
  marginTop: "0.5rem",
  gap: "1rem",
  justifyContent: { base: "center", lg: "left" },
};

export const techFlexStyleRight = {
  ...techFlexStyle,
  justifyContent: {
    base: "center",
    md: "left",
    lg: "right",
  },
};

export const linkContainer = {
  display: "flex",
  gap: "1rem",
};

export const linkContainerRight = {
  ...linkContainer,
  justifyContent: {
    base: "center",
    md: "flex-start",
    lg: "flex-end",
  },
};

export const linkToProjects = {
  marginTop: "0.5rem",
  backgroundColor: "#141D38",
  borderRadius: "5rem",
  display: "grid",
  placeItems: "center",
  padding: "0.5rem",
  fontSize: "1.5rem",
  transition: "all 0.25s ease-in-out",
  _hover: {
    "&::after": { content: "none" },
    color: "#fff",
    transform: "scale(1.1)",
  },
  _focus: { boxShadow: "none" },
  boxShadow:
    "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};
