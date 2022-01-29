import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight, FaCloudDownloadAlt, FaHandshake } from 'react-icons/fa';

const Intro = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="85vh"
            gap="2rem"
        >
            <Image
                src="/images/img.jpg"
                alt="Jiten Image"
                sx={{
                    borderRadius: "50%",
                    boxShadow: "0.125rem 0.188rem 0.625rem black",
                }}
            />
            <Flex flexDirection="column">
                <Text textTransform="uppercase" fontSize="1.5rem">
                    Hi!
                </Text>
                <Text
                    textTransform="uppercase"
                    fontSize="2rem"
                    fontWeight="bold"
                >
                    <Flex>
                        I&apos;m
                        <FaQuoteLeft
                            style={{ marginLeft: "0.8rem", fontSize: "1rem" }}
                        />
                        <Text
                            color="#3C415C"
                            fontSize="3.5rem"
                            fontWeight="bold"
                        >
                            Jiten
                        </Text>
                        <FaQuoteRight style={{ fontSize: "1rem" }} />
                    </Flex>
                </Text>
                <Text
                    textTransform="uppercase"
                    fontSize="4.5rem"
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
                                color: "#3C415C",
                                borderColor: "#3C415C",
                            }}
                            _active={{
                                bg: "none",
                                color: "#3C415C",
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
                                color: "#3C415C",
                                borderColor: "#3C415C",
                            }}
                            _active={{
                                bg: "none",
                                color: "#3C415C",
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
