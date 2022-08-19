export const linkItem = ["About Me", "Skills", "Projects", "Contacts"];

export const linkVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export const linkStyle = {
  textTransform: "uppercase",
  _hover: {
    "&::after": {
      transform: "scaleX(1)",
      transformOrigin: "center",
    },
    textDecoration: "none",
    color: "#fff",
  },
  fontWeight: "700",
  position: "relative",
  fontSize: {
    base: "0.72rem",
    md: "0.9rem",
  },
  _focus: { outline: "none" },
  display: {
    base: "none",
    md: "block",
    lg: "block",
  },
  "&::after": {
    content: '" "',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "1px",
    background: "white",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.2s ease-in-out",
  },
};
