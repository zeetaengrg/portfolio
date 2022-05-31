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
import {
  Header,
  LineDivider,
  SubHeader,
  DemoBtn,
  SourceBtn,
} from "@components/elements";
import {
  boxStyle,
  commonVariants,
  flexStyle,
  imgStyle,
  linkContainer,
  linkToProjects,
  techTextStyle,
  techFlexStyle,
} from "./ProjectsStyle";

const MotionFlex = motion(Flex);

const Projects = () => {
  return (
    <Box>
      <Header heading="Projects" id="projects" />
      <LineDivider width={{ base: "50%", md: "35%", lg: "18%" }} />
      <SubHeader subHeading="Recent Works" />
      {projects.map((project) => (
        <Box key={project.id}>
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
              <Box>
                <Heading
                  as="h1"
                  size="lg"
                  textTransform="uppercase"
                  fontSize="2rem"
                  color="#3892f9"
                  textAlign={{ base: "center", md: "center", lg: "left" }}
                >
                  {project.titleOne}
                </Heading>
                <Divider
                  margin={{ base: "0.5rem auto", md: "0.5rem auto" }}
                  width={{ base: "45%", md: "45%", lg: "100%" }}
                />
                <Text textAlign={{ base: "center", md: "center", lg: "left" }}>
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
                    textAlign={{ base: "center", md: "center", lg: "left" }}
                  >
                    Skills Learned
                  </Heading>
                  <Grid
                    templateColumns="repeat(2, 1fr)"
                    padding={{ base: "0rem 1rem", md: "0rem 5rem", lg: "0rem" }}
                  >
                    {project.skillsOne.map((skill) => (
                      <UnorderedList key={skill}>
                        <ListItem>{skill}</ListItem>
                      </UnorderedList>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Box sx={linkContainer}>
                <Link
                  href={project.demoLinkOne}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <DemoBtn />
                </Link>
                <Link
                  href={project.sourceLinkOne}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <SourceBtn />
                </Link>
              </Box>
              <Heading as="h2" size="sm" sx={techTextStyle}>
                Tech Stacks
              </Heading>
              <Flex sx={techFlexStyle}>
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
                <Text textAlign={{ base: "center", md: "center", lg: "left" }}>
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
                      <UnorderedList key={skill}>
                        <ListItem>{skill}</ListItem>
                      </UnorderedList>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Box sx={linkContainer}>
                <Link
                  href={project.demoLinkTwo}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <DemoBtn />
                </Link>
                <Link
                  href={project.sourceLinkTwo}
                  sx={linkToProjects}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <SourceBtn />
                </Link>
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
