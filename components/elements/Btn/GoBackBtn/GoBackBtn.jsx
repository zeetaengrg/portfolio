import { Link, Button } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { btnStyle } from "../Btn";

const GoBackBtn = () => {
  const linkStyle = {
    _hover: {
      "&::after": { content: "none" },
      color: "#a5abbd",
    },
    textTransform: "none",
    _focus: { outline: "none" },
  };

  return (
    <Link sx={linkStyle} href="/" position="relative">
      <Button
        m={{ base: "1rem 0", md: "1rem 0rem", lg: "0rem" }}
        sx={btnStyle}
        rightIcon={<RiArrowGoBackLine />}
        position="absolute"
        zIndex="1"
        left="50%"
        transform="translateX(-50%)"
      >
        Go Back
      </Button>
    </Link>
  );
};

export default GoBackBtn;
