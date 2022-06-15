import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { LogoImage, MobileNavbar } from "@components/elements";
import { linkVariants, linkItem, linkStyle } from "./NavbarStyles";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={{ base: "0.8rem 2rem", md: "1.5rem 4rem", lg: "1.7rem 6rem" }}
      position="relative"
      zIndex="999"
    >
      <Box as="figure">
        <LogoImage />
      </Box>
      <Box as="nav" display="flex" alignItems="center">
        <UnorderedList listStyleType="none" display="flex" gap="3rem">
          {linkItem.map((item, i) => (
            <ListItem key={item}>
              <MotionLink
                sx={linkStyle}
                href={`/#${item.replace(/\s+/g, "").toLowerCase()}`}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                {item}
              </MotionLink>
            </ListItem>
          ))}
        </UnorderedList>
        <MobileNavbar />
      </Box>
    </Box>
  );
};

export default Navbar;
