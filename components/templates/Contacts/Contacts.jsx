import { Center, Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ContactForm, ContactInfo } from "@components/modules";
import { Header, LineDivider, SubHeader } from "@components/elements";
import { imgVariants, imgStyle, flexStyle } from "./ContactsStyles";

const MotionImage = motion(Image);

const Contacts = () => {
  return (
    <Box
      position="relative"
      mb={{ base: "0rem", lg: "4rem" }}
      mt={{ base: "3rem", md: "6rem" }}
      zIndex="10"
      id="contacts"
    >
      <Header heading="Get In Touch" />
      <LineDivider width={{ base: "60%", md: "40%", lg: "25%" }} />
      <SubHeader subHeading="Let's Talk" />
      <Center>
        <MotionImage
          src="/images/contact.webp"
          alt="Contact Me SVG"
          sx={imgStyle}
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </Center>
      <Flex sx={flexStyle}>
        <ContactForm />
        <ContactInfo />
      </Flex>
    </Box>
  );
};

export default Contacts;
