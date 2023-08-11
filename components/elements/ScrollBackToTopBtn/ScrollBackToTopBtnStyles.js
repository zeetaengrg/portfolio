import { btnStyle } from "../Btn/BtnStyle";

export const btn = {
  ...btnStyle,
  transition: "all 0.3s ease",
  _hover: {
    transform: "scale(1.1)",
    bg: "#a5abbd",
    color: "#0b111e",
  },
  borderRadius: "50%",
  fontSize: "1.7rem",
  padding: "0.5rem 0.3rem",
  position: "fixed",
  zIndex: "1000",
  right: {
    base: "1rem",
  },
  bottom: {
    base: "1rem",
  },
};
