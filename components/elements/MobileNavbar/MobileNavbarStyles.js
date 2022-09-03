export const menuStyle = {
  position: "absolute",
  right: "1rem",
  // top: "1.1rem",
  transform: "translateY(-50%)",
  background: "transparent",
  fontSize: "3rem",
  _hover: {
    backgroundColor: "none",
    color: "white",
  },
  _active: {
    backgroundColor: "none",
    opacity: "0",
  },
  _focus: { outline: "none" },
  opacity: {
    base: "1",
    md: "0",
    lg: "0",
  },
  transition: "all 0.5s ease-in-out",
};
