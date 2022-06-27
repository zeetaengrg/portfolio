import NextLink from "next/link";
import { motion } from "framer-motion";
import { Link, Text } from "@chakra-ui/react";
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
        delay: 1.1,
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <NextLink href="/" passHref>
      <MotionLink
        sx={linkStyle}
        position="relative"
        variants={btnVariant}
        initial="start"
        animate="end"
        m={{ base: "1rem 0", md: "1rem 0rem", lg: "0rem" }}
      >
        <Text>Go Back</Text>
        <RiArrowGoBackLine />
      </MotionLink>
    </NextLink>
  );
};

export default GoBackBtn;
