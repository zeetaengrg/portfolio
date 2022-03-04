import { Flex, Image, Text, Link, Box } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { DownloadBtn, HireMeBtn } from "../../elements";
import {
    blobOneVariants,
    blobTwoVariants,
    blobThreeVariants,
    commonVariants,
    blobOneStyle,
    blobTwoStyle,
    blobThreeStyle,
    flexStyle,
    imgStyle,
    linkStyle,
} from "./Styles";

const MotionImage = motion(Image);

const BlobMotionImage = motion(Image);

const MotionText = motion(Text);

const MotionIcon = motion(Box);

const Intro = () => {

    return (
        <Box>
            <Box>
                <BlobMotionImage
                    src="/images/blob1.svg"
                    alt="blob"
                    sx={blobOneStyle}
                    variants={blobOneVariants}
                    initial="start"
                    animate="finish"
                />
                <BlobMotionImage
                    src="/images/blob2.svg"
                    alt="blob"
                    sx={blobTwoStyle}
                    variants={blobTwoVariants}
                    initial="start"
                    animate="finish"
                />
                <BlobMotionImage
                    src="/images/blob3.svg"
                    alt="blob"
                    sx={blobThreeStyle}
                    variants={blobThreeVariants}
                    initial="start"
                    animate="finish"
                />
            </Box>
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
