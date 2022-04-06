import { Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { DownloadBtn, HireMeBtn } from "@components/elements";
import {
  blobOneVariants,
  blobTwoVariants,
  blobThreeVariants,
  blobFourVariants,
  commonVariants,
  blobOneStyle,
  blobTwoStyle,
  blobThreeStyle,
  blobFourStyle,
  flexStyle,
  imgStyle,
  linkStyle,
} from "./HeroStyle";

const Hero = () => {
  return (
    <Box mt={{ base: "5rem", md: "0rem" }}>
      <Box>
        <Image
          as={motion.img}
          src="/images/blob1.svg"
          alt="blob"
          sx={blobOneStyle}
          variants={blobOneVariants}
          initial="start"
          animate="finish"
        />
        <Image
          as={motion.img}
          src="/images/blob2.svg"
          alt="blob"
          sx={blobTwoStyle}
          variants={blobTwoVariants}
          initial="start"
          animate="finish"
        />
        <Image
          as={motion.img}
          src="/images/blob3.svg"
          alt="blob"
          sx={blobThreeStyle}
          variants={blobThreeVariants}
          initial="start"
          animate="finish"
        />
        <Image
          as={motion.img}
          src="/images/blob4.png"
          alt="blob"
          sx={blobFourStyle}
          variants={blobFourVariants}
          initial="start"
          animate="finish"
        />
      </Box>
      <Flex sx={flexStyle}>
        <Box>
          <Image
            as={motion.img}
            sx={imgStyle}
            src="/images/jiten.webp"
            alt="Jiten Image"
            variants={commonVariants}
            initial="hidden"
            animate="visible"
            width={{ base: "8rem", md: "12rem", lg: "17rem" }}
            height="100%"
          />
        </Box>
        <Box>
          <Flex direction="column" textAlign={{ base: "center", md: "start" }}>
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
              <Flex justifyContent={{ base: "center", md: "start" }}>
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
            </Box>
            <Box>
              <Flex
                gap="2rem"
                mt={{ base: "1rem", md: "2rem" }}
                justifyContent={{ base: "center", md: "left" }}
              >
                <Link href="/cv/Resume.pdf" download sx={linkStyle}>
                  <DownloadBtn />
                </Link>
                <Link href="#contact" sx={linkStyle}>
                  <HireMeBtn />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
