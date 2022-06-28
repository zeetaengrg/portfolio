import { motion } from "framer-motion";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import {
  ProjectsSkillsSection,
  ProjectsSourceSection,
  ProjectsTechSection,
  ProjectsTitleSection,
} from "@components/elements";
import {
  commonVariants,
  flexStyle,
  imgBoxStyle,
  imgStyle,
} from "../ProjectsStyle";

const LinearProjects = ({ project }) => {
  return (
    <Flex
      as={motion.div}
      sx={flexStyle}
      direction={{ base: "column", lg: "row" }}
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      <Box as="figure" sx={imgBoxStyle}>
        <Image
          src={project.imageOne}
          alt={project.titleOne}
          sx={imgStyle}
          draggable="false"
          userSelect="none"
        />
      </Box>
      <Grid
        as="section"
        placeItems={{ base: "center", md: "center", lg: "normal" }}
        width={{ base: "100%", lg: "35%" }}
      >
        <ProjectsTitleSection project={project} />
        <ProjectsSkillsSection project={project} />
        <ProjectsTechSection project={project} />
        <ProjectsSourceSection project={project} />
      </Grid>
    </Flex>
  );
};

export default LinearProjects;
