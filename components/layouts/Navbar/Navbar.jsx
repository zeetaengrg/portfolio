import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import LogoImage from "../../elements/LogoImage/LogoImage";

const Navbar = () => {

    const linkStyle = {
        _hover: {
            textDecoration: "none",
        },
        fontSize: {
            base: "0.72rem",
            md: "0.9rem",
        }
    };

    return (
        <Flex p={{ base: "0.9rem 1.2rem", md: "1rem 4rem", lg: "1rem 6rem" }}>
            <Box>
                <LogoImage />
            </Box>
            <Spacer />
            <Flex gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }} alignItems="center">
                <Link sx={linkStyle} href="#about">About Me</Link>
                <Link sx={linkStyle} href="#skills">Skills</Link>
                <Link sx={linkStyle} href="#projects">Projects</Link>
                <Link sx={linkStyle} href="#contact">Contact</Link>
            </Flex>
        </Flex>
    );
};

export default Navbar;
