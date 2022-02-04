import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight, FaCloudDownloadAlt, FaHandshake } from 'react-icons/fa';

const Intro = () => {

    // const [isNotSmallerScreen] = useMediaQuery("(min-width:500px)");

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#0F3460" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    return (
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
            <Flex
                flexDirection="column"
                textAlign={{ base: "center", md: "start" }}
            >
                <Text
                    textTransform="uppercase"
                    fontSize={{ base: "1rem", md: "1.5rem" }}
                >
                    Hi!
                </Text>
                <Text
                    textTransform="uppercase"
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    fontWeight="bold"
                >
                    <Flex justifyContent={{ base: "center", md: "start" }}>
                        I&apos;m
                        <FaQuoteLeft
                            style={{ marginLeft: "0.5rem", fontSize: "0.8rem" }}
                        />
                        <Text
                            color="#384765"
                            fontSize={{ base: "2.5rem", md: "3rem" }}
                            fontWeight="bold"
                        >
                            Jiten
                        </Text>
                        <FaQuoteRight
                            style={{ marginLeft: "0.5rem", fontSize: "0.8rem" }}
                        />
                    </Flex>
                </Text>
                <Text
                    textTransform="uppercase"
                    fontSize={{ base: "3rem", md: "4rem" }}
                    fontWeight="extrabold"
                    lineHeight="1"
                >
                    FRONT END DEV
                </Text>
                <Flex gap="1rem" mt="1rem">
                    <Link
                        href="/cv/Resume.pdf"
                        download
                        _hover={{ "&::after": { content: "none" } }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            justifyContent={{ base: "center", md: "start" }}
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
                                <FaHandshake style={{ fontSize: "1.5rem" }} />
                            }
                        >
                            Hire Me
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Intro;
