import { Box, Flex } from "@chakra-ui/react";
import {
  AboutMeWrapper,
  ContactMeBtn,
  Header,
  LineDivider,
  SubHeader,
} from "@components/elements";
import { AboutMeText } from "@components/modules";

const AboutMe = () => {
  return (
    <Box
      as="section"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height={{ base: "fit-content", md: "fit-content", xl: "100vh" }}
      id="aboutme"
      aria-labelledby="aboutme-title"
    >
      <Header id="aboutme-title" heading="About Me" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Introduction" />
      <Flex m="1.5rem auto 0" as="article" gap={{ base: "0.5rem", md: "1rem" }}>
        <AboutMeWrapper />
      </Flex>
      <AboutMeText />
      <Box m="0 auto">
        <ContactMeBtn />
      </Box>
    </Box>
  );
};

export default AboutMe;
