import {
    Center,
    Flex,
    Image,
    Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ContactForm, ContactInfo } from "../../modules";
import { Header, LineDivider, SubHeader } from "../../elements";
import { imgVariants, imgStyle, flexStyle } from "./ContactsStyles";

const MotionImage = motion(Image)

const Contacts = () => {

    return (
        <Box position="relative" mb="4rem" zIndex="999">
            <Header heading="Get In Touch" id="contacts" />
            <LineDivider />
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
