import { Box, Center, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import { FaPrayingHands } from "react-icons/fa";
import GoBackBtn from "./GoBackBtn";

const ThankYou = () => {

    const gridStyle = {
        placeContent: "center",
        textAlign: "center",
        height: {
            base: "50vh",
            md: "55vh"
        },
    }
    
    const headingStyle = {
        color: "#0B111E",
        fontWeight: "700",
        textTransform: "uppercase",
    }

    const boxStyle = {
        background: "#384765",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        margin: "1.5rem 0"
    }

    const textStyle = {
        fontSize: "1.2rem",
        color: "#fff",
        margin: "1rem",
    }

    return (
        <>
            <Grid sx={gridStyle}>
                <Box sx={boxStyle}>
                    <Heading sx={headingStyle}>
                        Thank You!!!
                    </Heading>
                    <Center>
                        <Divider width="40%" />
                    </Center>
                    <Text sx={textStyle}>
                        Your message has been sent successfully.
                        <br />
                        I will get back to you shortly.
                    </Text>
                    <Center>
                        <FaPrayingHands style={{ fontSize: "2rem" }} />
                    </Center>
                </Box>
                <GoBackBtn />
            </Grid>
        </>
    );
};

export default ThankYou;
