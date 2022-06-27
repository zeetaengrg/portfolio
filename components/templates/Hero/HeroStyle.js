export const bgImgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.3,
    transition: {
      delay: 0.6,
      duration: 0.8,
    },
  },
};

export const profileImgVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

export const parentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: "1",
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const boxStyle = {
  position: "absolute",
  display: {
    base: "none",
    md: "block",
  },

  "&>span": {
    top: {
      base: 0,
      lg: "-8rem",
      xl: "0rem",
    },
  },
};

export const flexStyle = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: {
    base: "1rem",
    md: "2rem",
  },
  flexDirection: {
    base: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
};

export const linkStyle = {
  _hover: {
    "&::after": {
      content: "none",
    },
  },
};
