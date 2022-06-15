import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { menuStyle } from "./MobileNavbarStyles";
import MobileNavLinks from "../MobileNavLinks/MobileNavLinks";

const MotionBox = motion(Box);

const menuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 5,
      type: "spring",
      stiffness: 110,
    },
  },
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (
    <Box as="figure" {...menuStyle}>
      <CgMenuRound onClick={() => setIsOpen(!isOpen)} />
    </Box>
  );

  const closeMenu = (
    <Box as="figure" {...menuStyle}>
      <CgCloseO onClick={() => setIsOpen(!isOpen)} />
    </Box>
  );

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <MotionBox
      as="aside"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
    >
      {isOpen ? closeMenu : openMenu}
      {isOpen && (
        <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </MotionBox>
  );
};

export default MobileNavbar;
