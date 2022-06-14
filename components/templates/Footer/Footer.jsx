import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
import { SocialIconLinks } from "@components/elements";
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
        gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
      >
        <Center>
          <Image src="/images/logo.svg" alt="Logo" sx={imageStyle} />
        </Center>
        <Box display={{ base: "block", md: "none" }}>
          <SocialIconLinks />
        </Box>
        <Box fontSize="0.8rem" mb={{ base: "0.5rem", lg: "1.5rem" }}>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={{ base: "0rem", lg: "0.5rem" }}
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
