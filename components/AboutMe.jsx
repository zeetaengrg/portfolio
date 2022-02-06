import {
    Divider,
    Heading,
    Center,
    Text,
    Link,
    Flex,
    Box,
    Button,
    Wrap
} from "@chakra-ui/react";
import { GiAchievement } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiSuitcaseFill } from "react-icons/ri";
import NextLink from "next/link";

const AboutMe = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
    }

    const wrapperStyle = {
        bgColor: "#141E39",
        borderRadius: "0.3rem",
    }

    const aboutMeFlexStyle = {
        gap: "0.3rem",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
    }

    const iconStyle = {
        color: "#0B111E",
        fontSize: "1.5rem"
    }

    const titleStyle = {
        color: "#a5abbd",
        fontSize: "0.9rem"
    }

    const subTitleStyle = {
        color: "#384765",
        fontSize: "0.7rem"
    }

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
                        <Wrap sx={wrapperStyle}>
                            <Flex sx={aboutMeFlexStyle}>
                                <FaGraduationCap style={iconStyle} />
                                <Text sx={titleStyle}>Education</Text>
                                <Text sx={subTitleStyle}>BSc Hons</Text>
                            </Flex>
                        </Wrap>
                        <Wrap sx={wrapperStyle}>
                            <Flex sx={aboutMeFlexStyle}>
                                <GiAchievement style={iconStyle} />
                                <Text sx={titleStyle}>Experience</Text>
                                <Text sx={subTitleStyle}>1+ years</Text>
                            </Flex>
                        </Wrap>
                        <Wrap sx={wrapperStyle}>
                            <Flex sx={aboutMeFlexStyle}>
                                <RiSuitcaseFill style={iconStyle} />
                                <Text sx={titleStyle}>Completed</Text>
                                <Text sx={subTitleStyle}>10+ projects</Text>
                            </Flex>
                        </Wrap>
                    </Flex>
                    <Text
                        m={{ base: "1rem", md: "2rem" }}
                        fontSize={{ base: "1.1rem", md: "1.3rem" }}
                        textAlign="center"
                    >
                        A Front-End developing aficionado from{" "}
                        <Link
                            href="https://en.wikipedia.org/wiki/Nepal"
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                            sx={linkStyle}
                            fontSize={{ base: "1.1rem", md: "1.5rem" }}
                        >
                            🇳🇵
                        </Link>{" "}
                        with an acute detail to hone the skills as required by
                        the project requirements. A web technology ethusiast
                        with a modest experience of UI designing proficiency and
                        immense interest to build elegant as well as fully
                        functioning applications.
                    </Text>
                    <Box>
                        <NextLink href="/#contact">
                            <Link _hover={{ "&::after": { content: "none" } }}>
                                <Button
                                    sx={btnStyle}
                                    variant="outline"
                                    size="lg"
                                    rightIcon={
                                        <IoMdContact
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                    }
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </NextLink>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default AboutMe;
