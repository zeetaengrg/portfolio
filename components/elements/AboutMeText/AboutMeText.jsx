import { Link, Heading, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { curriculums } from "@data/about-data";
import {
  commonVariants,
  linkStyle,
  specialLinkStyle,
} from "./AboutMeTextStyles";

const MotionBox = motion(Box);

const AboutMeText = () => {
  return (
    <MotionBox
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
      A Front-End developing aficionado from{" "}
      <Link
        href="https://en.wikipedia.org/wiki/Nepal"
        target="_blank"
        rel="noreferrer noopener nofollow"
        sx={linkStyle}
      >
        🇳🇵
      </Link>{" "}
      with an acute detail to hone the skills as required by the project as well
      as modest experience of UI/UX designing proficiency and immense interest
      to build elegant as well as fully functioning applications.
      <br />
      <br />
      In the past, I have worked as a network technician and system engineer.
      However, I always had secret affair with building interactive web
      applications. As a result, during the pandemic, I had an epiphany to learn
      web technologies seriously.
      <br />
      <br />
      <Heading as="h3" size="md">
        Curriculums:
      </Heading>
      {curriculums.map((curriculum) => (
        <List key={curriculum.id} m="0.5rem 0rem">
          <ListItem display="flex" alignItems="start" justifyContent="center">
            <ListIcon as={FaCheckCircle} />
            <Link
              target="_blank"
              rel="noopener noreferrer nofollow"
              sx={linkStyle}
              href={curriculum.link}
            >
              {curriculum.title}
            </Link>
            <Link
              m="0rem 0.5rem"
              target="_blank"
              rel="noopener noreferrer nofollow"
              sx={linkStyle}
              href="https://www.freecodecamp.org/"
            >
              <i>(freeCodeCamp)</i>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer nofollow"
              sx={linkStyle}
              textDecoration="underline"
              href={curriculum.certificateUrl}
            >
              {curriculum.title === "Front End Development Libraries"
                ? `Ongoing`
                : `Certificate` &&
                  curriculum.title === "Back End Development and APIs"
                ? "Ongoing"
                : "Certificate"}
            </Link>
          </ListItem>
        </List>
      ))}
      <br />
      Without being ostentacious, to further prove my hardworking habtitude,
      during my university days, I along with my team was awarded with the Best
      Software Project Award by{" "}
      <Link
        href="https://nta.gov.np"
        sx={specialLinkStyle}
        rel="noreferrer noopener nofollow"
        target="_blank"
      >
        Nepal Telecommunication Authority(NTA){" "}
      </Link>
      for building Class Routine Management System.
      <br />
      <br />
      Right now I am upskilling myself by learning ReactJS and NextJS and have
      completed few projects using them which can be found in my{" "}
      <Link
        href="https://bit.ly/3LmRDue"
        sx={specialLinkStyle}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        GitHub
      </Link>{" "}
      profile and{" "}
      <Link href="#projects" sx={specialLinkStyle}>
        Projects
      </Link>{" "}
      section.
      <br />
      <br />
      As per my hobby, I am a football fanatic and secretly dream about being a
      Rock &apos;n&apos; Roll guitarist.
    </MotionBox>
  );
};

export default AboutMeText;
