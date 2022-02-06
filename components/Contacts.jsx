import {
    Heading,
    Divider,
    Center,
    Flex,
    Text,
    Link,
    Image,
    Box
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Form from "./Form";

const Contacts = () => {

    const iconStyle = {
        fontSize: "2rem",
    };

    const textStyle = {
        fontSize: "1.2rem",
    };

    const flexStyle = {
        gap: "1rem",
        alignItems: "center",
    };

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        },
        textTransform: "none",
        _focus: { boxShadow: "none" },
    };

    const socialLinkStyle = {
        textTransform: "none",
        _focus: { boxShadow: "none" },
        fontSize: "2rem",
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        _hover: {
            transform: "translateY(5px)",
            color: "#fff",
            "&::after": { content: "none" },
        },
    };

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
                    src="/images/contact.svg"
                    alt="Contact Me SVG"
                    sx={{
                        position: "absolute",
                        bottom: "1rem",
                        width: "50rem",
                        opacity: "0.2",
                    }}
                />
            </Center>
            <Flex
                m={{ base: "2rem 1.5rem", md: "5rem 6rem" }}
                gap={{ base: "2rem", md: "2rem" }}
                justifyContent="center"
                alignItems="center"
                direction={{ base: "column", md: "row" }}
                position="relative"
            >
                <FormControl>
                    <Stack
                        spacing="4"
                        alignItems={{ base: "center", md: "flex-start" }}
                    >
                        
                        <Input
                            placeholder="NAME"
                            name="name"
                            type="name"
                            id="name"
                            value={name}
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#141E39"
                            color="#a5abbd"
                            onChange={handleNameChange}
                            isRequired
                        />
                        <Input
                            placeholder="EMAIL"
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#141E39"
                            color="#a5abbd"
                            isRequired
                        />
                        <Textarea
                            placeholder="MESSAGE"
                            name="message"
                            id="message"
                            value={message}
                            width={{ base: "23rem", md: "25rem" }}
                            height="10rem"
                            bgColor="#141E39"
                            color="#a5abbd"
                            onChange={handleMessageChange}
                            isRequired
                        />
                    </Stack>
                    <Stack alignItems={{ base: "center", md: "flex-start" }}>
                        <Button
                            mt="1rem"
                            width={{ base: "23rem", md: "25rem" }}
                            bgColor="#141E39"
                            color="#a5abbd"
                            variant="outline"
                            sx={btnStyle}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send
                        </Button>
                    </Stack>
                </FormControl>
                <Box>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        gap={{ base: "1rem", md: "2rem" }}
                        alignItems={{ base: "center" }}
                    >
                        <Box>
                            <Flex direction="column" justifyContent="center" gap={{ base: "1rem", md: "2rem" }} alignItems={{ base: "center", md: "flex-start" }}>
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
                            </Flex>
                        </Box>
                        <Divider />
                        <Box>
                            <Flex gap="5rem">
                                <Link
                                    sx={socialLinkStyle}
                                    href="https://www.linkedin.com/in/zeetaen1878/"
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
                        </Box>
                        <Divider />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Contacts;
