import { Center, Text, Flex, Image, Link, Box } from '@chakra-ui/react';
import { FaCopyright, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {

    const iconStyle = {
        fontSize: "1.5rem",
    }

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        }
    }

    return (
        <Box>
            <Flex bgColor="#141E39" justifyContent="center" direction="column">
                <Center>
                    <Image src="/images/logo.png" alt="logo" m={{ base: "1rem 0", md: "2rem 0" }} />
                </Center>
                <Flex m={{ base: "1rem 0", md: "0.5rem 0" }} gap="2rem" justifyContent="center">
                    <Link href="https://www.facebook.com/zeetaen/" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                        <FaFacebookSquare style={iconStyle} />
                    </Link>
                    <Link href="https://www.instagram.com/zeetaen/" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                        <FaInstagramSquare style={iconStyle} />
                    </Link>
                    <Link href="https://www.youtube.com/c/ZeetaenGurung" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                        <FaYoutubeSquare style={iconStyle} />
                    </Link>
                </Flex>
                <Text fontSize="0.8rem" m={{ base: "0.5rem", md: "1rem" }} >
                    <Flex justifyContent="center" alignItems="center">
                        2022 <FaCopyright style={{margin: "0 0.5rem"}} /> Jiten Gurung. All Rights Reserved.
                    </Flex>
                   </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
