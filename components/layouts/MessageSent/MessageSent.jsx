import NextImage from "next/image";
import { motion } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GoBackBtn } from "@components/elements";
import {
  flexStyle,
  headingStyle,
  textStyle,
  boxStyle,
  boxVariants,
} from "./MessageSentStyles";

const MessageSent = () => {
  return (
    <Flex as="section" aria-labelledby="thankyou" sx={flexStyle}>
      <Box
        as={motion.article}
        sx={boxStyle}
        variants={boxVariants}
        initial="start"
        animate="end"
        aria-describedby="thankyou-text"
      >
        <Box as="figure" position="relative">
          <Heading as="h1" id="thankyou" sx={headingStyle}>
            Thank You!!!
          </Heading>
          <NextImage
            src="/images/message-sent.svg"
            alt="Thank You Illustration"
            height={600}
            width={600}
            draggable="false"
          />
          <Text as="figcaption" sx={textStyle} id="thankyou-text">
            Your message has been sent successfully. I will get back to you
            shortly.
          </Text>
        </Box>
      </Box>
      <GoBackBtn />
    </Flex>
  );
};

export default MessageSent;
