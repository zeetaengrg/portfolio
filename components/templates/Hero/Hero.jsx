import NextImage from "next/image";
import { motion } from "framer-motion";
import { Flex, Text, Link, Box, Image } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  DownloadBtn,
  HireMeBtn,
  SidebarMailLink,
  SidebarSocialIcons,
} from "@components/elements";
import { commonVariants, flexStyle, linkStyle, boxStyle } from "./HeroStyle";

const Hero = () => {
  return (
    <Box
      as="section"
      height={{ base: "87vh", md: "93vh", xl: "80vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box as="figure" sx={boxStyle}>
        <Image
          src="/images/hero-bg.svg"
          alt="hero-background"
          height="850"
          width="1500"
          objectFit="cover"
        />
      </Box>
      <Box
        as="aside"
        position="fixed"
        top="50%"
        left="-4rem"
        transform="translateY(-50%)"
        zIndex="15"
        display={{ base: "none", md: "block" }}
        transition="all 0.3s ease"
        _hover={{ left: "-1rem" }}
      >
        <SidebarSocialIcons />
      </Box>
      <Box as="article" display="flex" sx={flexStyle}>
        <Box
          as={motion.figure}
          variants={commonVariants}
          initial="hidden"
          animate="visible"
        >
          <NextImage
            src="/images/profile-pic.png"
            alt="Jiten Image"
            height="300"
            width="300"
            priority
            quality={100}
          />
        </Box>
        <Box as="section">
          <Box
            as="article"
            flexDirection="column"
            gap={{ base: "0.5rem", md: "1rem", xl: "0rem" }}
            display="flex"
            textAlign={{
              base: "center",
              md: "center",
              lg: "center",
              xl: "left",
            }}
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
            <Box as="section" fontSize={{ base: "1.5rem", md: "2rem" }}>
              <Flex
                as="article"
                gap="0.5rem"
                justifyContent={{
                  base: "center",
                  md: "center",
                  lg: "center",
                  xl: "left",
                }}
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
                  as={motion.figure}
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
                  lineHeight="1.2"
                  variants={commonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Jiten
                </Text>
                <Box
                  as={motion.figure}
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
              m={{
                base: "0.5rem 0rem",
                md: "1rem 0rem",
                lg: "1rem 0rem",
                xl: "0.5rem 0rem",
              }}
              p={{ base: "0rem 2rem", md: "0rem 7rem", lg: "0rem" }}
              width={{ lg: "30rem" }}
            >
              An aspiring front end web developer with a dignified passion for
              creating beautiful and functional UI with modest designing
              experience.
            </Text>
            <Flex
              as="section"
              gap="1.5rem"
              m={{ base: "0rem auto", md: "0.5rem auto", xl: "0.5rem 0rem" }}
              justifyContent={{
                base: "center",
                md: "center",
                lg: "center",
                xs: "left",
              }}
            >
              <Link href="/cv/Resume.pdf" download sx={linkStyle}>
                <DownloadBtn />
              </Link>
              <HireMeBtn />
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box
        as="aside"
        position="fixed"
        top="50%"
        right="-1.8rem"
        transform="translateY(-50%)"
        zIndex="15"
        display={{ base: "none", md: "block" }}
        transition="all 0.3s ease"
        _hover={{ right: "0rem" }}
      >
        <SidebarMailLink />
      </Box>
    </Box>
  );
};

export default Hero;
