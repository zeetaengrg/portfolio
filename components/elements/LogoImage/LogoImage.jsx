import NextLink from "next/link";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 1,
      type: "spring",
      stiffness: 110,
    },
  },
};

const LogoImage = () => {
  return (
    <NextLink href="/" passHref>
      <MotionImage
        src="/images/logo.svg"
        alt="Logo"
        width="60px"
        height="45px"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        cursor="pointer"
      />
    </NextLink>
  );
};

export default LogoImage;
