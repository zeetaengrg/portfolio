import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import {
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
      as="section"
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1.1,
        duration: 1,
        type: "tween",
      }}
    >
      <Box as="article" display="flex">
        <UnorderedList
          listStyleType="none"
          gap="1.5rem"
          direction="column"
          bg="#141D38"
          p="1.1rem 0.7rem"
          borderRadius="0rem 2rem 2rem 0rem"
          boxShadow="0 0.5rem 1rem rgba(0, 0, 0, 0.2)"
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
              >
                {link.icon}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box
          as={motion.section}
          variants={boxVariants}
          initial="start"
          animate="end"
          bg="#141D38"
          height="2rem"
          width="2.5rem"
          borderRadius="0rem 2rem 2rem 0rem"
          margin="auto 0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          transition="all 0.3s ease"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bg: "transparent",
            height: "1rem",
            width: "1rem",
            top: "-0.95rem",
            left: "0rem",
            borderBottomLeftRadius: "1rem",
            boxShadow: "-4px 4px 0 0.3px #141D38",
          }}
          _after={{
            content: '""',
            position: "absolute",
            bg: "transparent",
            height: "1rem",
            width: "1rem",
            top: "2rem",
            left: "0rem",
            borderTopLeftRadius: "1rem",
            boxShadow: "-3px -4px 0 3px #141D38",
          }}
        >
          <Box
            as={motion.figure}
            variants={arrowVariants}
            position="absolute"
            left="0.15rem"
          >
            <MdOutlineDoubleArrow fontSize="1.5rem" />
          </Box>
          <Box
            as={motion.figure}
            variants={arrowVariants}
            position="absolute"
            left="0.65rem"
          >
            <MdOutlineDoubleArrow fontSize="1.5rem" />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default SidebarSocialIcons;
