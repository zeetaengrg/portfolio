import { Center, Divider, Flex, Grid, Heading, Image, Text, Link, Box } from "@chakra-ui/react";
import { projects } from "../../../data/data";
import NextLink from "next/link";

const Projects = () => {

    const linkStyle = {
        _hover: {
            textDecoration: "none",
            "&::after": { content: "none" }
        },
        _focus: { outline: "none" },
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
        <Box>
            <Heading
                id="projects"
                textAlign="center"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                textTransform="uppercase"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
                mt={{ base: "1rem", md: "5rem" }}
            >
                Projects
            </Heading>
            <Center>
                <Divider width={{ base: "40%", md: "15%" }} mb="0.5rem" />
            </Center>
            <Center>
                <Text>My Recent Works</Text>
            </Center>
            {projects.map((project) => (
                <>
                    <Flex
                        m={{ base: "1.5rem 2rem", md: "3rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
                        direction={{ base: "column", md: "row" }}
                    >
                        <Box flex="2">
                            <Link sx={linkStyle} href={project.linkOne} target="_blank" rel="noreferrer noopener nofollow" >
                                <Image
                                    key={project.id}
                                    src={project.imageOne}
                                    alt={project.altOne}
                                    sx={imgStyle}
                                />
                            </Link>
                        </Box>
                        <Grid placeContent="center" flex="1">
                            <Text textAlign={{ base: "center", md: "left" }}>
                                <Heading
                                    as="h3"
                                    fontSize="2rem"
                                    color="#3892f9"
                                    key={project.id}
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
                        m={{ base: "1.5rem 2rem", md: "3rem 6rem" }}
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
                                    key={project.id}
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
                            <Link sx={linkStyle} href={project.linkTwo} target="_blank" rel="noreferrer noopener nofollow" >
                                <Image
                                    key={project.id}
                                    src={project.imageTwo}
                                    alt={project.altTwo}
                                    sx={imgStyle}
                                />
                            </Link>
                        </Box>
                    </Flex>
                </>
            ))}
        </Box>
    );
};

export default Projects;
