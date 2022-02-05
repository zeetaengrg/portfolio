import { Button, Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import {
    FaQuoteLeft,
    FaQuoteRight,
    FaCloudDownloadAlt,
    FaHandshake,
} from "react-icons/fa";

const Intro = () => {
    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#141E39",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    return (
        <Box>
            <Flex
                justifyContent="center"
                alignItems="center"
                height={{ base: "55vh", md: "60vh", lg: "87vh" }}
                gap={{ base: "1rem", md: "2rem", lg: "2rem" }}
                direction={{ base: "column", md: "row" }}
            >
                <Image
                    src="/images/jiten.jpg"
                    alt="Jiten Image"
                    borderRadius="50%"
                    boxShadow="0px 0px 10px 10px rgba(0,0,0,0.5)"
                    width={{ base: "8rem", md: "12rem", lg: "17rem" }}
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
                        <Text
                            casing="uppercase"
                            fontSize={{ base: "1.5rem", md: "2rem" }}
                            fontWeight="bold"
                        >
                            <Flex
                                justifyContent={{ base: "center", md: "start" }}
                            >
                                I&apos;m
                                <FaQuoteLeft
                                    style={{
                                        marginLeft: "0.5rem",
                                        fontSize: "0.8rem",
                                    }}
                                />
                                <Text
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
                        </Text>
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
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        justifyContent={{
                                            base: "center",
                                            md: "start",
                                        }}
                                        sx={btnStyle}
                                        rightIcon={
                                            <FaCloudDownloadAlt
                                                style={{ fontSize: "1.5rem" }}
                                            />
                                        }
                                    >
                                        Download CV
                                    </Button>
                                </Link>
                                <Link
                                    href="#contact"
                                    _hover={{ "&::after": { content: "none" } }}
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        sx={btnStyle}
                                        rightIcon={
                                            <FaHandshake
                                                style={{ fontSize: "1.5rem" }}
                                            />
                                        }
                                    >
                                        Hire Me
                                    </Button>
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
