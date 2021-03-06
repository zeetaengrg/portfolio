import { motion } from "framer-motion";
import { Box, Link, Text } from "@chakra-ui/react";
import { MdMailOutline } from "react-icons/md";
import {
  commonVariants,
  iconBoxStyle,
  iconStyle,
  mailStyle,
  textStyle,
} from "./SidebarMailLinkStyles";

const MotionBox = motion(Box);

const SidebarMailLink = () => {
  return (
    <MotionBox
      as="aside"
      variants={commonVariants}
      initial="hidden"
      animate="visible"
      display="flex"
    >
      <Box as="figure" sx={iconBoxStyle}>
        <Link
          href="mailto:zeetaen.gurung@gmail.com"
          sx={mailStyle}
          aria-label="Link to send an email to zeetaen.gurung@gmail.com"
        >
          <MdMailOutline style={iconStyle} aria-label="Mail Icon" />
        </Link>
      </Box>
      <Box
        bg="#141D38"
        p="1.5rem 0.2rem"
        display="grid"
        placeItems="center"
        borderRadius="2rem 0rem 0rem 2rem"
      >
        <Text style={textStyle}>zeetaen.gurung@gmail.com</Text>
      </Box>
    </MotionBox>
  );
};

export default SidebarMailLink;
