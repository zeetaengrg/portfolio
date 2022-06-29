export const commonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.2,
      duration: 0.5,
    },
  },
};

export const iconBoxStyle = {
  m: "auto 0",
  bg: "#141D38",
  p: "0.5rem",
  display: "grid",
  placeItems: "center",
  borderRadius: "1rem 0rem 0rem 1rem",
  position: "relative",
  boxShadow: "-0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3)",
  _before: {
    content: '""',
    position: "absolute",
    bg: "transparent",
    height: "1rem",
    width: "1rem",
    top: "-0.9rem",
    right: "-0.05rem",
    borderBottomRightRadius: "1rem",
    boxShadow: "5px 5px 0 0.4px #141D38",
  },
  _after: {
    content: '""',
    position: "absolute",
    bg: "transparent",
    height: "1rem",
    width: "1rem",
    top: "2.45rem",
    right: "-0.05rem",
    borderTopRightRadius: "1rem",
    boxShadow: "2px -4px 0 0.4px #141D38",
  },
};

export const mailStyle = {
  transition: "all 0.3s ease",
  _hover: {
    "&::after": { content: "none" },
    transform: "scale(1.1)",
  },
  _focus: { outline: "none" },
};

export const iconStyle = {
  fontSize: "1.5rem",
  cursor: "pointer",
  margin: "auto 0",
};

export const textStyle = {
  writingMode: "vertical-rl",
  textOrientation: "mixed",
  textRendering: "optimizeLegibility",
  WebkitTextOrientation: "mixed",
  WebkitTextOrientation: "vertical-rl",
  MozTextOrientation: "mixed",
  MozTextOrientation: "vertical-rl",
  msTextOrientation: "mixed",
  msTextOrientation: "vertical-rl",
  textTransform: "lowercase",
  userSelect: "none",
};
