import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {

    const linkStyle = {
        _hover: {
            textDecoration: "none",
        }
    };

    return (
        <Flex p={{ base: "1rem 0.5rem", md: "1rem 4rem", lg: "1rem 8rem" }}>
            <Box>
                <NextLink href="/">
                    <Link>
                        <Image src="/images/logo.png" alt="Logo" />
                    </Link>
                </NextLink>
            </Box>
            <Spacer />
            <Flex gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }} alignItems="center">
                <NextLink href="/about-me/about">
                    <Link sx={linkStyle}>About Me</Link>
                </NextLink>
                <NextLink href="/#skills">
                    <Link sx={linkStyle}>Skills</Link>
                </NextLink>
                <NextLink href="/#projects">
                    <Link sx={linkStyle}>Projects</Link>
                </NextLink>
                <NextLink href="/#contact">
                    <Link sx={linkStyle}>Contact</Link>
                </NextLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;
