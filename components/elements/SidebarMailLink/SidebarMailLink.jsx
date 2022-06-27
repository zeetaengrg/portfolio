import { motion } from "framer-motion";
import { Box, Link, Text } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";

const MotionBox = motion(Box);

const commonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.4,
      duration: 0.5,
    },
  },
};

const SidebarMailLink = () => {
  const mailStyle = {
    transition: "all 0.3s ease",
    _hover: {
      "&::after": { content: "none" },
      transform: "scale(1.1)",
    },
    _focus: { outline: "none" },
  };

  const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    margin: "auto 0",
  };

  const textStyle = {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textRendering: "optimizeLegibility",
    WebkitTextOrientation: "mixed",
    WebkitTextOrientation: "vertical-rl",
    MozTextOrientation: "mixed",
    MozTextOrientation: "vertical-rl",
    msTextOrientation: "mixed",
    msTextOrientation: "vertical-rl",
    textTransform: "lowercase",
    userSelect: "none",
  };

  return (
    <MotionBox
      as="section"
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      display="flex"
    >
      <Box
        as="figure"
        m="auto 0"
        bg="#141D38"
        p="0.5rem"
        display="grid"
        placeItems="center"
        borderRadius="1rem 0rem 0rem 1rem"
        position="relative"
        boxShadow="0 0.5rem 1rem rgba(0, 0, 0, 0.3)"
        _before={{
          content: '""',
          position: "absolute",
          bg: "transparent",
          height: "1rem",
          width: "1rem",
          top: "-0.9rem",
          right: "-0.05rem",
          borderBottomRightRadius: "1rem",
          boxShadow: "5px 5px 0 0.4px #141D38",
        }}
        _after={{
          content: '""',
          position: "absolute",
          bg: "transparent",
          height: "1rem",
          width: "1rem",
          top: "2.45rem",
          right: "-0.05rem",
          borderTopRightRadius: "1rem",
          boxShadow: "2px -4px 0 0.4px #141D38",
        }}
      >
        <Link href="mailto:zeetaen.gurung@gmail.com" sx={mailStyle}>
          <FiMail style={iconStyle} />
        </Link>
      </Box>
      <Box
        as="article"
        bg="#141D38"
        p="1.5rem 0.2rem"
        display="grid"
        placeItems="center"
        borderRadius="2rem 0rem 0rem 2rem"
      >
        <Text style={textStyle}>zeetaen.gurung@gmail.com</Text>
      </Box>
    </MotionBox>
  );
};

export default SidebarMailLink;
