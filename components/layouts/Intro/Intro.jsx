import { Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import {
    FaQuoteLeft,
    FaQuoteRight
} from "react-icons/fa";
// import NextImage from "next/image";
// import profileImg from "../../../public/images/jiten.jpg";
import DownloadBtn from "../../elements/Btn/DownloadBtn/DownloadBtn";
import HireMeBtn from "../../elements/Btn/HireMeBtn/HireMeBtn";

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
        }
    }

    const imgStyle = {
        borderRadius: "50%",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.5)",
        width: {
            base: "8rem",
            md: "12rem",
            lg: "17rem",
        }
    }

    return (
        <Box>
            <Flex
                sx={flexStyle}
            >
                <Image
                    sx={imgStyle}
                    src= "/images/jiten.webp"
                    alt= "Jiten Image"
                />
                <Box>
                    <Flex
                        direction="column"
                        textAlign={{ base: "center", md: "start" }}
                    >
                        <Text
                            casing="uppercase"
                            fontSize={{ base: "1rem", md: "1.5rem" }}
                        >
                            Hi!
                        </Text>
                        <Box
                            fontSize={{ base: "1.5rem", md: "2rem" }}
                        >
                            <Flex
                                justifyContent={{ base: "center", md: "start" }}
                            >
                                <Text
                                    fontWeight="bold"
                                    casing="uppercase"
                                >
                                    I&apos;m
                                </Text>
                                <FaQuoteLeft
                                        style={{
                                            marginLeft: "0.5rem",
                                            fontSize: "0.8rem",
                                        }}
                                    />
                                <Text
                                    casing="uppercase"
                                    color="#fff"
                                    fontSize={{ base: "3rem", md: "4rem" }}
                                    fontWeight="extrabold"
                                    lineHeight="1.4"
                                >
                                    Jiten
                                </Text>
                                <FaQuoteRight
                                    style={{
                                        marginLeft: "0.5rem",
                                        fontSize: "0.8rem",
                                    }}
                                />
                            </Flex>
                        </Box>
                        <Box>
                            <Text
                                casing="uppercase"
                                fontSize={{ base: "2.5rem", md: "3rem" }}
                                fontWeight="bold"
                                lineHeight="1"
                                color="#384765"
                            >
                                Front End Dev
                            </Text>
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
                                    _hover={{ "&::after": { content: "none" } }}
                                >
                                    <DownloadBtn />
                                </Link>
                                <Link
                                    href="#contact"
                                    _hover={{ "&::after": { content: "none" } }}
                                >
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
