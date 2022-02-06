import { Box, Flex, Text, Link, Divider } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { FaMobileAlt, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactInfo = () => {

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
        <>
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
        </>
    );
};

export default ContactInfo;