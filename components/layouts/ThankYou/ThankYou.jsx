import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPrayingHands } from "react-icons/fa";
import { GoBackBtn } from "../../elements";

const ThankYou = () => {

    const flexStyle = {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: {
            base: "68.9vh",
            md: "66.5vh",
            lg: "66.5vh"
        },
    }
    
    const headingStyle = {
        color: "#0B111E",
        fontWeight: "700",
        textTransform: "uppercase",
    }

    const boxStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#384765",
        width: {
            base: "80%",
            md: "40%"
        },
        padding: {
            base: "0.5rem",
            md: "1.5rem"
        },
        borderRadius: "0.5rem",
        margin: {
            base: "1rem 0",
            md: "1.5rem 0"
        }
    }

    const textStyle = {
        fontSize: "1.2rem",
        color: "#fff",
        margin: "1rem",
        textAlign: "center",
    }

    return (
        <>
            <Flex sx={flexStyle}>
                <Box sx={boxStyle}>
                    <Heading sx={headingStyle}>
                        Thank You!!!
                    </Heading>
                        <Divider width="60%" />
                    <Text sx={textStyle}>
                        Your message has been sent successfully. I will get back to you shortly.
                    </Text>
                    <FaPrayingHands style={{ fontSize: "2rem" }} />
                </Box>
                <GoBackBtn />
            </Flex>
        </>
    );
};

export default ThankYou;
