import { motion } from "framer-motion";
import { Center, Heading } from "@chakra-ui/react";

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
    <Center as="section">
      <MotionHeading
        as="h2"
        fontWeight="bold"
        fontSize="1.1rem"
        variants={commonVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
      >
        {subHeading}
      </MotionHeading>
    </Center>
  );
};

export default SubHeader;
