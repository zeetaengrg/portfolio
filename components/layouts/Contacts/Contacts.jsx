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

const Contacts = () => {

    const headingStyle = {
        id: "contacts",
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
        opacity: "0.2",
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
            <Heading sx={headingStyle}>Get In Touch</Heading>
            <Center>
                <Divider width={{ base: "60%", md: "25%" }} mb="0.5rem" />
            </Center>
            <Center>
                <Text fontWeight="bold" fontSize="1.1rem">
                    Contact Me
                </Text>
            </Center>
            <Center>
                <Image
                    src="/images/contact.webp"
                    alt="Contact Me SVG"
                    sx={imgStyle}
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
