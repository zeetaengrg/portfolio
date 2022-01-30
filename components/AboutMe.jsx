import {
    Divider,
    Heading,
    Center,
    Image,
    useMediaQuery,
    Text,
    Link,
    Grid,
    Button,
    Flex,
} from "@chakra-ui/react";
import { FaCloudDownloadAlt, FaHandshake } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import NextLink from "next/link"

const AboutMe = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#B4A5A5", color: "#0F3460", borderColor: "#0F3460" },
        _active: { bg: "#B4A5A5", color: "#0F3460", transform: "scale(0.98)" },
    };

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
    }

    return (
        <Flex flexDirection="column" height={{ base: "84.8vh", md: "81.5vh" }}>
            <Heading
                mt={{ base: "1rem", md: "2rem" }}
                id="skills"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #B4A5A5, #3C415C, #0F3460, #16213E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                About Me
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "20%" }} />
            </Center>
            <Center>
                <Image
                    src="/images/developer.svg"
                    alt="Developer SVG"
                    {...(isNotSmallerScreen
                        ? { display: "block" }
                        : { display: "none" })}
                    opacity="0.2"
                    position="absolute"
                    bottom="3rem"
                    width="50rem"
                />
            </Center>
            <Text
                textAlign="center"
                fontSize={{ base: "1.2rem", md: "1.5rem" }}
                p={{ base: "1rem 1.5rem", md: "3rem 6rem" }}
            >
                An aspiring Front-End Web Developer from{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Nepal"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    sx={linkStyle}
                    fontSize={{ base: "1.2rem", md: "1.5rem" }}
                >
                    🇳🇵
                </Link>{" "}
                with an acute detail to hone the skills as required by the
                project requirement. Web technology aficionado with a bit of UI
                designing proficiency and immense interest to learn new tech stacks.
            </Text>
            <Flex
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                mt="4rem"
                mb="2rem"
            >
                <Link
                    href="/cv/Resume.pdf"
                    download
                    _hover={{ "&::after": { content: "none" } }}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        sx={btnStyle}
                        rightIcon={
                            <FaCloudDownloadAlt
                                style={{ fontSize: "1.5rem" }}
                            />
                        }
                    >
                        Download CV
                    </Button>
                </Link>
                <NextLink href="/#contact">
                    <Link
                        _hover={{ "&::after": { content: "none" } }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            sx={btnStyle}
                            rightIcon={
                                <FaHandshake style={{ fontSize: "1.5rem" }} />
                            }
                        >
                            Hire Me
                        </Button>
                    </Link>
                </NextLink>
            </Flex>
            <Grid placeContent="center" mb="1rem">
                <NextLink href="/">
                    <Link href="/" _hover={{ "&::after": { content: "none" } }}>
                        <Button sx={btnStyle} variant="outline" size="lg" rightIcon={<RiArrowGoBackFill />}>
                            Go Back to Home Page
                        </Button>
                    </Link>
                </NextLink>
            </Grid>
        </Flex>
    );
};

export default AboutMe;
