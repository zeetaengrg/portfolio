import { Box, Flex, Heading, Image, Tooltip } from "@chakra-ui/react";
import {
  techFlexStyle,
  techFlexStyleRight,
  techTextStyle,
  techTextStyleRight,
} from "@components/modules/ProjectsStyle";

const ProjectsTechSection = ({ project, isReverse }) => {
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
