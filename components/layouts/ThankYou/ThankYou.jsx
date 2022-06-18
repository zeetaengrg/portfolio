import { motion } from "framer-motion";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPrayingHands } from "react-icons/fa";
import { GoBackBtn } from "@components/elements";
import {
  flexStyle,
  headingStyle,
  textStyle,
  boxStyle,
  boxVariants,
} from "./ThankYouStyles";

const ThankYou = () => {
  return (
    <Flex as="section" sx={flexStyle}>
      <Box
        as={motion.article}
        sx={boxStyle}
        variants={boxVariants}
        initial="start"
        animate="end"
      >
        <Heading as="h1" sx={headingStyle}>
          Thank You!!!
        </Heading>
        <Divider as="figure" width="60%" />
        <Text sx={textStyle}>
          Your message has been sent successfully. I will get back to you
          shortly.
        </Text>
        <FaPrayingHands style={{ fontSize: "2rem" }} />
      </Box>
      <GoBackBtn />
    </Flex>
  );
};

export default ThankYou;
