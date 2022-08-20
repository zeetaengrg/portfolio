import { motion } from "framer-motion";
import { Link, Box, Text, UnorderedList } from "@chakra-ui/react";
import { CurriculumList, CurriculumTable } from "@components/elements";
import { curriculums } from "@data/about-data";
import { commonVariants } from "./AboutMeTextStyles";
import { externalLinkStyle } from "@components/elements/ExternalLinkStyle";

const MotionBox = motion(Box);

const AboutMeText = () => {
  return (
    <MotionBox
      as="article"
      p={{ base: "1.5rem 1rem", md: "1.5rem 5rem" }}
      textAlign="center"
      fontSize={{ base: "1.1rem" }}
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      <Text>
        My interest in technologies started when I got my hands on a Toshiba
        laptop in grade five. The curiosity of how things actually work has led
        me to work on a network/systems engineering space configuring the
        network/system infrastructures. As a huge proponent of advancing
        technologies and exploring it, I have a passion for building things.
      </Text>
      <Text m="0.5rem 0rem">
        Without being ostentacious, to further prove my hardworking habitude,
        during my undergrad, I along with my team of three were awarded with the
        Best Software Project Award by&nbsp;
        <Link
          href="https://nta.gov.np"
          sx={externalLinkStyle}
          rel="noreferrer noopener nofollow"
          target="_blank"
          aria-label="Link to Nepal Telecommunication Authority(NTA) website"
        >
          Nepal Telecommunication Authority(NTA)
        </Link>
        &nbsp;for building Class Routine Management System.
      </Text>
      <Text
        fontSize="1.1rem"
        fontWeight="600"
        display={{ base: "none", md: "block" }}
      >
        Web Development Curriculums:
      </Text>
      <UnorderedList
        m="0.25rem 0rem"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        gap={{ base: "0.75rem", md: "0.25rem", lg: "0rem" }}
      >
        {curriculums.map((curriculum) => (
          <CurriculumList key={curriculum.id} curriculum={curriculum} />
        ))}
      </UnorderedList>
      <Box as="figure" display={{ base: "block", md: "none" }}>
        <CurriculumTable />
      </Box>
    </MotionBox>
  );
};

export default AboutMeText;
