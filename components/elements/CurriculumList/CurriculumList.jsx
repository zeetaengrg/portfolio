import { Link, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const CurriculumList = ({ curriculum }) => {
  const linkStyle = {
    color: "#3892f9",
    _hover: {
      "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    textDecoration: "underline",
    fontWeight: "normal",
    fontSize: "1rem",
  };

  return (
    <ListItem
      key={curriculum.id}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ListIcon
        as={FaCheckCircle}
        fontSize="0.7rem"
        aria-label="Check Circle Icon"
      />
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={linkStyle}
        href={curriculum.link}
        aria-label="Link To Curriculum Title"
      >
        {curriculum.title}
      </Link>
      &nbsp;
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={linkStyle}
        href="https://www.freecodecamp.org/"
        aria-label="Link To Free Code Camp Website"
        fontStyle="italic"
      >
        ({curriculum.platform})
      </Link>
    </ListItem>
  );
};

export default CurriculumList;
