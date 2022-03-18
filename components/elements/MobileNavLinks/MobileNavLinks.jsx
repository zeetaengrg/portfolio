import { Box, Link, Spacer, Wrap } from "@chakra-ui/react";
import { boxStyle, mobileLinkStyle } from "./MobileNavLinksStyles";
import {
  MdAccountCircle,
  MdContactPhone,
  MdDesignServices,
} from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

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
      type: "spring",
      stiffness: 100,
      staggerChildren: 0.3,
    }
  }
}

const linkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  }
}

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
    }
  ]

  return (
    <MotionBox
      sx={boxStyle}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      {linkItem.map((link) => {
        return (
          <MotionLink
            key={link.id}
            sx={mobileLinkStyle}
            href={`#${link.name.replace(/\s+/g, "").toLowerCase()}`}
            onClick={() => isMobile && closeMobileMenu()}
            variants={linkVariants}
          >
            <Wrap>
              {link.icon}
              <Spacer />
              {link.name}
            </Wrap>
          </MotionLink>
        );
      })}
    </MotionBox>
  );
};

export default MobileNavLinks;