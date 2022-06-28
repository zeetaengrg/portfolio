import { Box } from "@chakra-ui/react";
import { Header, LineDivider, SubHeader } from "@components/elements";
import { LinearProjects, ReverseProjects } from "@components/modules";
import { projects } from "@data/projects-data";

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
          <LinearProjects project={project} />
          <ReverseProjects project={project} />
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
