import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { linkStyle } from "../Link";

const MotionLink = motion(Link);

const btnVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
      duration: 0.6,
    },
  },
};

const HireMeBtn = () => {
  return (
    <NextLink href="#contacts" passHref>
      <MotionLink
        sx={linkStyle}
        href="#contacts"
        aria-label="Link To Contact Me Section"
        variants={btnVariants}
        initial="hidden"
        animate="visible"
      >
        <Text>Hire Me</Text>
        <FaHandshake
          style={{ fontSize: "1.5rem" }}
          aria-label="Handshake Icon"
        />
      </MotionLink>
    </NextLink>
  );
};

export default HireMeBtn;
