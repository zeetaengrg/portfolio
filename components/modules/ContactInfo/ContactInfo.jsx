import { Box, Flex, Text, Link, Divider } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { linkStyle } from "@components/elements";
import {
  commonVariants,
  links,
  iconStyle,
  textStyle,
  flexStyle,
  socialLinkStyle,
} from "./ContactInfoStyles";

const MotionFlex = motion(Flex);

const ContactInfo = () => {
  return (
    <>
      <Box>
        <MotionFlex
          flexDirection="column"
          justifyContent="center"
          gap={{ base: "1rem", md: "2rem" }}
          alignItems={{ base: "center" }}
          variants={commonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "tween",
          }}
        >
          <Box>
            <Flex
              direction="column"
              justifyContent="center"
              gap={{ base: "1rem", md: "2rem" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Flex sx={flexStyle}>
                <ImLocation style={iconStyle} />
                <Text sx={textStyle}>Pokhara, Nepal</Text>
              </Flex>
              <Flex sx={flexStyle}>
                <FaMobileAlt style={iconStyle} />
                <Text sx={textStyle}>+977 9803709974</Text>
              </Flex>
              <Flex sx={flexStyle}>
                <HiMail style={iconStyle} />
                <Link href="mailto:zeetaen.gurung@gmail.com" sx={linkStyle}>
                  <Text sx={textStyle}>zeetaen.gurung@gmail.com</Text>
                </Link>
              </Flex>
            </Flex>
          </Box>
          <Divider />
          <Box>
            <Flex gap="5rem">
              {links.map((link) => (
                <Link
                  href={link.url}
                  aria-label={link.name}
                  key={link.name}
                  {...socialLinkStyle}
                >
                  {link.name === "LinkedIn Icon" ? (
                    <FaLinkedinIn />
                  ) : link.name === "Github Icon" ? (
                    <FaGithub />
                  ) : (
                    <FaCodepen />
                  )}
                </Link>
              ))}
            </Flex>
          </Box>
          <Divider />
        </MotionFlex>
      </Box>
    </>
  );
};

export default ContactInfo;
