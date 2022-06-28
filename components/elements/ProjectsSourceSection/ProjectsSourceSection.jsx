import { Box, Flex, Heading, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  linkContainer,
  linkContainerRight,
  linkToProjects,
} from "@components/modules/ProjectsStyle";

const ProjectSourceSection = ({ project, isReverse }) => {
  return (
    <Flex as="section" flexDirection="column">
      <Heading
        as="h2"
        size="sm"
        textTransform="uppercase"
        fontWeight="bold"
        mt="1rem"
        color="#ecb7d4"
        textAlign={{
          base: "center",
          md: "center",
          lg: isReverse ? "left" : "right",
        }}
      >
        Source
      </Heading>
      <Box as="figure" sx={isReverse ? linkContainer : linkContainerRight}>
        <Tooltip
          hasArrow
          as="figcaption"
          label="Live Demo"
          placement="bottom"
          closeOnClick={false}
        >
          <Link
            href={isReverse ? project.demoLinkTwo : project.demoLinkOne}
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
          hasArrow
          closeOnClick={false}
        >
          <Link
            href={isReverse ? project.sourceLinkTwo : project.sourceLinkOne}
            sx={linkToProjects}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaGithub />
          </Link>
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default ProjectSourceSection;
