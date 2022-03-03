import { Link, Flex, Box } from "@chakra-ui/react";
import {
    Header,
    ContactMeBtn,
    AboutMeWrapper,
    AboutMeText,
    SubHeader,
    LineDivider,
} from "../../elements";

const AboutMe = () => {
    return (
        <Flex direction="column">
            <Header heading="About Me" id="aboutme" />
            <LineDivider />
            <SubHeader subHeading="My Introduction" />
            <Box p={{ base: "1.5rem", md: "2rem 5rem", lg: "2rem 10rem" }}>
                <Flex direction="column" alignItems="center">
                    <Flex gap={{ base: "0.5rem", md: "1rem" }}>
                        <AboutMeWrapper />
                    </Flex>
                    <AboutMeText />
                    <Box>
                        <Link
                            href="#contact"
                            _hover={{ "&::after": { content: "none" } }}
                        >
                            <ContactMeBtn />
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default AboutMe;
