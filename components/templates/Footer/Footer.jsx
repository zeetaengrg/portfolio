import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
import { boxStyle, imgTag, imageStyle } from "./FooterStyles";

const Footer = () => {
  const today = new Date();

  return (
    <Box sx={boxStyle}>
      <Image src="/images/wave.svg" alt="waves" sx={imgTag} />
      <Flex
        justifyContent="center"
        direction="column"
        position="relative"
        gap="1rem"
      >
        <Center>
          <Image src="/images/logo.svg" alt="Logo" sx={imageStyle} />
        </Center>
        <Box fontSize="0.8rem" mb={{ base: "1rem", md: "2.5rem" }}>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap="0.5rem"
          >
            <Text>Designed & Built By Jiten Gurung</Text>
            <Flex alignItems="center">
              {today.getFullYear()}{" "}
              <FaCopyright style={{ margin: "0 0.5rem" }} />
              All Rights Reserved.
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
