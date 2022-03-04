import { Divider, Flex, Grid, Heading, Image, Text, Link, Box } from "@chakra-ui/react";
import { projects } from "../../../data/projects-data";
import { motion } from "framer-motion";
import { Header, LineDivider, SubHeader } from "../../elements";
import { linkStyle } from "../../elements/LinkStyle/LinkStyle";
import { commonVariants, flexStyle, imgStyle, techTextStyle } from "./ProjectsStyle";

const MotionFlex = motion(Flex)

const Projects = () => {

    return (
        <Box>
            <Header heading="Projects" id="projects" />
            <LineDivider />
            <SubHeader subHeading="My Recent Works" />
            {projects.map((project) => (
                <>
                    <MotionFlex
                        sx={flexStyle}
                        direction={{ base: "column", md: "row" }}
                        variants={commonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            type: "tween",
                        }}
                    >
                        <Box flex="2">
                            <Link
                                sx={linkStyle}
                                href={project.linkOne}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
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
                            <Text
                                sx={techTextStyle}
                                textAlign={{ base: "center", md: "left" }}
                            >
                                Tech Stacks
                            </Text>
                            <Flex
                                mt="0.5rem"
                                gap="2rem"
                                justifyContent={{ base: "center", md: "left" }}
                            >
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
                    </MotionFlex>
                    <MotionFlex
                        sx={flexStyle}
                        direction={{ base: "column-reverse", md: "row" }}
                        variants={commonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                            type: "tween",
                        }}
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
                            <Text
                                sx={techTextStyle}
                                textAlign={{ base: "center", md: "left" }}
                            >
                                Tech Stacks
                            </Text>
                            <Flex
                                mt="0.5rem"
                                gap="2rem"
                                justifyContent={{ base: "center", md: "left" }}
                            >
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
                            <Link
                                sx={linkStyle}
                                href={project.linkTwo}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <Image
                                    key={project.id}
                                    src={project.imageTwo}
                                    alt={project.altTwo}
                                    sx={imgStyle}
                                />
                            </Link>
                        </Box>
                    </MotionFlex>
                </>
            ))}
        </Box>
    );
};

export default Projects;
