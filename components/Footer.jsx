import { Center, Text, Flex, Image, Grid, Link } from '@chakra-ui/react';
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
        <>
            <Grid bgColor="#141E39" placeContent="center">
                <Center>
                    <Image src="/images/logo.png" alt="logo" m="2rem 0" />
                </Center>
                <Flex mb="1rem" gap="2rem" justifyContent="center">
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
                <Text fontSize="0.8rem" m="0.5rem">
                    <Flex justifyContent="center" alignItems="center">
                        2022 <FaCopyright style={{margin: "0 0.5rem"}} /> Jiten Gurung. All Rights Reserved.
                    </Flex>
                   </Text>
            </Grid>
        </>
    );
};

export default Footer;
