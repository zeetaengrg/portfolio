import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
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
                <NextLink href="/">
                    <Link _hover={{ textDecoration: "none" }}>About Me</Link>
                </NextLink>
                <NextLink href="#skills">
                    <Link _hover={{ textDecoration: "none" }}>Skills</Link>
                </NextLink>
                <NextLink href="#projects">
                    <Link _hover={{ textDecoration: "none" }}>Projects</Link>
                </NextLink>
                <NextLink href="#contact">
                    <Link _hover={{ textDecoration: "none" }}>Contact</Link>
                </NextLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;