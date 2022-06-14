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
import { projects } from "@data/projects-data";
import { motion } from "framer-motion";
import { Header, LineDivider, SubHeader } from "@components/elements";
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
} from "./ProjectsStyle";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const MotionFlex = motion(Flex);

const Projects = () => {
  return (
    <Box id="projects">
      <Header heading="Projects" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Recent Works" />
      {projects.map((project) => (
        <Box
          key={project.id}
          display="flex"
          flexDirection="column"
          gap={{ base: "1rem", md: "2rem", lg: "4rem" }}
        >
          <MotionFlex
            sx={flexStyle}
            direction={{ base: "column", md: "column", lg: "row" }}
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
            <Box sx={boxStyle}>
              <Image
                src={project.imageOne}
                alt={project.titleOne}
                sx={imgStyle}
              />
            </Box>
            <Grid
              placeItems={{ base: "center", md: "left", lg: "normal" }}
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
                margin={{ base: "0.5rem auto", md: "0.5rem auto" }}
                width={{ base: "45%", md: "45%", lg: "100%" }}
              />
              <Text
                p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
                textAlign={{ base: "center", md: "center", lg: "right" }}
              >
                {project.descriptionOne}
              </Text>
              <Box>
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
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  padding={{ base: "0rem 1rem", md: "0rem 5rem", lg: "0rem" }}
                >
                  {project.skillsOne.map((skill) => (
                    <UnorderedList
                      textAlign="right"
                      marginRight="0rem"
                      display="flex"
                      justifyContent="flex-end"
                      key={skill}
                    >
                      <ListItem>{skill}</ListItem>
                    </UnorderedList>
                  ))}
                </Grid>
              </Box>
              <Heading as="h2" size="sm" sx={techTextStyleRight}>
                Tech Stacks
              </Heading>
              <Flex sx={techFlexStyleRight}>
                {project.technologyOne.map((tech) => (
                  <Tooltip key={tech.id} label={tech.name} placement="top">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      key={tech.id}
                      height="48px"
                    />
                  </Tooltip>
                ))}
              </Flex>
              <Box sx={linkContainerRight}>
                <Tooltip label="Live Demo" placement="bottom">
                  <Link
                    href={project.demoLinkOne}
                    sx={linkToProjects}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <FiExternalLink />
                  </Link>
                </Tooltip>
                <Tooltip label="Source Code" placement="bottom">
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
            </Grid>
          </MotionFlex>
          <MotionFlex
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
              placeItems={{ base: "center", md: "center", lg: "normal" }}
              width={{ base: "100%", md: "100%", lg: "35%" }}
            >
              <Box>
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
                  margin={{ base: "0.5rem auto", md: "0.5rem auto" }}
                  width={{ base: "45%", md: "45%", lg: "100%" }}
                />
                <Text
                  p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {project.descriptionTwo}
                </Text>
                <Box>
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
                  <Grid
                    templateColumns="repeat(2, 1fr)"
                    padding={{ base: "0rem 1rem", md: "0rem 5rem", lg: "0rem" }}
                  >
                    {project.skillsTwo.map((skill) => (
                      <UnorderedList textAlign="left" key={skill}>
                        <ListItem>{skill}</ListItem>
                      </UnorderedList>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Heading as="h2" size="sm" sx={techTextStyle}>
                Tech Stacks
              </Heading>
              <Flex sx={techFlexStyle}>
                {project.technologyTwo.map((tech) => (
                  <Tooltip label={tech.name} placement="top" key={tech.id}>
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      key={tech.id}
                      height="48px"
                    />
                  </Tooltip>
                ))}
              </Flex>
              <Box sx={linkContainer}>
                <Tooltip label="Live Demo" placement="bottom">
                  <Link
                    href={project.demoLinkTwo}
                    sx={linkToProjects}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <FiExternalLink />
                  </Link>
                </Tooltip>
                <Tooltip label="Source Code" placement="bottom">
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
            </Grid>
            <Box sx={boxStyle}>
              <Image
                src={project.imageTwo}
                alt={project.titleTwo}
                sx={imgStyle}
              />
            </Box>
          </MotionFlex>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
