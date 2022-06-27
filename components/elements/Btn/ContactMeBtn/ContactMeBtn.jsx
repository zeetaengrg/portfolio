import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";
import { linkStyle } from "../Link";

const MotionLink = motion(Link);

const commonVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ContactMeBtn = () => {
  return (
    <NextLink href="#contacts" passHref>
      <MotionLink
        sx={linkStyle}
        variants={commonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: "tween",
          stiffness: 110,
        }}
      >
        <Text>Contact Me</Text>
        <IoMdContact style={{ fontSize: "1.5rem" }} />
      </MotionLink>
    </NextLink>
  );
};

export default ContactMeBtn;
