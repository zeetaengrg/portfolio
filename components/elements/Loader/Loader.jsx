import { Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { boxVariants, ballVariants, ballStyle } from "./LoaderStyles";

const MotionBox = motion(Box);

const Loader = () => {
  return (
    <MotionBox
      variants={boxVariants}
      initial="start"
      animate="end"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
      <MotionBox sx={ballStyle} variants={ballVariants}></MotionBox>
    </MotionBox>
  );
};

export default Loader;
