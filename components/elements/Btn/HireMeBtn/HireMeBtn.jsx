import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
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
      duration: 0.5,
      type: "tween",
    },
  },
};

const HireMeBtn = () => {
  return (
    <NextLink href="#contacts" passHref>
      <MotionLink
        sx={linkStyle}
        variants={btnVariants}
        initial="hidden"
        animate="visible"
        href="#contacts"
      >
        <Text>Hire Me</Text>
        <FaHandshake style={{ fontSize: "1.5rem" }} />
      </MotionLink>
    </NextLink>
  );
};

export default HireMeBtn;
