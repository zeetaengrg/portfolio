import { Box, Divider, Link } from "@chakra-ui/react";

const SidebarMailLink = () => {
  const mailStyle = {
    transition: "all 0.3s ease",
    _hover: {
      "&::after": { content: "none" },
    },
  };

  const textStyle = {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textRendering: "optimizeLegibility",
    WebkitTextOrientation: "mixed",
    WebkitTextOrientation: "vertical-rl",
    MozTextOrientation: "mixed",
    MozTextOrientation: "vertical-rl",
    msTextOrientation: "mixed",
    msTextOrientation: "vertical-rl",
    textTransform: "lowercase",
    fontSize: "1rem",
    _hover: {
      textDecoration: "none",
      color: "#fff",
    },
  };

  return (
    <>
      <Box
        as="section"
        position="fixed"
        top="50%"
        zIndex="20"
        right="1.5rem"
        transform="translateY(-50%)"
      >
        <Link href="mailto:zeetaen.gurung@gmail.com" sx={mailStyle}>
          <p style={textStyle}>zeetaen.gurung@gmail.com</p>
        </Link>
      </Box>
      <Divider
        orientation="vertical"
        position="fixed"
        right="2.2rem"
        top="70%"
        zIndex="15"
        height="8rem"
      />
    </>
  );
};

export default SidebarMailLink;
