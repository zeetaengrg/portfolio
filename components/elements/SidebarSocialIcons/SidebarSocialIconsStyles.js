import {
  FiCodepen,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export const links = [
  {
    id: 1,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/zeetaengrg/",
    icon: <FiLinkedin />,
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/zeetaengrg/",
    icon: <FiGithub />,
  },
  {
    id: 3,
    title: "Facebook",
    url: "https://www.facebook.com/zeetaen/",
    icon: <FiFacebook />,
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://www.instagram.com/zeetaen/",
    icon: <FiInstagram />,
  },
  {
    id: 5,
    title: "Twitter",
    url: "https://twitter.com/zeetaen/",
    icon: <FiTwitter />,
  },
  {
    id: 6,
    title: "CodePen",
    url: "https://codepen.io/zeetaen/",
    icon: <FiCodepen />,
  },
];

export const commonVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const boxVariants = {
  start: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  end: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const arrowContainerStyle = {
  bg: "#141D38",
  height: "2rem",
  width: "2.5rem",
  borderRadius: "0rem 2rem 2rem 0rem",
  margin: "auto 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  position: "relative",
  _before: {
    content: '""',
    position: "absolute",
    bg: "transparent",
    height: "1rem",
    width: "1rem",
    top: "-0.95rem",
    left: "0rem",
    borderBottomLeftRadius: "1rem",
    boxShadow: "-4px 4px 0 0.3px #141D38",
  },
  _after: {
    content: '""',
    position: "absolute",
    bg: "transparent",
    height: "1rem",
    width: "1rem",
    top: "2rem",
    left: "0rem",
    borderTopLeftRadius: "1rem",
    boxShadow: "-3px -4px 0 3px #141D38",
  },
};

export const arrowVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const socialLinkStyle = {
  fontSize: "1.5rem",
  cursor: "pointer",
  _focus: { boxShadow: "none" },
  _hover: {
    color: "#fff",
    "&::after": { content: "none" },
  },
  transition: "all 0.25s linear",
};
