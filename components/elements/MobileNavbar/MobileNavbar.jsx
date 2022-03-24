import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { menuStyle } from "./MobileNavbarStyles";
import MobileNavLinks from "../MobileNavLinks/MobileNavLinks";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (
    <Box {...menuStyle}>
      <CgMenuRound onClick={() => setIsOpen(!isOpen)} />
    </Box>
  );

  const closeMenu = (
    <Box {...menuStyle}>
      <CgCloseO onClick={() => setIsOpen(!isOpen)} />
    </Box>
  );

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <Box>
      {isOpen ? closeMenu : openMenu}
      {isOpen && (
        <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </Box>
  );
};

export default MobileNavbar;
