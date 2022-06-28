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

const ReverseProjects = ({ project }) => {
  const isReverse = true;

  return (
    <Flex
      as={motion.div}
      sx={flexStyle}
      direction={{
        base: "column-reverse",
        lg: "row",
      }}
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      <Grid
        as="section"
        placeItems={{ base: "center", md: "center", lg: "normal" }}
        width={{ base: "100%", lg: "35%" }}
      >
        <ProjectsTitleSection project={project} isReverse={isReverse} />
        <ProjectsSkillsSection project={project} isReverse={isReverse} />
        <ProjectsTechSection project={project} isReverse={isReverse} />
        <ProjectsSourceSection project={project} isReverse={isReverse} />
      </Grid>
      <Box as="figure" sx={imgBoxStyle}>
        <Image
          src={project.imageTwo}
          alt={project.titleTwo}
          sx={imgStyle}
          draggable="false"
        />
      </Box>
    </Flex>
  );
};

export default ReverseProjects;
