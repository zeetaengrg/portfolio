import { motion } from "framer-motion";
import { Divider, Heading, Text } from "@chakra-ui/react";

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const ProjectsTitleSection = ({ project, isReverse }) => {
  return (
    <>
      <Heading
        id="projects-title"
        as="h1"
        size="lg"
        textTransform="uppercase"
        fontSize="2rem"
        color="#3892f9"
        textAlign={{
          base: "center",
          md: "center",
          lg: isReverse ? "left" : "right",
        }}
      >
        {project.titleOne === "Pizzaland" ||
          (project.titleTwo === "Alpha Male" && (
            <Text
              as={motion.p}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              fontSize="0.75rem"
              color="#ecb7d4"
            >
              Coming Soon...
            </Text>
          ))}
        {isReverse ? project.titleTwo : project.titleOne}
      </Heading>
      <Divider
        margin={{ base: "0.5rem auto" }}
        width={{ base: "45%", md: "45%", lg: "100%" }}
      />
      <Text
        p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
        fontSize={{ base: "1.1rem" }}
        textAlign={{
          base: "center",
          md: "center",
          lg: isReverse ? "left" : "right",
        }}
      >
        {isReverse ? project.descriptionTwo : project.descriptionOne}
      </Text>
    </>
  );
};

export default ProjectsTitleSection;
