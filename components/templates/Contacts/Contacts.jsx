import { motion } from "framer-motion";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { Header, LineDivider, SubHeader } from "@components/elements";
import { ContactForm, ContactInfo } from "@components/modules";
import { flexStyle, imgStyle, imgVariants } from "./ContactsStyles";

const MotionImage = motion(Image);

const Contacts = () => {
  return (
    <Box
      as="section"
      id="contacts"
      position="relative"
      zIndex="10"
      aria-labelledby="contacts-title"
    >
      <Header id="contacts-title" heading="Get In Touch" />
      <LineDivider width={{ base: "60%", md: "40%", lg: "25%" }} />
      <SubHeader subHeading="Let's Talk" />
      <Center as="figure">
        <MotionImage
          src="/images/contact.webp"
          alt="Contact Me SVG"
          sx={imgStyle}
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          draggable="false"
        />
      </Center>
      <Flex as="section" sx={flexStyle}>
        <ContactForm />
        <ContactInfo />
      </Flex>
    </Box>
  );
};

export default Contacts;
