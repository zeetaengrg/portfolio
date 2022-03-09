import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPrayingHands } from "react-icons/fa";
import { GoBackBtn } from "../../elements";
import { flexStyle, headingStyle, textStyle, boxStyle } from "./ThankYouStyles";

const ThankYou = () => {

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
