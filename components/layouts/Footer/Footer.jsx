import { Center, Text, Flex, Image, Box } from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa';
import { SocialIconLinks } from '../../elements';

const Footer = () => {

    const boxStyle = {
        backgroundColor: {
            base: "#141e39",
            md: "transparent",
        },
    }

    const imgTag = {
        position: "absolute",
        bottom: "0",
        width: "100vw",
        display: {
            base: "none",
            md: "block"
        }
    }

    const imageStyle = {
        width: "60px",
        height: "45px",
        m: {
            base: "1rem 0", md: "2rem 0"
        }
    }

    return (
        <Box sx={boxStyle}>
            <Image src="/images/wave.svg" alt="waves" sx={imgTag} />
            <Flex
                justifyContent="center"
                direction="column"
                position="relative"
            >
                <Center>
                    <Image src="/images/logo.svg" alt="Logo" sx={imageStyle} />
                </Center>
                <Flex
                    m={{ base: "1rem 0", md: "0.5rem 0" }}
                    gap="2rem"
                    justifyContent="center"
                >
                    <SocialIconLinks />
                </Flex>
                <Text
                    fontSize="0.8rem"
                    mt={{ base: "0.5rem", md: "1rem" }}
                    mb={{ base: "1rem", md: "1.5rem" }}
                >
                    <Flex justifyContent="center" alignItems="center">
                        2022 <FaCopyright style={{ margin: "0 0.5rem" }} />
                        Jiten Gurung. All Rights Reserved.
                    </Flex>
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
