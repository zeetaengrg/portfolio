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

export const linkStyle = {
  _hover: {
    "&::after": { content: "none" },
  },
  _focus: { outline: "none" },
  _active: { outline: "none" },
  textTransform: "none",
  fontWeight: "normal",
  fontSize: "1rem",
};

export const specialLinkStyle = {
  _hover: {
    "&::after": { content: "none" },
    fontSize: "1rem",
  },
  _focus: { outline: "none" },
  _active: { outline: "none" },
  textTransform: "none",
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: "normal",
  color: "#3892f9",
};
