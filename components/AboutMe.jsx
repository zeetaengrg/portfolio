import {
    Divider,
    Heading,
    Center,
    Image,
    Text,
    Link,
    Flex
} from "@chakra-ui/react";

const AboutMe = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#0F3460" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
    }

    return (
        <Flex direction="column">
            <Heading
                mt={{ base: "1rem", md: "2rem" }}
                id="about"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                Who Am I ?
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "18%" }}  mb="0.5rem" />
            </Center>
            <Center>
                <Text>
                    My Introduction
                </Text>
            </Center>
            <Text
                textAlign="center"
                fontSize={{ base: "1.2rem", md: "1.5rem" }}
                p={{ base: "1rem 1.5rem", md: "2rem 6rem" }}
            >
                An Front-End Web Developing aficionado from{" "}
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
                project requirement. A Web technology ethusiast with a bit of UI
                designing proficiency and immense interest to learn new tech stacks.
            </Text>
            {/* <Grid placeContent="center" mb="1rem">
                <NextLink href="/">
                    <Link href="/" _hover={{ "&::after": { content: "none" } }}>
                        <Button sx={btnStyle} variant="outline" size="lg" rightIcon={<RiArrowGoBackFill />}>
                            Go Back to Home Page
                        </Button>
                    </Link>
                </NextLink>
            </Grid> */}
        </Flex>
    );
};

export default AboutMe;
