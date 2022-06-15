import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { FaProjectDiagram } from "react-icons/fa";
import {
  MdAccountCircle,
  MdContactPhone,
  MdDesignServices,
} from "react-icons/md";
import { boxStyle, mobileLinkStyle } from "./MobileNavLinksStyles";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const boxVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 0.97,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      staggerChildren: 0.3,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const MobileNavLinks = ({ isMobile, closeMobileMenu }) => {
  const linkItem = [
    {
      id: 1,
      name: "About Me",
      icon: <MdAccountCircle />,
    },
    {
      id: 2,
      name: "Skills",
      icon: <MdDesignServices />,
    },
    {
      id: 3,
      name: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      id: 4,
      name: "Contacts",
      icon: <MdContactPhone />,
    },
  ];

  return (
    <MotionBox
      as="nav"
      sx={boxStyle}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexDirection="column"
        gap="3rem"
      >
        {linkItem.map((link) => (
          <ListItem key={link.id}>
            <MotionLink
              sx={mobileLinkStyle}
              href={`#${link.name.replace(/\s+/g, "").toLowerCase()}`}
              onClick={() => isMobile && closeMobileMenu()}
              variants={linkVariants}
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
