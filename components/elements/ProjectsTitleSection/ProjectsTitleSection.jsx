import { Divider, Heading, Text } from "@chakra-ui/react";

const ProjectsTitleSection = ({ project, isReverse }) => {
  return (
    <>
      <Heading
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
        {isReverse ? project.titleTwo : project.titleOne}
      </Heading>
      <Divider
        margin={{ base: "0.5rem auto" }}
        width={{ base: "45%", md: "45%", lg: "100%" }}
      />
      <Text
        p={{ base: "0rem", md: "0rem 3rem", lg: "0rem" }}
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
