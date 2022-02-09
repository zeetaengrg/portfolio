import { Center, Text, Flex, Image, Box } from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa';
import SocialIconLinks from '../../elements/SocialIconLinks/SocialIconLinks';

const Footer = () => {

    return (
        <Box>
            <Flex bgColor="#141E39" justifyContent="center" direction="column">
                <Center>
                    <Image src="/images/logo.png" width="69px" height="45px" alt="Logo" m={{ base: "1rem 0", md: "2rem 0" }} />
                </Center>
                <Flex m={{ base: "1rem 0", md: "0rem 0" }} gap="2rem" justifyContent="center">
                    <SocialIconLinks />
                </Flex>
                <Text fontSize="0.8rem" m={{ base: "0.5rem", md: "1rem" }} >
                    <Flex justifyContent="center" alignItems="center">
                        2022 <FaCopyright style={{margin: "0 0.5rem"}} />Jiten Gurung. All Rights Reserved.
                    </Flex>
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
