import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

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

const SubHeader = ({ subHeading }) => {
  return (
    <MotionHeading
      as="h2"
      fontWeight="bold"
      fontSize="1.3rem"
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
      viewport={{ once: true }}
      display="flex"
      justifyContent="center"
    >
      {subHeading}
    </MotionHeading>
  );
};

export default SubHeader;

SubHeader.propTypes = {
  subHeading: PropTypes.string.isRequired,
};
