import { motion } from "framer-motion";
import { Box, Flex, Link } from "@chakra-ui/react";
import {
  FiCodepen,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import {
  arrowVariants,
  boxVariants,
  commonVariants,
  iconStyle,
  socialLinkStyle,
} from "./SidebarSocialIconsStyles";

const MotionBox = motion(Box);
const MotionArrow = motion(Box);

const SidebarSocialIcons = () => {
  return (
    <MotionBox
      as="aside"
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1.1,
        duration: 1,
        type: "tween",
      }}
    >
      <Flex>
        <Flex
          gap="1.5rem"
          direction="column"
          bg="#141D38"
          p="1.1rem 0.7rem"
          borderRadius="0rem 2rem 2rem 0rem"
          boxShadow="0 0.5rem 1rem rgba(0, 0, 0, 0.2)"
          display="grid"
          placeItems="center"
        >
          <Link
            href="https://www.linkedin.com/in/zeetaengrg/"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiLinkedin style={iconStyle} />
          </Link>
          <Link
            href="https://github.com/zeetaengrg"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiGithub style={iconStyle} />
          </Link>
          <Link
            href="https://www.facebook.com/zeetaen/"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiFacebook style={iconStyle} />
          </Link>
          <Link
            href="https://www.instagram.com/zeetaen/"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiInstagram style={iconStyle} />
          </Link>
          <Link
            href="https://twitter.com/zeetaen"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiTwitter style={iconStyle} />
          </Link>
          <Link
            href="https://codepen.io/zeetaen"
            sx={socialLinkStyle}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FiCodepen style={iconStyle} />
          </Link>
        </Flex>
        <MotionBox
          variants={boxVariants}
          initial="start"
          animate="end"
          margin="auto 0"
          display="flex"
          cursor="pointer"
          transition="all 0.3s ease"
        >
          <MotionArrow variants={arrowVariants} position="absolute">
            <MdOutlineDoubleArrow fontSize="1.5rem" />
          </MotionArrow>
          <MotionArrow
            variants={arrowVariants}
            position="absolute"
            left="3.75rem"
          >
            <MdOutlineDoubleArrow fontSize="1.5rem" />
          </MotionArrow>
        </MotionBox>
      </Flex>
    </MotionBox>
  );
};

export default SidebarSocialIcons;
