import { motion } from "framer-motion";
import {
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Link,
  Box,
  Tooltip,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Header, LineDivider, SubHeader } from "@components/elements";
import { projects } from "@data/projects-data";
import {
  boxStyle,
  commonVariants,
  flexStyle,
  imgStyle,
  linkContainer,
  linkToProjects,
  techTextStyle,
  techFlexStyle,
  techTextStyleRight,
  techFlexStyleRight,
  linkContainerRight,
  gridStyle,
  imgBoxStyle,
} from "./ProjectsStyle";

const MotionFlex = motion(Flex);

const Projects = () => {
  return (
    <Box as="section" id="projects">
      <Header heading="Projects" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Recent Works" />
      {projects.map((project) => (
        <Box
          as="section"
          key={project.id}
          display="flex"
          flexDirection="column"
          gap={{ base: "1rem", md: "2rem", lg: "4rem" }}
        >
          <MotionFlex
            as="article"
            sx={flexStyle}
            direction={{ base: "column", md: "column", lg: "row" }}
            variants={commonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <Box as="figure" sx={imgBoxStyle}>
              <Image
                src={project.imageOne}
                alt={project.titleOne}
                sx={imgStyle}
                draggable="false"
                userSelect="none"
              />
            </Box>
            <Grid
              as="section"
              placeItems={{ base: "center", md: "center", lg: "normal" }}
              width={{ base: "100%", md: "100%", lg: "35%" }}
            >
              <Heading
                as="h1"
                size="lg"
                textTransform="uppercase"
                fontSize="2rem"
                color="#3892f9"
                textAlign={{ base: "center", md: "center", lg: "right" }}
              >
                {project.titleOne}
              </Heading>
              <Divider
                as="figure"
                margin={{ base: "0.5rem auto" }}
                width={{ base: "45%", md: "45%", lg: "100%" }}
              />
              <Text
                p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
                textAlign={{ base: "center", md: "center", lg: "right" }}
              >
                {project.descriptionOne}
              </Text>
              <Box as="section">
                <Heading
                  as="h2"
                  size="sm"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mt="1rem"
                  color="#ecb7d4"
                  textAlign={{ base: "center", md: "center", lg: "right" }}
                >
                  Skills Learned
                </Heading>
                <UnorderedList sx={gridStyle}>
                  {project.skillsOne.map((skill) => (
                    <ListItem key={skill}>{skill}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Heading as="h2" size="sm" sx={techTextStyleRight}>
                Tech Stacks
              </Heading>
              <Flex as="section" sx={techFlexStyleRight}>
                {project.technologyOne.map((tech) => (
                  <Tooltip key={tech.id} label={tech.name} placement="top">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      key={tech.id}
                      height="3rem"
                      draggable="false"
                      userSelect="none"
                    />
                  </Tooltip>
                ))}
              </Flex>
              <Flex as="section" flexDirection="column">
                <Heading
                  as="h2"
                  size="sm"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mt="1rem"
                  color="#ecb7d4"
                  textAlign={{ base: "center", md: "center", lg: "right" }}
                >
                  Source
                </Heading>
                <Box as="figure" sx={linkContainerRight}>
                  <Tooltip as="figcaption" label="Live Demo" placement="bottom">
                    <Link
                      href={project.demoLinkOne}
                      sx={linkToProjects}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <FiExternalLink />
                    </Link>
                  </Tooltip>
                  <Tooltip
                    as="figcaption"
                    label="Source Code"
                    placement="bottom"
                  >
                    <Link
                      href={project.sourceLinkOne}
                      sx={linkToProjects}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <FaGithub />
                    </Link>
                  </Tooltip>
                </Box>
              </Flex>
            </Grid>
          </MotionFlex>
          <MotionFlex
            as="article"
            sx={flexStyle}
            direction={{
              base: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
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
            <Grid
              as="section"
              placeItems={{ base: "center", md: "center", lg: "normal" }}
              width={{ base: "100%", md: "100%", lg: "35%" }}
            >
              <Box as="section">
                <Heading
                  as="h1"
                  size="lg"
                  textTransform="uppercase"
                  fontSize="2rem"
                  color="#3892f9"
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {project.titleTwo}
                </Heading>
                <Divider
                  as="figure"
                  margin={{ base: "0.5rem auto" }}
                  width={{ base: "45%", md: "45%", lg: "100%" }}
                />
                <Text
                  p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {project.descriptionTwo}
                </Text>
                <Box as="section">
                  <Heading
                    as="h2"
                    size="sm"
                    textTransform="uppercase"
                    fontWeight="bold"
                    mt="1rem"
                    color="#ecb7d4"
                    textAlign={{ base: "center", md: "center", lg: "left" }}
                  >
                    Skills Learned
                  </Heading>
                  <UnorderedList sx={gridStyle}>
                    {project.skillsTwo.map((skill) => (
                      <ListItem key={skill}>{skill}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
              <Heading as="h2" size="sm" sx={techTextStyle}>
                Tech Stacks
              </Heading>
              <Flex as="figure" sx={techFlexStyle}>
                {project.technologyTwo.map((tech) => (
                  <Tooltip
                    as="figcaption"
                    label={tech.name}
                    placement="top"
                    key={tech.id}
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      key={tech.id}
                      height="3rem"
                      draggable="false"
                      userSelect="none"
                    />
                  </Tooltip>
                ))}
              </Flex>
              <Flex as="section" flexDirection="column">
                <Heading
                  as="h2"
                  size="sm"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mt="1rem"
                  color="#ecb7d4"
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  Source
                </Heading>
                <Box as="figure" sx={linkContainer}>
                  <Tooltip as="figcaption" label="Live Demo" placement="bottom">
                    <Link
                      href={project.demoLinkTwo}
                      sx={linkToProjects}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <FiExternalLink />
                    </Link>
                  </Tooltip>
                  <Tooltip
                    as="figcaption"
                    label="Source Code"
                    placement="bottom"
                  >
                    <Link
                      href={project.sourceLinkTwo}
                      sx={linkToProjects}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <FaGithub />
                    </Link>
                  </Tooltip>
                </Box>
              </Flex>
            </Grid>
            <Box as="figure" sx={imgBoxStyle}>
              <Image
                src={project.imageTwo}
                alt={project.titleTwo}
                sx={imgStyle}
                draggable="false"
              />
            </Box>
          </MotionFlex>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
