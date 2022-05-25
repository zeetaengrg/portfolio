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
  GridItem,
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
            <Box sx={boxStyle}>
              <Image
                src={project.imageOne}
                alt={project.titleOne}
                sx={imgStyle}
              />
            </Box>
            <Grid placeContent="center" width={{ base: "100%", md: "35%" }}>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading as="h1" size="lg" fontSize="2rem" color="#3892f9">
                  {project.titleOne}
                </Heading>
                <Divider mb="0.5rem" />
                <Text>{project.descriptionOne}</Text>
                <Box>
                  <Text
                    textAlign="center"
                    textTransform="uppercase"
                    fontWeight="bold"
                    mt="0.5rem"
                  >
                    Skills Learned
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                    {project.skillsOne.map((skill) => (
                      <GridItem key={skill}>
                        <UnorderedList>
                          <ListItem>{skill}</ListItem>
                        </UnorderedList>
                      </GridItem>
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
              <Heading
                as="h2"
                size="md"
                sx={techTextStyle}
                textAlign={{ base: "center", md: "left" }}
              >
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
            <Grid placeContent="center" width={{ base: "100%", md: "35%" }}>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading as="h1" size="lg" fontSize="2rem" color="#3892f9">
                  {project.titleTwo}
                </Heading>
                <Divider mb="0.5rem" />
                <Text>{project.descriptionTwo}</Text>
                <Box>
                  <Text
                    textAlign="center"
                    textTransform="uppercase"
                    fontWeight="bold"
                    mt="0.5rem"
                  >
                    Skills Learned
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                    {project.skillsTwo.map((skill) => (
                      <GridItem key={skill}>
                        <UnorderedList>
                          <ListItem>{skill}</ListItem>
                        </UnorderedList>
                      </GridItem>
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
