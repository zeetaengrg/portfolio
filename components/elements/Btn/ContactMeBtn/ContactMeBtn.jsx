import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
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
          delay: 0.5,
          duration: 0.5,
        }}
        aria-label="Link To Contact Me section"
      >
        <Text>Contact Me</Text>
        <MdAccountCircle style={{ fontSize: "1.5rem" }} aria-label="Contact Icon" />
      </MotionLink>
    </NextLink>
  );
};

export default ContactMeBtn;
