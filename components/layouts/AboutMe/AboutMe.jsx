import { Link, Flex, Box } from "@chakra-ui/react";
import Header from "../../elements/Header/Header";
import ContactMeBtn from "../../elements/Btn/ContactMeBtn/ContactMeBtn";
import AboutMeWrapper from "../../elements/AboutMeWrapper/AboutMeWrapper";
import AboutMeText from "../../elements/AboutMeText/AboutMeText";
import SubHeader from "../../elements/SubHeader/SubHeader";
import LineDivider from "../../elements/LineDivider/LineDivider";

const AboutMe = () => {
    return (
        <Flex direction="column">
            <Header heading="About Me" />
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
