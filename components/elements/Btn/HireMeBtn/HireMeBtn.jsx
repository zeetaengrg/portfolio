import { Button } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { btnStyle } from "../Btn";

const MotionBtn = motion(Button);

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
      duration: 1,
      type: "spring",
      stiffness: 110,
    },
  },
};

const HireMeBtn = () => {
  return (
    <MotionBtn
      size="lg"
      sx={btnStyle}
      rightIcon={<FaHandshake style={{ fontSize: "1.5rem" }} />}
      variants={btnVariants}
      initial="hidden"
      animate="visible"
    >
      Hire Me
    </MotionBtn>
  );
};

export default HireMeBtn;
