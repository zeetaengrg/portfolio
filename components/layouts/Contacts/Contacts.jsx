import {
    Heading,
    Divider,
    Center,
    Flex,
    Text,
    Image,
    Box
} from "@chakra-ui/react";
import ContactForm from "../../modules/ContactForm/ContactForm";
import ContactInfo from "../../modules/ContactInfo/ContactInfo";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading)

const MotionDivider = motion(Divider)

const MotionText = motion(Text)

const MotionImage = motion(Image)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

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

    const headingStyle = {
        textAlign: "center",
        textTransform: "uppercase",
        bgGradient: "linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)",
        bgClip: "text",
        fontFamily: "inherit",
        fontSize: { base: "3rem", md: "4rem" },
        mt: { base: "3rem", md: "5rem" },
    }

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
        <Box position="relative">
            <MotionHeading
                id="contact"
                sx={headingStyle}
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    type: "tween",
                }}
            >
                Get In Touch
            </MotionHeading>
            <Center>
                <MotionDivider
                    width={{ base: "60%", md: "25%" }}
                    mb="0.5rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "tween",
                    }}
                />
            </Center>
            <Center>
                <MotionText
                    fontWeight="bold"
                    fontSize="1.1rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "tween",
                    }}
                >
                    Contact Me
                </MotionText>
            </Center>
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
