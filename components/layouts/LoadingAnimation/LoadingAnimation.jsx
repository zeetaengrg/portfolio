import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { boxVariants, ballVariants, ballStyle } from "./LoadingAnimationStyles";

const MotionBox = motion(Box);

const LoadingAnimation = () => {
  return (
    <MotionBox
      as="section"
      variants={boxVariants}
      initial="start"
      animate="end"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox as="figure" sx={ballStyle} variants={ballVariants}></MotionBox>
    </MotionBox>
  );
};

export default LoadingAnimation;
