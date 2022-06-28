import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
import { SocialIconLinks } from "@components/elements";
import { boxStyle, imgTag, imageStyle } from "./FooterStyles";

const Footer = () => {
  const today = new Date();

  return (
    <Box as="footer" sx={boxStyle}>
      <Box as="figure">
        <Image
          src="/images/wave.svg"
          alt="waves"
          sx={imgTag}
          draggable="false"
        />
      </Box>
      <Flex
        as="section"
        justifyContent="center"
        direction="column"
        position="relative"
        bottom={{ base: "0rem", xl: "-7rem" }}
        gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
      >
        <Center as="figure">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            sx={imageStyle}
            draggable="false"
          />
        </Center>
        <Box as="article" display={{ base: "block", md: "none" }}>
          <SocialIconLinks />
        </Box>
        <Flex
          as="article"
          justify="center"
          mb={{ base: "0.5rem", lg: "1.5rem" }}
          fontSize="0.8rem"
          align="center"
          direction="column"
          gap={{ base: "0rem", lg: "0.5rem" }}
        >
          <Text>Designed & Built By Jiten Gurung</Text>
          <Flex align="center">
            {today.getFullYear()}{" "}
            <FaCopyright
              style={{ margin: "0 0.5rem" }}
              aria-label="Copyright Icon"
            />
            All Rights Reserved.
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
