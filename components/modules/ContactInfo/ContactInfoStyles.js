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

export const links = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zeetaengrg/",
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/zeetaengrg",
  },
  {
    id: 3,
    name: "Codepen",
    url: "https://codepen.io/zeetaen",
  },
];

export const iconStyle = {
  fontSize: "2rem",
};

export const mailStyle = {
  _hover: {
    "&::after": { content: "none" },
    textDecoration: "none",
    color: "#a5abbd",
  },
};

export const textStyle = {
  fontSize: "1.1rem",
  textTransform: "none",
};

export const flexStyle = {
  gap: "1rem",
  alignItems: "center",
};

export const socialIconStyle = {
  fontSize: "2rem",
  cursor: "pointer",
  transition: "all 0.25s linear",
  _hover: {
    color: "white",
    transform: "translateY(5px)",
  },
};
