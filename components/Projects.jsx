import NextLink from "next/link";
import { Center, Divider, Flex, Grid, Heading, Image, Text, Link } from "@chakra-ui/react";
import { projects } from "../data/data";

const Projects = () => {

    const n = projects.length;

    const linkStyle = {
        _hover: {
            textDecoration: "none",
            "&::after": { content: "none" }
        }
    };

    const imgStyle = {
        width: "250rem",
        transition: "all 0.3s ease-in-out",
        _hover: {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out"
        },
        borderRadius: "0.5rem",
        boxShadow: "0 0.5rem 1.5rem 1rem rgba(0,0,0,0.5)",
        objectFit: "contain"
    };

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
                <Divider width="15%" />
            </Center>
            {projects.map((project) => (
                <>
                    <Flex p="2rem 6rem" gap="2rem" justifyContent="center">
                        <NextLink href="#">
                            <Link sx={linkStyle}>
                                <Image
                                    src={project.imageOne}
                                    alt="Hulu Movie Streaming App"
                                    sx={imgStyle}
                                />
                            </Link>
                        </NextLink>
                        <Grid placeContent="center">
                            <Text>
                                <Heading as="h3" fontSize="2rem">
                                    {project.titleOne}
                                </Heading>
                                {project.descriptionOne}
                            </Text>
                            <Flex mt="0.5rem" gap="2rem">
                                {project.technologyOne.map((tech) => (
                                    <Image src={tech.image} alt={tech.name} key={tech.id} height="48px" />
                                ))}
                            </Flex>
                        </Grid>
                    </Flex>
                    <Flex p="2rem 6rem" gap="2rem" justifyContent="center">
                        <Grid placeContent="center">
                            <Text>
                                <Heading as="h3" fontSize="2rem">
                                    {project.titleTwo}
                                </Heading>
                                {project.descriptionTwo}
                            </Text>
                            <Flex mt="0.5rem" gap="2rem">
                                {project.technologyTwo.map((tech) => (
                                    <Image src={tech.image} alt={tech.name} key={tech.id} height="48px" />
                                ))}
                            </Flex>
                        </Grid>
                        <NextLink href="#">
                            <Link sx={linkStyle}>
                                <Image
                                    src={project.imageTwo}
                                    alt="Hulu Movie Streaming App"
                                    sx={imgStyle}
                                />
                            </Link>
                        </NextLink>
                    </Flex>
                </>
            ))}
        </>
    );
};

export default Projects;
