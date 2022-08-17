export const boxVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const linkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const boxStyle = {
  position: "absolute",
  top: "4.5rem",
  right: "0",
  zIndex: "999",
  background: "#141E39",
  color: "#a5abbd",
  fontSize: "1.5rem",
  width: "100vw",
  height: "91vh",
  display: {
    base: "flex",
    md: "none",
    lg: "none",
  },
  justifyContent: "center",
  alignItems: "center",
};

export const mobileLinkStyle = {
  _hover: {
    "&::after": { content: "none" },
    color: "white",
  },
  _focus: { boxShadow: "none" },
  fontSize: "1.5rem",
  margin: "2rem auto",
  display: {
    base: "flex",
    md: "none",
    lg: "none",
  },
  alignItems: "center",
  gap: "1rem",
  transition: "all 0.25s ease-in-out",
};
