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

export const specialLinkStyle = {
  _hover: {
    "&::after": { content: "none" },
    fontSize: "1rem",
  },
  _focus: { outline: "none" },
  _active: { outline: "none" },
  textTransform: "none",
  textDecoration: "underline",
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: "normal",
  color: "#3892f9",
};
