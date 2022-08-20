import { Box } from "@chakra-ui/react";
import { gridStyle } from "@components/modules/ProjectsStyle";

const SkillsTable = ({ project, isReverse }) => {
  const tableStyle = {
    width: "100%",
    marginTop: "0.5rem",
  };

  const dataStyle = {
    border: "0.25px groove rgba(165,171,189,0.15)",
    borderCollapse: "collapse",
    padding: "0.1rem 0.5rem",
  };

  return (
    <table style={tableStyle}>
      <tbody>
        <tr style={gridStyle}>
          {isReverse
            ? project.skillsTwo.map((skill) => (
                <td key={skill} style={dataStyle}>
                  <Box
                    textAlign={{ base: "center", lg: "left" }}
                    fontSize={{ base: "1rem", md: "1.1rem" }}
                  >
                    {skill}
                  </Box>
                </td>
              ))
            : project.skillsOne.map((skill) => (
                <td key={skill} style={dataStyle}>
                  <Box
                    textAlign={{ base: "center", lg: "right" }}
                    fontSize={{ base: "1rem", md: "1.1rem" }}
                  >
                    {skill}
                  </Box>
                </td>
              ))}
        </tr>
      </tbody>
    </table>
  );
};

export default SkillsTable;
