export const commonVariants = {
  hidden: {
    opacity: 0,
    x: "-20",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const iconStyle = {
  fontSize: "1.5rem",
  cursor: "pointer",
};

export const socialLinkStyle = {
  _focus: { boxShadow: "none" },
  _hover: {
    transform: "scale(1.1)",
    color: "#fff",
    "&::after": { content: "none" },
  },
  transition: "all 0.25s linear",
};
