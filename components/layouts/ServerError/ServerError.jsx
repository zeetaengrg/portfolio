import NextImage from "next/image";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { GoBackBtn } from "@components/elements";

const ServerError = () => {
  const boxVariants = {
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

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: { base: "69vh", md: "80.15vh", lg: "82vh", xl: "90vh" },
    position: "relative",
    "&>a": {
      position: "absolute",
      bottom: {
        base: "1rem",
        md: "5rem",
        lg: "15rem",
        xl: "0",
      },
      zIndex: "1",
    },
  };

  const textStyle = {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "absolute",
    top: {
      base: "-1.5rem",
      md: "-1rem",
      xl: "0rem",
    },
    textAlign: "center",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
  };

  return (
    <Box
      as="section"
      sx={boxStyle}
      aria-labelledby="server-error"
      aria-describedby="server-error-text"
    >
      <Box
        as={motion.figure}
        variants={boxVariants}
        initial="start"
        animate="end"
        position="relative"
      >
        <Box
          as="figcaption"
          id="server-error"
          fontSize={{ base: "1.1rem", md: "1.3rem" }}
          sx={textStyle}
        >
          Oops, Internal Server Error!!!
        </Box>
        <NextImage
          src="/images/server-error.svg"
          alt="500 Internal Server Error"
          height={550}
          width={600}
          draggable="false"
        />
      </Box>
      <GoBackBtn />
    </Box>
  );
};

export default ServerError;
