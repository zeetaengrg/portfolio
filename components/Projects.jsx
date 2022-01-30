import NextLink from "next/link";
import { Center, Divider, Flex, Grid, Heading, Image, Text, Link, Box, useMediaQuery } from "@chakra-ui/react";
import { projects } from "../data/data";

const Projects = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const linkStyle = {
        _hover: {
            textDecoration: "none",
            "&::after": { content: "none" }
        }
    };

    const imgStyle = {
        transition: "all 0.3s ease-in-out",
        _hover: {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out"
        },
        borderRadius: "0.5rem",
        boxShadow: "0 0.5rem 1.5rem 1rem rgba(0,0,0,0.5)",
    };

    const techTextStyle = {
        color: "#E94560",
        mt: "0.5rem",
        textTransform: "uppercase",
    }

    return (
        <>
            <Heading
                mt={{ base: "2rem", md: "4rem" }}
                id="projects"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #B4A5A5, #3C415C, #0F3460, #16213E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                Projects
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "15%" }} />
            </Center>
            {projects.map((project) => (
                <>
                    <Flex
                        p={{ base: "1.5rem", md: "2rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
                        direction={isNotSmallerScreen ? "row" : "column"}
                    >
                        <Box flex="2">
                            <NextLink href="#">
                                <Link sx={linkStyle}>
                                    <Image
                                        src={project.imageOne}
                                        alt="Hulu Movie Streaming App"
                                        sx={imgStyle}
                                    />
                                </Link>
                            </NextLink>
                        </Box>
                        <Grid placeContent="center" flex="1">
                            <Text textAlign={isNotSmallerScreen ? "left" : "center"} >
                                <Heading
                                    as="h3"
                                    fontSize="2rem"
                                    color="#0F3460"
                                >
                                    {project.titleOne}
                                </Heading>
                                {project.descriptionOne}
                            </Text>
                            <Text sx={techTextStyle} textAlign={isNotSmallerScreen ? "left" : "center"}>Tech Stacks</Text>
                            <Flex mt="0.5rem" gap="2rem" justifyContent={isNotSmallerScreen ? "left" : "center"}>
                                {project.technologyOne.map((tech) => (
                                    <Image
                                        src={tech.image}
                                        alt={tech.name}
                                        key={tech.id}
                                        height="48px"
                                    />
                                ))}
                            </Flex>
                        </Grid>
                    </Flex>
                    <Flex
                        p={{ base: "1.5rem", md: "2rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
                        direction={isNotSmallerScreen ? "row" : "column-reverse"}
                    >
                        <Grid placeContent="center" flex="1">
                            <Text textAlign={isNotSmallerScreen ? "left" : "center"}>
                                <Heading
                                    as="h3"
                                    fontSize="2rem"
                                    color="#0F3460"
                                >
                                    {project.titleTwo}
                                </Heading>
                                {project.descriptionTwo}
                            </Text>
                            <Text sx={techTextStyle} textAlign={isNotSmallerScreen ? "left" : "center"}>Tech Stacks</Text>
                            <Flex mt="0.5rem" gap="2rem" justifyContent={isNotSmallerScreen ? "left" : "center"}>
                                {project.technologyTwo.map((tech) => (
                                    <Image
                                        src={tech.image}
                                        alt={tech.name}
                                        key={tech.id}
                                        height="48px"
                                    />
                                ))}
                            </Flex>
                        </Grid>
                        <Box flex="2">
                            <NextLink href="#">
                                <Link sx={linkStyle}>
                                    <Image
                                        src={project.imageTwo}
                                        alt="Hulu Movie Streaming App"
                                        sx={imgStyle}
                                    />
                                </Link>
                            </NextLink>
                        </Box>
                    </Flex>
                </>
            ))}
        </>
    );
};

export default Projects;
