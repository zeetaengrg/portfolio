import { Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionDivider = motion(Divider);

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

const LineDivider = ({ width }) => {
  return (
    <MotionDivider
      width={width}
      m="0 auto 0.5rem"
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      viewport={{ once: true }}
    />
  );
};

export default LineDivider;
