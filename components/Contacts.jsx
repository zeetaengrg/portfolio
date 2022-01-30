import { Heading, Divider, Center, FormControl, Input, Textarea, FormHelperText, FormErrorMessage, Flex, FormLabel, Button, Text, Stack, Link } from "@chakra-ui/react";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contacts = () => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const isError = input === ""; 

    return (
        <>
            <Heading
                mt={{ base: "2rem", md: "4rem" }}
                id="projects"
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
            <Flex p="2rem 6rem" gap="2rem" justifyContent="center">
                <FormControl mt="2rem">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input placeholder="Name" type="name" id="name" isRequired />
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        placeholder="Email"
                        id="email"
                        type="email"
                        value={input}
                        onChange={handleInputChange}
                        isRequired
                    />
                    {isError && <FormErrorMessage>Please enter your email</FormErrorMessage>}
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea placeholder="Message" id="message" />
                    <Button variantColor="teal" mt="2rem">Send</Button>
                </FormControl>
                <Flex flexDirection="column">
                    <Flex>
                        <ImLocation />
                        <Text>
                            Pokhara, Nepal
                        </Text>
                    </Flex>
                    <Flex>
                        <FaMobileAlt />
                        <Text>
                            +977 9814010101
                        </Text>
                    </Flex>
                    <Flex>
                        <HiMail />
                        <Text>
                            zeetaen.gurung@gmail.com
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Contacts;
