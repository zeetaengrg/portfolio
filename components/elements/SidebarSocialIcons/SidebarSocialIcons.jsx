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
import {
  commonVariants,
  iconStyle,
  socialLinkStyle,
} from "./SidebarSocialIconsStyles";

const MotionBox = motion(Box);

const SidebarSocialIcons = () => {
  return (
    <MotionBox
      as="section"
      bg="#141D38"
      height="20rem"
      width="4rem"
      position="fixed"
      top="25%"
      borderRadius="0rem 2rem 2rem 0rem"
      display="grid"
      placeItems="center"
      zIndex="15"
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.5,
        duration: 0.5,
        type: "tween",
      }}
    >
      <Flex gap="1.5rem" direction="column">
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
    </MotionBox>
  );
};

export default SidebarSocialIcons;
