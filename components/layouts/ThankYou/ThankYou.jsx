import { Box, Center, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import { FaPrayingHands } from "react-icons/fa";
import GoBackBtn from "../../elements/Btn/GoBackBtn/GoBackBtn";

const ThankYou = () => {

    const gridStyle = {
        placeContent: "center",
        textAlign: "center",
        height: {
            base: "65.5vh",
            md: "59.9vh",
        },
        padding: {
            base: "1.5rem",
            md: "0rem 3rem"
        }
    }
    
    const headingStyle = {
        color: "#0B111E",
        fontWeight: "700",
        textTransform: "uppercase",
    }

    const boxStyle = {
        background: "#384765",
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
                        Your message has been sent successfully. I will get back to you shortly.
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
