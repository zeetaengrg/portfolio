import {
    Divider,
    Heading,
    Center,
    Text,
    Link,
    Flex,
    Box
} from "@chakra-ui/react";
import ContactMeBtn from "../../elements/Btn/ContactMeBtn/ContactMeBtn";
import AboutMeWrapper from "../../elements/AboutMeWrapper/AboutMeWrapper";
import AboutMeText from "../../elements/AboutMeText/AboutMeText";

const AboutMe = () => {

    return (
        <Flex direction="column">
            <Heading
                id="about"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
                mt={{ base: "3rem", md: "0rem" }}
            >
                About Me
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "18%" }} mb="0.5rem" />
            </Center>
            <Center>
                <Text>My Introduction</Text>
            </Center>
            <Box m={{ base: "1.5rem 2rem", md: "3rem 5rem", lg: "3rem 10rem" }}>
                <Flex direction="column" alignItems="center">
                    <Flex
                        gap={{ base: "0.5rem", md: "1rem" }}
                    >
                        <AboutMeWrapper />
                    </Flex>
                    <AboutMeText />
                    <Box>
                        <Link href="#contact" _hover={{ "&::after": { content: "none" } }}>
                            <ContactMeBtn />
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default AboutMe;
