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
      alignItems="center"
      flexDirection="column"
      height={{ base: "100%", md: "70vh", lg: "100vh" }}
      id="aboutme"
      mt={{ base: "2rem", md: "0rem" }}
      aria-labelledby="aboutme-title"
    >
      <Header id="aboutme-title" heading="About Me" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Introduction" />
      <Flex mt="2rem" as="article" gap={{ base: "0.5rem", md: "1rem" }}>
        <AboutMeWrapper />
      </Flex>
      <AboutMeText />
      <ContactMeBtn />
    </Box>
  );
};

export default AboutMe;
