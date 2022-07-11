import { Box, Heading } from "@chakra-ui/react";
import SkillsTable from "../SkillsTable/SkillsTable";

const ProjectsSkillsSection = ({ project, isReverse }) => {
  return (
    <Box as="article">
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
        Skills&nbsp;
        {project.titleOne === "Pizzaland" || project.titleTwo === "Alpha Male"
          ? "Learning"
          : "Learned"}
      </Heading>
      <SkillsTable project={project} isReverse={isReverse} />
    </Box>
  );
};

export default ProjectsSkillsSection;
