import { Link, Flex, Box } from "@chakra-ui/react";
import {
  Header,
  ContactMeBtn,
  AboutMeWrapper,
  AboutMeText,
  SubHeader,
  LineDivider,
} from "@components/elements";

const AboutMe = () => {
  return (
    <Flex direction="column" id="aboutme">
      <Header heading="About Me" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Introduction" />
      <Box p={{ base: "1.5rem 3rem", md: "2rem 3rem", lg: "2rem 10rem" }}>
        <Flex direction="column" alignItems="center">
          <Flex gap={{ base: "0.5rem", md: "1rem" }}>
            <AboutMeWrapper />
          </Flex>
          <AboutMeText />
          <Box>
            <Link href="#contacts" _hover={{ "&::after": { content: "none" } }}>
              <ContactMeBtn />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AboutMe;
