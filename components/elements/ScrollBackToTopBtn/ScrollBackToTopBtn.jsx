import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { btn } from './ScrollBackToTopBtnStyles';

const ScrollBackToTopBtn = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleVisibleTopBtn = () => {
    setScrollPosition(window.pageYOffset);
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleTopBtn);
    return () => window.removeEventListener('scroll', handleVisibleTopBtn);
  }, [])

  return (
      <Box>
        {scrollPosition > 500 && (
          <Button sx={btn} onClick={handleScrollToTop}>
            <FaArrowAltCircleUp />
          </Button>
        )}
      </Box>
  )
}

export default ScrollBackToTopBtn;