import { Link } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { linkStyle } from "../Link";

const MotionLink = motion(Link);

const btnVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      type: "tween",
    },
  },
};

const HireMeBtn = () => {
  return (
    <MotionLink
      sx={linkStyle}
      variants={btnVariants}
      initial="hidden"
      animate="visible"
    >
      Hire Me
      <FaHandshake style={{ fontSize: "1.5rem" }} />
    </MotionLink>
  );
};

export default HireMeBtn;
