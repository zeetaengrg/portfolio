import { btnStyle } from '../Btn/Btn';

export const btn = {
  ...btnStyle,
  '&:hover': {
    ...btnStyle._hover,
    transform: "scale(1.1)"
  },
  borderRadius: "50%",
  fontSize: "1.7rem",
  padding: "0.5rem 0.3rem",
  position: "fixed",
  zIndex: "1000",
  right: {
    base: "1rem",
    md: "2rem",
  },
  bottom: {
    base: "1rem",
    md: "2rem",
  },
}