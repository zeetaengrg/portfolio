import NextImage from "next/image";
import { motion } from "framer-motion";
import { Flex, Text, Link, Box, Image } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  ResumeBtn,
  HireMeBtn,
  SidebarMailLink,
  SidebarSocialIcons,
} from "@components/elements";
import {
  flexStyle,
  linkStyle,
  boxStyle,
  bgImgVariants,
  profileImgVariants,
  parentVariants,
  childVariants,
  iconStyle,
} from "./HeroStyle";

const Hero = () => {
  return (
    <Box
      as="section"
      height={{ base: "87vh", md: "93vh", xl: "82.5vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        as={motion.figure}
        sx={boxStyle}
        variants={bgImgVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero-bg.svg"
          alt="Hero section background image"
          height="53.125rem"
          width="93.75rem"
          objectFit="cover"
          draggable="false"
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
      <Box display="flex" sx={flexStyle}>
        <Box
          as={motion.figure}
          variants={profileImgVariants}
          initial="hidden"
          animate="visible"
        >
          <NextImage
            src="/images/profile-pic.png"
            alt="Author Profile picture"
            height={300}
            width={300}
            quality={100}
            draggable="false"
            priority
          />
        </Box>
        <Box
          as={motion.article}
          flexDirection="column"
          gap={{ base: "0.5rem", md: "1rem", xl: "0rem" }}
          display="flex"
          textAlign={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "left",
          }}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <Text
            as={motion.p}
            casing="uppercase"
            fontSize={{ base: "1rem", md: "1.5rem" }}
            variants={childVariants}
          >
            Hi!
          </Text>
          <Flex
            as={motion.div}
            variants={childVariants}
            fontSize={{ base: "1.5rem", md: "2rem" }}
            gap="0.5rem"
            justifyContent={{
              base: "center",
              md: "center",
              lg: "center",
              xl: "left",
            }}
          >
            <Text fontWeight="bold" casing="uppercase">
              I&apos;m&nbsp;
            </Text>
            <FaQuoteLeft style={iconStyle} aria-label="Left Quote Icon" />
            <Text
              casing="uppercase"
              color="#fff"
              fontSize={{ base: "3rem", md: "4rem" }}
              fontWeight="extrabold"
              lineHeight="1.2"
            >
              Jiten
            </Text>
            <FaQuoteRight style={iconStyle} aria-label="Right Quote Icon" />
          </Flex>
          <Text
            as={motion.p}
            casing="uppercase"
            fontSize={{ base: "2.5rem", md: "3rem" }}
            fontWeight="bold"
            lineHeight="1"
            variants={childVariants}
          >
            Front End Dev
          </Text>
          <Text
            as={motion.p}
            variants={childVariants}
            m={{
              base: "0.5rem 0rem",
              md: "1rem 0rem",
              lg: "1rem 0rem",
              xl: "0.5rem 0rem",
            }}
            p={{ base: "0rem 2rem", md: "0rem 7rem", lg: "0rem" }}
            width={{ lg: "30rem" }}
          >
            A Front-End aficionado with a dignified passion for creating
            beautiful and functional UI with a modest designing aspiration.
          </Text>
          <Flex
            gap="1.5rem"
            m={{ base: "0rem auto", md: "0.5rem auto", xl: "0.5rem 0rem" }}
            justifyContent={{
              base: "center",
              md: "center",
              lg: "center",
              xs: "left",
            }}
          >
            <Link
              href="/cv/Resume.pdf"
              sx={linkStyle}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Link to Resume page"
            >
              <ResumeBtn />
            </Link>
            <HireMeBtn />
          </Flex>
        </Box>
      </Box>
      <Box
        as="aside"
        position="fixed"
        top="50%"
        right="-1.9rem"
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
