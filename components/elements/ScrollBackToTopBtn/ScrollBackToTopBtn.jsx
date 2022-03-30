import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { btn } from "./ScrollBackToTopBtnStyles";

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
        <Button sx={btn} onClick={handleScrollToTop}>
          <FaArrowAltCircleUp />
        </Button>
      )}
    </Box>
  );
};

export default ScrollBackToTopBtn;
