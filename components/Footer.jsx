import { Center, Divider, Text, Flex } from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Center>
                <Divider width="95%" />
            </Center>
            <Text fontSize="0.8rem" m="0.5rem">
                <Flex justifyContent="center" alignItems="center">
                    2022 <FaCopyright style={{margin: "0 0.5rem"}} /> Jiten Gurung. All Rights Reserved.
                </Flex>
            </Text>
        </>
    );
};

export default Footer;
