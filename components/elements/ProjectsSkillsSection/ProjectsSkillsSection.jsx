import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { gridStyle } from "@components/modules/ProjectsStyle";

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
        Skills Learned
      </Heading>
      <UnorderedList sx={gridStyle}>
        {isReverse
          ? project.skillsTwo.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))
          : project.skillsOne.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
      </UnorderedList>
    </Box>
  );
};

export default ProjectsSkillsSection;
