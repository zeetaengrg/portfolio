import { Link, Flex, Box } from "@chakra-ui/react";
import {
  Header,
  ContactMeBtn,
  AboutMeWrapper,
  SubHeader,
  LineDivider,
} from "@components/elements";
import { AboutMeText } from "@components/modules";

const AboutMe = () => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      id="aboutme"
      mt={{ base: "2rem", md: "0rem" }}
    >
      <Header heading="About Me" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Introduction" />
      <Box
        as="section"
        p={{ base: "1.5rem 3rem", md: "2rem 3rem", lg: "2rem 10rem" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex as="article" gap={{ base: "0.5rem", md: "1rem" }}>
          <AboutMeWrapper />
        </Flex>
        <AboutMeText />
        <ContactMeBtn />
      </Box>
    </Box>
  );
};

export default AboutMe;
