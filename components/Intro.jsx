import { Button, Flex, Image, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight, FaCloudDownloadAlt, FaHandshake } from 'react-icons/fa';

const Intro = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height={{ base: "55vh", md: "60vh", lg: "87vh" }}
            gap={{ base: "1rem", md: "2rem", lg: "2rem" }}
            direction={isNotSmallerScreen ? "row" : "column"}
        >
            <Image
                src="/images/img.jpg"
                alt="Jiten Image"
                borderRadius="50%"
                boxShadow="0px 0px 10px rgba(0,0,0,0.5)"
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
                            style={
                                isNotSmallerScreen
                                    ? {
                                        marginLeft: "0.8rem",
                                        fontSize: "1rem",
                                      }
                                    : { marginLeft: "0.5rem", fontSize: "0.8rem" }
                            }
                        />
                        <Text
                            color="#0F3460"
                            fontSize={{ base: "2.5rem", md: "3rem" }}
                            fontWeight="bold"
                        >
                            Jiten
                        </Text>
                        <FaQuoteRight 
                            style={
                                isNotSmallerScreen
                                    ? {
                                        marginLeft: "0.8rem",
                                        fontSize: "1rem",
                                      }
                                    : { marginLeft: "0.5rem", fontSize: "0.8rem" }
                            }
                        />
                    </Flex>
                </Text>
                <Text
                    textTransform="uppercase"
                    fontSize={{ base: "3rem", md: "4.5rem" }}
                    fontWeight="bold"
                    lineHeight="1"
                >
                    Front End Dev
                </Text>
                <Flex gap="1rem" mt="1rem">
                    <Link
                        href="/cv/Resume.pdf"
                        download
                        _hover={{ "&::after": { content: "none" } }}
                    >
                        <Button
                            variant="outline"
                            fontSize="1.2rem"
                            size="lg"
                            _focus={{ boxShadow: "none" }}
                            _hover={{
                                bg: "none",
                                color: "#0F3460",
                                borderColor: "#0F3460",
                            }}
                            _active={{
                                bg: "none",
                                color: "#0F3460",
                                transform: "scale(0.98)",
                            }}
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
                            fontSize="1.2rem"
                            size="lg"
                            _focus={{ boxShadow: "none" }}
                            _hover={{
                                bg: "none",
                                color: "#0F3460",
                                borderColor: "#0F3460",
                            }}
                            _active={{
                                bg: "none",
                                color: "#0F3460",
                                transform: "scale(0.98)",
                            }}
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
