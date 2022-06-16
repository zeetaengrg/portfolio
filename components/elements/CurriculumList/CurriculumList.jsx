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
    fontWeight: "normal",
    fontSize: "1rem",
  };

  return (
    <ListItem
      key={curriculum.id}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="0.5rem"
    >
      <ListIcon as={FaCheckCircle} fontSize="0.7rem" />
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={linkStyle}
        href={curriculum.link}
      >
        {curriculum.title}
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={linkStyle}
        href="https://www.freecodecamp.org/"
      >
        <i>({curriculum.platform})</i>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={linkStyle}
        textDecoration="underline"
        href={curriculum.certificateUrl}
      >
        {curriculum.title === "Front End Development Libraries" &&
        "Back End Development and APIs"
          ? `Ongoing`
          : "Certificate"}
      </Link>
    </ListItem>
  );
};

export default CurriculumList;
