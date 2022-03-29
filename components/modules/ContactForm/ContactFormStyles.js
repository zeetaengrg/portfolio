import { btnStyle } from "../../elements/Btn/Btn";

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

export const inputStyle = {
  width: { base: "20rem", md: "22rem" },
  bgColor: "#141E39",
  color: "#a5abbd",
  border: "none",
  boxShadow:
    "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};

export const btn = {
  ...btnStyle,
  fontSize: "1.1rem",
  width: { base: "20rem", md: "22rem" },
  textTransform: "uppercase",
};
