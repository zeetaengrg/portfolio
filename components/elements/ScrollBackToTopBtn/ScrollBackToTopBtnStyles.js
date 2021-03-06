import { btnStyle } from "../Btn/Btn";

export const btn = {
  ...btnStyle,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
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
