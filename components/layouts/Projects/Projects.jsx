import { Center, Divider, Flex, Grid, Heading, Image, Text, Link, Box } from "@chakra-ui/react";
import { projects } from "../../../data/projects-data";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading)

const MotionDivider = motion(Divider)

const MotionText = motion(Text)

const MotionFlex = motion(Flex)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const Projects = () => {

    const headingStyle = {
        textAlign: "center",
        textTransform: "uppercase",
        bgGradient: "linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)",
        bgClip: "text",
        fontSize: { base: "3rem", md: "4rem" },
        fontFamily: "inherit",
        marginTop: { base: "1rem", md: "5rem" },
    }

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
        color: "#ecb7d4",
        mt: "0.5rem",
        textTransform: "uppercase",
    }

    return (
        <Box>
            <MotionHeading
                id="projects"
                sx={headingStyle}
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    type: "tween",
                }}
            >
                Projects
            </MotionHeading>
            <Center>
                <MotionDivider
                    width={{ base: "40%", md: "15%" }}
                    mb="0.5rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "tween",
                    }}
                />
            </Center>
            <Center>
                <MotionText
                    fontWeight="bold"
                    fontSize="1.1rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "tween",
                    }}
                >
                    My Recent Works
                </MotionText>
            </Center>
            {projects.map((project) => (
                <>
                    <MotionFlex
                        m={{ base: "1.5rem 2rem", md: "3rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
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
                                rel="noreferrer noopener nofollow"
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
                        m={{ base: "1.5rem 2rem", md: "3rem 6rem" }}
                        gap={{ base: "1.5rem", md: "2rem" }}
                        justifyContent="center"
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
                                rel="noreferrer noopener nofollow"
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
