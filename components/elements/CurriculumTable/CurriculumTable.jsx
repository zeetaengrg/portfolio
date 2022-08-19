import { Link } from "@chakra-ui/react";
import { curriculums } from "@data/about-data";
import { externalLinkStyle } from "../ExternalLinkStyle";

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

  return (
    <table style={tableStyle}>
      <caption style={{ fontSize: "1.1rem", fontWeight: "600" }}>
        Web Development Curriculums:
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
                sx={externalLinkStyle}
                fontStyle="italic"
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
                sx={externalLinkStyle}
                href="https://www.freecodecamp.org/"
                aria-label="Link To Free Code Camp Website"
              >
                {curriculum.platform}
              </Link>
            </td>
            <td style={tableHeadStyle}>
              <Link
                href={curriculum.certificateUrl}
                sx={externalLinkStyle}
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
