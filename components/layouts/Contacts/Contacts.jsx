import {
    Center,
    Flex,
    Image,
    Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ContactForm, ContactInfo } from "../../modules";
import { Header, LineDivider, SubHeader } from "../../elements";

const MotionImage = motion(Image)

const imgVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.4,
            duration: 0.5,
            type: "spring",
            stiffness: 110
        }
    }

}

const Contacts = () => {

    const imgStyle = {
        display: {
            base: "none",
            md: "block"
        },
        position: "absolute",
        bottom: "5rem",
        width: "50rem",
        opacity: "0.2"
    }

    const flexStyle = {
        p: { base: "1.5rem", md: "2rem 0rem" },
        gap: { base: "2rem" },
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { base: "column", md: "row" },
        position: "relative",
    }

    return (
        <Box position="relative" mb="4rem" zIndex="999">
            <Header heading="Get In Touch" id="contact" />
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
