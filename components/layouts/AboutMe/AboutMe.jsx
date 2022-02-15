import {
    Divider,
    Heading,
    Center,
    Text,
    Link,
    Flex,
    Box
} from "@chakra-ui/react";
import ContactMeBtn from "../../elements/Btn/ContactMeBtn/ContactMeBtn";
import AboutMeWrapper from "../../elements/AboutMeWrapper/AboutMeWrapper";
import AboutMeText from "../../elements/AboutMeText/AboutMeText";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading)

const MotionDivider = motion(Divider)

const MotionText = motion(Text)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const AboutMe = () => {

    const headingStyle = {
        textAlign: "center",
        textTransform: "uppercase",
        bgGradient: "linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)",
        bgClip: "text",
        fontSize: { base: "3rem", md: "4rem" },
        fontFamily: "inherit",
        marginTop: { base: "2rem", md: "0.2rem" },
    }

    return (
        <Flex direction="column">
            <MotionHeading
                id="aboutme"
                sx={headingStyle}
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
            >
                About Me
            </MotionHeading>
            <Center>
                <MotionDivider
                    width={{ base: "40%", md: "18%" }}
                    mb="0.5rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                    viewport={{ once: true }}
                />
            </Center>
            <Center>
                <MotionText
                    fontWeight="bold"
                    fontSize="1.1rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
                    viewport={{ once: true }}
                >
                    My Introduction
                </MotionText>
            </Center>
            <Box p={{ base: "1.5rem", md: "2rem 5rem", lg: "2rem 10rem" }}>
                <Flex direction="column" alignItems="center">
                    <Flex gap={{ base: "0.5rem", md: "1rem" }}>
                        <AboutMeWrapper />
                    </Flex>
                    <AboutMeText />
                    <Box>
                        <Link
                            href="#contact"
                            _hover={{ "&::after": { content: "none" } }}
                        >
                            <ContactMeBtn />
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default AboutMe;
