import { Link } from "@chakra-ui/react";
import { curriculums } from "@data/about-data";

const CurriculumTable = () => {
  const tableStyle = {
    width: "100%",
    border: "0.25px groove rgba(165,171,189,0.3)",
    borderCollapse: "collapse",
  };

  const tableHeadStyle = {
    border: "0.25px groove rgba(165,171,189,0.3)",
    padding: "8px",
  };

  const linkStyle = {
    color: "#3892f9",
    _hover: {
      "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "1rem",
    fontStyle: "italic",
  };

  return (
    <table style={tableStyle}>
      <caption style={{ fontSize: "1.1rem", fontWeight: "600" }}>
        Curriculums:
      </caption>
      <thead>
        <tr>
          <th style={tableHeadStyle}>Curriculum</th>
          <th style={tableHeadStyle}>Platform</th>
          <th style={tableHeadStyle}>Certificate</th>
        </tr>
      </thead>
      {curriculums.map((curriculum) => (
        <tbody key={curriculum.id}>
          <tr>
            <td style={tableHeadStyle}>
              <Link
                target="_blank"
                rel="noopener noreferrer nofollow"
                sx={linkStyle}
                href={curriculum.link}
                aria-label="Link To Curriculum Title"
              >
                {curriculum.title}
              </Link>
            </td>
            <td style={tableHeadStyle}>
              <Link
                target="_blank"
                rel="noopener noreferrer nofollow"
                sx={linkStyle}
                href="https://www.freecodecamp.org/"
                aria-label="Link To Free Code Camp Website"
              >
                {curriculum.platform}
              </Link>
            </td>
            <td style={tableHeadStyle}>
              <Link
                href={curriculum.certificateUrl}
                color="#3892f9"
                textTransform="capitalize"
                aria-label={`Link to ${curriculum.title} Certificate`}
              >
                {curriculum.title === "Front End Development Libraries" &&
                "Back End Development and APIs"
                  ? "Ongoing"
                  : "Certificate"}
              </Link>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default CurriculumTable;
