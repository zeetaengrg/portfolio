import { motion } from "framer-motion";
import { Link, Button } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { btnStyle } from "../Btn";

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

  const linkStyle = {
    _hover: {
      "&::after": { content: "none" },
      color: "#a5abbd",
    },
    textTransform: "none",
    _focus: { outline: "none" },
  };

  return (
    <Link sx={linkStyle} href="/" position="relative">
      <Button
        as={motion.btn}
        variants={btnVariant}
        initial="start"
        animate="end"
        m={{ base: "1rem 0", md: "1rem 0rem", lg: "0rem" }}
        sx={btnStyle}
        rightIcon={<RiArrowGoBackLine />}
      >
        Go Back
      </Button>
    </Link>
  );
};

export default GoBackBtn;
