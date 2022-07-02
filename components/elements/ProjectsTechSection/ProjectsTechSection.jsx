import { Box, Flex, Heading, Image, Tooltip } from "@chakra-ui/react";
import {
  techFlexStyle,
  techFlexStyleRight,
  techTextStyle,
  techTextStyleRight,
} from "@components/modules/ProjectsStyle";

const ProjectsTechSection = ({ project, isReverse }) => {
  const dropShadow = {
    filter: "drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 1))",
  };

  return (
    <Box as="article">
      <Heading
        as="h2"
        size="sm"
        sx={isReverse ? techTextStyle : techTextStyleRight}
      >
        Tech Stacks
      </Heading>
      <Flex sx={isReverse ? techFlexStyle : techFlexStyleRight}>
        {isReverse
          ? project.technologyTwo.map((tech) => (
              <Tooltip
                as="figcaption"
                key={tech.id}
                label={tech.name}
                placement="top"
                hasArrow
                closeOnClick={false}
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  key={tech.id}
                  sx={dropShadow}
                  height="3rem"
                  width="3rem"
                  draggable="false"
                  userSelect="none"
                />
              </Tooltip>
            ))
          : project.technologyOne.map((tech) => (
              <Tooltip
                as="figcaption"
                key={tech.id}
                label={tech.name}
                placement="top"
                hasArrow
                closeOnClick={false}
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  key={tech.id}
                  sx={dropShadow}
                  height="3rem"
                  width="3rem"
                  draggable="false"
                  userSelect="none"
                />
              </Tooltip>
            ))}
      </Flex>
    </Box>
  );
};

export default ProjectsTechSection;
