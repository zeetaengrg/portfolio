import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LogoImage } from "../../elements" 

const MotionLink = motion(Link);

const linkVariants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 1,
            type: "spring",
            stiffness: 110,
        }
    })
}

const Navbar = () => {
    const linkItem = ["About Me", "Skills", "Projects", "Contact"];

    const linkStyle = {
        _hover: {
            textDecoration: "none",
        },
        fontSize: {
            base: "0.72rem",
            md: "0.9rem",
        },
        _focus: { boxShadow: "none" },
    };

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
