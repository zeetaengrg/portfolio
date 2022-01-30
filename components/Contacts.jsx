import { Heading, Divider, Center, FormControl, Input, Textarea, FormHelperText, FormErrorMessage, Flex, FormLabel, Button, Text, Stack, Link } from "@chakra-ui/react";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contacts = () => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const isError = input === "";

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }

    const btnStyle = {
        fontSize: "1.1rem",
        textTransform: "uppercase",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#0F3460", color: "#B4A5A5", borderColor: "#0F3460" },
        _active: { bg: "none", transform: "scale(0.98)" },
    }

    return (
        <>
            <Heading
                mt={{ base: "2rem", md: "4rem" }}
                id="contact"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #B4A5A5, #3C415C, #0F3460, #16213E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                Get In Touch
            </Heading>
            <Center>
                <Divider width="25%" />
            </Center>
            <Flex p="1rem 6rem" gap="2rem" justifyContent="center">
                <FormControl mt="2rem">
                    <Stack spacing="4">
                        <Input
                            placeholder="Name"
                            type="name"
                            id="name"
                            width="25rem"
                            isRequired
                        />
                        <Input
                            placeholder="Email"
                            id="email"
                            type="email"
                            value={input}
                            onChange={handleInputChange}
                            width="25rem"
                            isRequired
                        />
                        {isError && (
                            <FormErrorMessage>
                                Please enter your email
                            </FormErrorMessage>
                        )}
                        <Textarea
                            placeholder="Message"
                            id="message"
                            width="25rem"
                            height="10rem"
                            isRequired
                        />
                    </Stack>
                    <Button
                        mt="1rem"
                        width="25rem"
                        variant="outline"
                        sx={btnStyle}
                    >
                        Send
                    </Button>
                </FormControl>
                <Flex flexDirection="column">
                    <Flex>
                        <ImLocation />
                        <Text>Pokhara, Nepal</Text>
                    </Flex>
                    <Flex>
                        <FaMobileAlt />
                        <Text>+977 9814010101</Text>
                    </Flex>
                    <Flex>
                        <HiMail />
                        <Link
                            href="mailto:zeetaen.gurung@gmail.com"
                            _hover={{
                                "&::after": { content: "none" },
                                color: "#B4A5A5",
                            }}
                            textTransform="none"
                        >
                            <Text>zeetaen.gurung@gmail.com</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Contacts;
