import { motion } from "framer-motion";
import { Link, Heading, Box, Text, UnorderedList } from "@chakra-ui/react";
import { CurriculumList, CurriculumTable } from "@components/elements";
import { curriculums } from "@data/about-data";
import { commonVariants, specialLinkStyle } from "./AboutMeTextStyles";

const MotionBox = motion(Box);

const AboutMeText = () => {
  return (
    <MotionBox
      as="article"
      p={{ base: "1.5rem 1rem", md: "1.5rem 5rem" }}
      textAlign="center"
      variants={commonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        type: "tween",
        stiffness: 110,
      }}
    >
      <Text>
        A Front-End aficionado developer, with an acute detail to hone the
        skills as required by the project as well as modest experience of UI/UX
        designing proficiency and an immense interest to build elegant as well
        as fully functioning web applications.
      </Text>
      <Text m="0.5rem 0rem">
        In the past, I have worked as a network technician and system engineer.
        However, I always had secret affair with building interactive web
        applications. As a result, during the pandemic, I had an epiphany to
        learn web technologies seriously.
      </Text>
      <Heading
        as="h3"
        size="md"
        fontSize="1.1rem"
        display={{ base: "none", md: "block" }}
      >
        Curriculums:
      </Heading>
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
      <Text m="0.5rem 0rem">
        Without being ostentacious, to further prove my hardworking habtitude,
        during my university days, I along with my team was awarded with the
        Best Software Project Award by
        <Link
          href="https://nta.gov.np"
          sx={specialLinkStyle}
          rel="noreferrer noopener nofollow"
          target="_blank"
        >
          &nbsp;Nepal Telecommunication Authority(NTA)&nbsp;
        </Link>
        for building Class Routine Management System.
      </Text>
      <Text>
        Right now I am upskilling myself by learning ReactJS and NextJS and have
        completed few projects using them which can be found in my
        <Link
          href="https://bit.ly/3LmRDue"
          sx={specialLinkStyle}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          &nbsp;GitHub&nbsp;
        </Link>
        profile and
        <Link href="#projects" sx={specialLinkStyle}>
          &nbsp;Projects&nbsp;
        </Link>
        section.
      </Text>
      <Text m="0.5rem 0rem 0rem">
        As per my hobby, I am a football fanatic and secretly dream about being
        a Rock &apos;n&apos; Roll guitarist.
      </Text>
    </MotionBox>
  );
};

export default AboutMeText;
