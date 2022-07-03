import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { btnStyle } from "../Btn";

const MotionBtn = motion(Button);

const btnVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.7,
      duration: 0.6,
    },
  },
};

const ResumeBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const btn = {
    ...btnStyle,
    justifyContent: {
      base: "center",
      md: "start",
    },
  };

  return (
    <MotionBtn
      size="lg"
      sx={btn}
      rightIcon={<FaCloudDownloadAlt style={{ fontSize: "1.5rem" }} />}
      variants={btnVariants}
      initial="hidden"
      animate="visible"
      isLoading={isLoading}
      loadingText="Downloading"
      spinnerPlacement="end"
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2500);
      }}
      aria-label="Downloads My Resume in a new window"
    >
      Resume
    </MotionBtn>
  );
};

export default ResumeBtn;
