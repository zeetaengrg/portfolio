import { useState, useEffect } from "react";
import { Box, Button, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { btn } from "./ScrollBackToTopBtnStyles";

const animationKeyframes = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; }
`;

const animation = `${animationKeyframes} 0.35s ease-in-out`;

const ScrollBackToTopBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleVisibleBtn = () => {
    setScrollPosition(scrollY);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleBtn);
    return () => window.removeEventListener("scroll", handleVisibleBtn);
  }, []);

  return (
    <Box>
      {scrollPosition > 500 && (
        <Button
          as={motion.button}
          animation={animation}
          sx={btn}
          onClick={handleScrollToTop}
        >
          <FaArrowAltCircleUp />
        </Button>
      )}
    </Box>
  );
};

export default ScrollBackToTopBtn;
