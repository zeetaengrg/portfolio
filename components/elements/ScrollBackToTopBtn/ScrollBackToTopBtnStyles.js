import { btnStyle } from '../Btn/Btn';

export const btn = {
  ...btnStyle,
  '&:hover': {
    ...btnStyle._hover,
    transform: "scale(1.1)"
  },
  fontSize: "1.7rem",
  padding: "0 0.5rem",
  position: "fixed",
  zIndex: "999",
  right: {
    base: "1rem",
    md: "2rem",
  },
  bottom: {
    base: "1rem",
    md: "2rem",
  },
}