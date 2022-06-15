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
    x: "-20",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const boxVariants = {
  start: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const arrowVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.8,
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
