import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { FaProjectDiagram } from "react-icons/fa";
import {
  MdAccountCircle,
  MdContactPhone,
  MdDesignServices,
} from "react-icons/md";
import {
  boxVariants,
  linkVariants,
  boxStyle,
  mobileLinkStyle,
} from "./MobileNavLinksStyles";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const MobileNavLinks = ({ isMobile, closeMobileMenu }) => {
  const linkItem = [
    {
      id: 1,
      name: "About Me",
      icon: <MdAccountCircle aria-label="Account Icon" />,
    },
    {
      id: 2,
      name: "Skills",
      icon: <MdDesignServices aria-label="Design Services Icon" />,
    },
    {
      id: 3,
      name: "Projects",
      icon: <FaProjectDiagram aria-label="Project Diagram Icon" />,
    },
    {
      id: 4,
      name: "Contacts",
      icon: <MdContactPhone aria-label="Contact Phone Icon" />,
    },
  ];

  return (
    <MotionBox
      as="nav"
      sx={boxStyle}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      aria-label="Mobile navigation links"
    >
      <Box
        as="figure"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        zIndex="0"
        opacity="0.1"
      >
        <Image src="/images/logo.svg" alt="Logo" height={325} width={325} />
      </Box>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexDirection="column"
        gap="1.5rem"
      >
        {linkItem.map((link) => (
          <ListItem key={link.id}>
            <MotionLink
              sx={mobileLinkStyle}
              href={`#${link.name.replace(/\s+/g, "").toLowerCase()}`}
              onClick={() => isMobile && closeMobileMenu()}
              variants={linkVariants}
              aria-label={`Link to ${link.name}`}
            >
              {link.icon}
              {link.name}
            </MotionLink>
          </ListItem>
        ))}
      </UnorderedList>
    </MotionBox>
  );
};

export default MobileNavLinks;
