import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GoBackBtn } from '../../elements';

const Error = () => {

    const textStyle = {
        textAlign: "center",
        color: "#fff",
        fontWeight: 'bold',
        textTransform: "uppercase",
    }

    return (
        <>
            <Box m={{ base: "1.5rem", md: "2.5rem" }} >
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={{ base: "0rem", md: "1rem" }}
                >
                    <Text
                        fontSize={{ base: "1.1rem", md: "1.3rem" }}
                        sx={textStyle}
                    >
                        Oops!!! Page Not Found
                    </Text>
                    <Image
                        src="/images/error.svg"
                        alt="404 Error"
                        width={{ base: "80%", md: "50%" }}
                        m="2.5rem 0"
                    />
                    <Text
                        sx={textStyle}
                        fontSize={{ base: "1.2rem", md: "1.3rem" }}
                    >
                        Sorry, but the page you requested was not found!
                    </Text>
                    <GoBackBtn />
                </Flex>
            </Box>
        </>
    );
};

export default Error;
