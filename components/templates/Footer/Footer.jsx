import { Center, Flex, Image, Box } from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa';
import { SocialIconLinks } from '../../elements';
import { boxStyle, imgTag, imageStyle } from './FooterStyles';

const Footer = () => {
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
                <Box
                    fontSize="0.8rem"
                    mt={{ base: "0.5rem", md: "1rem" }}
                    mb={{ base: "1rem", md: "1.5rem" }}
                >
                    <Flex justifyContent="center" alignItems="center">
                        2022 <FaCopyright style={{ margin: "0 0.5rem" }} />
                        Jiten Gurung. All Rights Reserved.
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
