import NextImage from "next/image";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { GoBackBtn } from "@components/elements";

const flexVariants = {
  start: {
    opacity: 0,
    y: "20vh",
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
      ease: "easeIn",
      staggerChildren: 0.1,
    },
  },
};

const Error = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: { base: "60.25vh", md: "72.25vh", lg: "76.25vh" },
    gap: { base: "2rem", md: "3rem", xl: "2rem" },
    position: "relative",
    "&>a": {
      position: "absolute",
      bottom: "-1rem",
      zIndex: "1",
    },
  };

  const textStyle = {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <Box
      as="section"
      sx={boxStyle}
      aria-labelledby="error"
      aria-describedby="error-text"
    >
      <Flex
        as={motion.article}
        variants={flexVariants}
        initial="start"
        animate="end"
        direction="column"
        alignItems="center"
        gap={{ base: "0rem", md: "0.5rem" }}
      >
        <Text
          id="error"
          fontSize={{ base: "1.1rem", md: "1.3rem" }}
          sx={textStyle}
        >
          Oops, Page Not Found!!!
        </Text>
        <Box as="figure" p={{ base: "0rem 3rem", md: "0rem" }}>
          <NextImage
            src="/images/error.svg"
            alt="404 Error"
            height={300}
            width={600}
            draggable="false"
          />
        </Box>
        <Text
          sx={textStyle}
          fontSize={{ base: "1.2rem", md: "1.3rem" }}
          id="error-text"
        >
          Sorry, but the page you requested was not found!
        </Text>
      </Flex>
      <GoBackBtn />
    </Box>
  );
};

export default Error;
