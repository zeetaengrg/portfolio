import NextLink from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';

const Error = () => {

    const textStyle = {
        textAlign: "center",
        color: "#fff",
        fontWeight: 'bold',
        textTransform: "uppercase",
    }

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        },
        textTransform: "none",
        _focus: { boxShadow: "none" },
    };

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#141E39",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    return (
        <>
            <Box m={{ base: "1.5rem", md: "2.5rem" }} >
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={{ base: "0rem", md: "1rem" }}
                >
                    <Text
                        fontSize={{ base: "1.1rem", md: "1.3rem" }}
                        sx={textStyle}
                    >
                        Oops!!! Page Not Found
                    </Text>
                    <Image
                        src="/images/error.svg"
                        alt="404 Error"
                        width={{ base: "80%", md: "50%" }}
                        m="2.5rem 0"
                    />
                    <Text
                        sx={textStyle}
                        fontSize={{ base: "1.2rem", md: "1.3rem" }}
                    >
                        Sorry, but the page you requested was not found!
                    </Text>
                    <Link sx={linkStyle} href="/">
                        <Button
                            m={{ base: "2.69rem 0", md: "0.5rem 0" }}
                            variant="outline"
                            sx={btnStyle}
                            rightIcon={<RiArrowGoBackLine />}
                        >
                            Go Back
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </>
    );
};

export default Error;