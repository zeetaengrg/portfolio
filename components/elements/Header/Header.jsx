import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";

const MotionHeading = motion(Heading);

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

const Header = ({ heading, id }) => {
  const headingStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    bgGradient: "linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)",
    bgClip: "text",
    fontSize: { base: "3rem", md: "4rem" },
    fontWeight: "900",
    fontFamily: "inherit",
    marginTop: { base: "2rem", md: "0rem" },
  };

  return (
    <MotionHeading
      as="h1"
      id={id}
      sx={headingStyle}
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
      viewport={{ once: true }}
    >
      {heading}
    </MotionHeading>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
