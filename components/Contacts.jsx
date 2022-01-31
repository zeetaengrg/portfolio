import { Heading, Divider, Center, FormControl, Input, Textarea, FormErrorMessage, Flex, Button, Text, Stack, Link, Image, useMediaQuery} from "@chakra-ui/react";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contacts = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

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
        _hover: { bg: "#B4A5A5", color: "#0F3460", borderColor: "#0F3460" },
        _active: { bg: "#B4A5A5", color: "#0F3460", transform: "scale(0.98)" },
    }

    const iconStyle = {
        fontSize: "2rem",
    }

    const textStyle = {
        fontSize: "1.2rem",
    }

    const flexStyle = {
        gap: "1rem",
        alignItems: "center",
    }

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
            color: "#B4A5A5",
        },
        textTransform:"none",
        _focus: { boxShadow: "none" },
    }

    const socialLinkStyle = {
        textTransform:"none",
        _focus: { boxShadow: "none" },
        fontSize: "2rem",
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        _hover: { transform: "translateY(5px)", color: "#fff", "&::after": { content: "none" }},
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
                <Divider width={{ base: "60%", md: "25%" }} />
            </Center>
            <Center>
                <Image
                    {...(isNotSmallerScreen
                        ? { display: "block" }
                        : { display: "none" })}
                    src="/images/contact.svg"
                    alt="Contact Me SVG"
                    sx={{
                        position: "absolute",
                        bottom: "3rem",
                        width: "50rem",
                        opacity: "0.2",
                    }}
                />
            </Center>
            <Flex
                p={{ base: "0 1.5rem", md: "1rem 6rem" }}
                mb="2rem"
                gap={{ base: "2rem", md: "2rem" }}
                justifyContent="center"
                direction={isNotSmallerScreen ? "row" : "column"}
            >
                <FormControl mt="2rem" action="https://formsubmit.co/zeetaen.gurung@gmail.com" method="POST">
                    <Stack spacing="4" alignItems={isNotSmallerScreen ? "left" : "center"}>
                        <Input
                            placeholder="NAME"
                            type="name"
                            id="name"
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#16213E"
                            color="#B4A5A5"
                            isRequired
                        />
                        tools
                        <Input
                            placeholder="EMAIL"
                            id="email"
                            type="email"
                            value={input}
                            onChange={handleInputChange}
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#16213E"
                            color="#B4A5A5"
                            isRequired
                        />
                        {isError && (
                            <FormErrorMessage>
                                Please enter your email
                            </FormErrorMessage>
                        )}
                        <Textarea
                            placeholder="MESSAGE"
                            id="message"
                            width={{ base: "23rem", md: "25rem" }}
                            height="10rem"
                            bgColor="#16213E"
                            color="#B4A5A5"
                            isRequired
                        />
                    </Stack>
                    <Stack alignItems={isNotSmallerScreen ? "left" : "center"}>
                        <Button
                            mt="1rem"
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#16213E"
                            color="#B4A5A5"
                            variant="outline"
                            sx={btnStyle}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send
                        </Button>
                    </Stack>
                </FormControl>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    gap={{ base: "1rem", md: "2rem" }}
                    alignItems={isNotSmallerScreen ? "left" : "center"}
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
                        <Link
                            href="mailto:zeetaen.gurung@gmail.com"
                            sx={linkStyle}
                        >
                            <Text sx={textStyle}>zeetaen.gurung@gmail.com</Text>
                        </Link>
                    </Flex>
                    <Divider />
                    <Flex gap="5rem" justifyContent="center">
                        <Link
                            sx={socialLinkStyle}
                            href="https://www.linkedin.com/in/zeetaen"
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            sx={socialLinkStyle}
                            href="https://github.com/zeetaen1989"
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            sx={socialLinkStyle}
                            href="https://codepen.io/zeetaen1989"
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                        >
                            <FaCodepen />
                        </Link>
                    </Flex>
                    <Divider />
                </Flex>
            </Flex>
        </>
    );
};

export default Contacts;
