import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LogoImage, MobileNavbar } from "@components/elements";
import { linkVariants, linkItem, linkStyle } from "./NavbarStyles";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <Flex
      p={{ base: "0.8rem 2rem", md: "1.5rem 4rem", lg: "1.7rem 6rem" }}
      position="relative"
      zIndex="999"
    >
      <Box>
        <LogoImage />
      </Box>
      <Spacer />
      <Flex
        gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }}
        alignItems="center"
      >
        {linkItem.map((item, i) => (
          <MotionLink
            key={item}
            sx={linkStyle}
            href={`/#${item.replace(/\s+/g, "").toLowerCase()}`}
            variants={linkVariants}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            {item}
          </MotionLink>
        ))}
      </Flex>
      <MobileNavbar />
    </Flex>
  );
};

export default Navbar;
