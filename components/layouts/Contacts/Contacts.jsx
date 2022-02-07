import {
    Heading,
    Divider,
    Center,
    Flex,
    Text,
    Image,
    Box
} from "@chakra-ui/react";
import Form from "../../modules/Form/Form";
import ContactInfo from "../../modules/ContactInfo/ContactInfo";

const Contacts = () => {

    return (
        <Box position="relative">
            <Heading
                id="contact"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
                mt={{ base: "3rem", md: "5rem" }}
            >
                Get In Touch
            </Heading>
            <Center>
                <Divider width={{ base: "60%", md: "25%" }} mb="0.5rem" />
            </Center>
            <Center>
                <Text>Contact Me</Text>
            </Center>
            <Center>
                <Image
                    display={{ base: "none", md: "block" }}
                    src="/images/contact.webp"
                    alt="Contact Me SVG"
                    sx={{
                        position: "absolute",
                        bottom: "4rem",
                        width: "50rem",
                        opacity: "0.2",
                    }}
                />
            </Center>
            <Flex
                m={{ base: "1.5rem", md: "3rem 0rem" }}
                gap={{ base: "2rem" }}
                justifyContent="space-around"
                alignItems="center"
                direction={{ base: "column", md: "row" }}
                position="relative"
            >
                <Form />
                <ContactInfo />
            </Flex>
        </Box>
    );
};

export default Contacts;
