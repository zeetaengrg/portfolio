import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { linkStyle } from "../Link";

const MotionLink = motion(Link);

const GoBackBtn = () => {
  const btnVariant = {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <MotionLink
      sx={linkStyle}
      href="/"
      position="relative"
      variants={btnVariant}
      initial="start"
      animate="end"
      m={{ base: "1rem 0", md: "1rem 0rem", lg: "0rem" }}
    >
      Go Back
      <RiArrowGoBackLine />
    </MotionLink>
  );
};

export default GoBackBtn;
