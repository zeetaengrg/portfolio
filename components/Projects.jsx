import NextLink from "next/link";
import { Center, Divider, Flex, Grid, Heading, Image, Text, Link, Box, useMediaQuery } from "@chakra-ui/react";
import { projects } from "../data/data";

const Projects = () => {

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
        color: "#384765",
        mt: "0.5rem",
        textTransform: "uppercase",
    }

    return (
        <>
            <Heading
                mt={{ base: "2rem", md: "4rem" }}
                id="projects"
                textAlign="center"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                textTransform="uppercase"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                Projects
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "15%" }} />
            </Center>
            <Center>
                <Text>My Recent Works</Text>
            </Center>
            {projects.map((project) => (
                <>
                    <Flex
                        p={{ base: "1.5rem", md: "2rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
                        direction={{ base: "column", md: "row" }}
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
                            <Text textAlign={{ base: "center", md: "left" }}>
                                <Heading
                                    as="h3"
                                    fontSize="2rem"
                                    color="#3892f9"
                                >
                                    {project.titleOne}
                                </Heading>
                                <Divider mb="0.5rem" />
                                {project.descriptionOne}
                            </Text>
                            <Text sx={techTextStyle} textAlign={{ base: "center", md: "left" }}>Tech Stacks</Text>
                            <Flex mt="0.5rem" gap="2rem" justifyContent={{ base: "center", md: "left" }}>
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
                        direction={{ base: "column-reverse", md: "row" }}
                    >
                        <Grid placeContent="center" flex="1">
                            <Text textAlign={{ base: "center", md: "left" }}>
                                <Heading
                                    as="h3"
                                    fontSize="2rem"
                                    color="#3892f9"
                                >
                                    {project.titleTwo}
                                </Heading>
                                <Divider mb="0.5rem" />
                                {project.descriptionTwo}
                            </Text>
                            <Text sx={techTextStyle} textAlign={{ base: "center", md: "left" }}>Tech Stacks</Text>
                            <Flex mt="0.5rem" gap="2rem" justifyContent={{ base: "center", md: "left" }}>
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
