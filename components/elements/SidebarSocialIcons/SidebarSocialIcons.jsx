import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import {
  arrowContainerStyle,
  arrowVariants,
  boxVariants,
  commonVariants,
  links,
  socialLinkStyle,
} from "./SidebarSocialIconsStyles";

const MotionBox = motion(Box);

const SidebarSocialIcons = () => {
  return (
    <MotionBox
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 2.4,
        duration: 0.5,
      }}
    >
      <Box display="flex">
        <UnorderedList
          listStyleType="none"
          gap="1.5rem"
          direction="column"
          bg="#141D38"
          p="1.2rem 0.76rem"
          borderRadius="0rem 2rem 2rem 0rem"
          boxShadow="0 0.5rem 1rem rgba(0, 0, 0, 0.3)"
          display="grid"
          placeItems="center"
        >
          {links.map((link) => (
            <ListItem
              key={link.id}
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Link
                href={link.url}
                sx={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Link to ${link.title} page`}
              >
                {link.icon}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box
          as={motion.div}
          sx={arrowContainerStyle}
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          <Box
            as={motion.figure}
            variants={arrowVariants}
            position="absolute"
            left="0.15rem"
          >
            <MdArrowForwardIos
              fontSize="1.1rem"
              color="#fff"
              aria-label="Forward Arrow Icon"
            />
          </Box>
          <Box
            as={motion.figure}
            variants={arrowVariants}
            position="absolute"
            left="0.65rem"
          >
            <MdArrowForwardIos
              fontSize="1.1rem"
              color="#fff"
              aria-label="Forward Arrow Icon"
            />
          </Box>
          <Box
            as={motion.figure}
            variants={arrowVariants}
            position="absolute"
            left="1.15rem"
          >
            <MdArrowForwardIos
              fontSize="1.1rem"
              color="#fff"
              aria-label="Forward Arrow Icon"
            />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default SidebarSocialIcons;
