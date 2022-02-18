import { Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import DownloadBtn from "../../elements/Btn/DownloadBtn/DownloadBtn";
import HireMeBtn from "../../elements/Btn/HireMeBtn/HireMeBtn";

const MotionImage = motion(Image)

const MotionText = motion(Text)

const MotionIcon = motion(Box)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "10vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1,
            type: "spring",
            stiffness: 110,
        }
    }
}

const Intro = () => {

    const flexStyle = {
        justifyContent: "center",
        alignItems: "center",
        height: {
            base: "55vh",
            md: "60vh",
            lg: "87vh",
        },
        gap: {
            base: "1rem",
            md: "2rem",
        },
        flexDirection: {
            base: "column",
            md: "row",
        },
    };

    const imgStyle = {
        borderRadius: "50%",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.5)",
        width: {
            base: "8rem",
            md: "12rem",
            lg: "17rem",
        },
    };

    const linkStyle = {
        _hover: {
            "&::after": {
                content: "none"
            }
        }
    }

    return (
        <Box>
            <Flex sx={flexStyle}>
                <Box>
                    <MotionImage
                        sx={imgStyle}
                        src="/images/jiten.webp"
                        alt="Jiten Image"
                        variants={commonVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </Box>
                <Box>
                    <Flex
                        direction="column"
                        textAlign={{ base: "center", md: "start" }}
                    >
                        <MotionText
                            casing="uppercase"
                            fontSize={{ base: "1rem", md: "1.5rem" }}
                            variants={commonVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Hi!
                        </MotionText>
                        <Box fontSize={{ base: "1.5rem", md: "2rem" }}>
                            <Flex
                                justifyContent={{ base: "center", md: "start" }}
                            >
                                <MotionText
                                    fontWeight="bold"
                                    casing="uppercase"
                                    variants={commonVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    I&apos;m
                                </MotionText>
                                <MotionIcon
                                    variants={commonVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <FaQuoteLeft
                                        style={{
                                            marginLeft: "0.5rem",
                                            fontSize: "0.8rem",
                                        }}
                                    />
                                </MotionIcon>
                                <MotionText
                                    casing="uppercase"
                                    color="#fff"
                                    fontSize={{ base: "3rem", md: "4rem" }}
                                    fontWeight="extrabold"
                                    lineHeight="1.4"
                                    variants={commonVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Jiten
                                </MotionText>
                                <MotionIcon
                                    variants={commonVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <FaQuoteRight
                                        style={{
                                            marginLeft: "0.5rem",
                                            fontSize: "0.8rem",
                                        }}
                                    />
                                </MotionIcon>
                            </Flex>
                        </Box>
                        <Box>
                            <MotionText
                                casing="uppercase"
                                fontSize={{ base: "2.5rem", md: "3rem" }}
                                fontWeight="bold"
                                lineHeight="1"
                                variants={commonVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                Front End Dev
                            </MotionText>
                        </Box>
                        <Box>
                            <Flex
                                gap="1rem"
                                mt="1rem"
                                justifyContent={{ base: "center", md: "left" }}
                            >
                                <Link
                                    href="/cv/Resume.pdf"
                                    download
                                    sx={linkStyle}
                                >
                                    <DownloadBtn />
                                </Link>
                                <Link href="#contact" sx={linkStyle}>
                                    <HireMeBtn />
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Intro;
