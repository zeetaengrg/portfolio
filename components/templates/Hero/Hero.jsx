import { Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  DownloadBtn,
  HireMeBtn,
  SidebarMailLink,
  SidebarSocialIcons,
} from "@components/elements";
import {
  commonVariants,
  flexStyle,
  linkStyle,
  heroImgStyle,
} from "./HeroStyle";

const Hero = () => {
  return (
    <Box mt={{ base: "2rem", md: "0rem" }}>
      <Image
        src="/images/hero-bg.svg"
        alt="hero-background"
        sx={heroImgStyle}
      />
      <SidebarSocialIcons />
      <Flex sx={flexStyle}>
        <Box>
          <Image
            as={motion.img}
            src="/images/profile-pic.png"
            alt="Jiten Image"
            variants={commonVariants}
            initial="hidden"
            animate="visible"
            width={{ base: "8rem", md: "12rem", lg: "17rem" }}
            height="100%"
          />
        </Box>
        <Box>
          <Flex
            direction="column"
            textAlign={{ base: "center", md: "center", lg: "start" }}
          >
            <Text
              as={motion.p}
              casing="uppercase"
              fontSize={{ base: "1rem", md: "1.5rem" }}
              variants={commonVariants}
              initial="hidden"
              animate="visible"
            >
              Hi!
            </Text>
            <Box fontSize={{ base: "1.5rem", md: "2rem" }}>
              <Flex
                justifyContent={{ base: "center", md: "center", lg: "start" }}
              >
                <Text
                  as={motion.p}
                  fontWeight="bold"
                  casing="uppercase"
                  variants={commonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  I&apos;m
                </Text>
                <Box
                  as={motion.div}
                  variants={commonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <FaQuoteLeft
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  />
                </Box>
                <Text
                  as={motion.p}
                  casing="uppercase"
                  color="#fff"
                  fontSize={{ base: "3rem", md: "4rem" }}
                  fontWeight="extrabold"
                  lineHeight="1.4"
                  variants={commonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Jiten
                </Text>
                <Box
                  as={motion.div}
                  variants={commonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <FaQuoteRight
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text
                as={motion.p}
                casing="uppercase"
                fontSize={{ base: "2.5rem", md: "3rem" }}
                fontWeight="bold"
                lineHeight="1"
                variants={commonVariants}
                initial="hidden"
                animate="visible"
              >
                Front End Dev
              </Text>
              <Text
                as={motion.p}
                variants={commonVariants}
                initial="hidden"
                animate="visible"
                mt="0.5rem"
                p={{ base: "0rem 2rem", md: "0rem 7rem", lg: "0rem" }}
                width={{ lg: "30rem" }}
              >
                An aspiring front end web developer with a dignified passion for
                creating beautiful and functional UI with modest designing
                experience.
              </Text>
            </Box>
            <Box>
              <Flex
                gap="1.5rem"
                mt="1rem"
                justifyContent={{ base: "center", md: "center", lg: "start" }}
              >
                <Link href="/cv/Resume.pdf" download sx={linkStyle}>
                  <DownloadBtn />
                </Link>
                <Link href="#contacts" sx={linkStyle}>
                  <HireMeBtn />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <SidebarMailLink />
    </Box>
  );
};

export default Hero;
