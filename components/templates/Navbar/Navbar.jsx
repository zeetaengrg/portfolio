import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LogoImage } from "../../elements" 
import { linkVariants, linkItem, linkStyle } from "./NavbarStyles";

const MotionLink = motion(Link);

const Navbar = () => {

    return (
        <Flex
            p={{ base: "0.5rem 1rem", md: "0.8rem 4rem", lg: "0.8rem 6rem" }}
        >
            <Box>
                <LogoImage />
            </Box>
            <Spacer />
            <Flex
                gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }}
                alignItems="center"
            >
                {linkItem.map((item, i) => (
                    <MotionLink
                        key={item}
                        sx={linkStyle}
                        href={`/#${item.replace(/\s+/g, "").toLowerCase()}`}
                        variants={linkVariants}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                    >
                        {item}
                    </MotionLink>
                ))}
            </Flex>
        </Flex>
    );
};

export default Navbar;
