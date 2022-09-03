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
  top: "5rem",
  right: "1.25rem",
  zIndex: "999",
  borderRadius: "0.5rem",
  background: "#141E39",
  color: "#a5abbd",
  fontSize: "1.5rem",
  width: "90vw",
  height: "87vh",
  display: {
    base: "flex",
    md: "none",
    lg: "none",
  },
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 0.75rem rgb(0 0 0 / 0.5)",
};

export const mobileLinkStyle = {
  _hover: {
    "&::after": { content: "none" },
    color: "white",
  },
  _focus: { boxShadow: "none" },
  fontSize: "1.2rem",
  margin: "2rem auto",
  display: {
    base: "flex",
    md: "none",
    lg: "none",
  },
  alignItems: "center",
  gap: "1rem",
  textTransform: "uppercase",
  fontWeight: "700",
  transition: "all 0.25s ease-in-out",
};
