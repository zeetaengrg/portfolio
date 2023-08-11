import { Link, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { externalLinkStyle } from "../ExternalLinkStyle";

const CurriculumList = ({ curriculum }) => {
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
        sx={externalLinkStyle}
        href={curriculum.link}
        aria-label="Link To Curriculum Title"
      >
        {curriculum.title}
      </Link>
      &nbsp;
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={externalLinkStyle}
        href="https://www.freecodecamp.org/"
        fontStyle="italic"
        aria-label="Link To Free Code Camp Website"
      >
        ({curriculum.platform})
      </Link>
    </ListItem>
  );
};

export default CurriculumList;
