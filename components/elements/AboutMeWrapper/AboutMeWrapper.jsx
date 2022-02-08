import { Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiSuitcaseFill } from "react-icons/ri";

const AboutMeWrapper = () => {

    const listItemStyle = {
        bgColor: "#141E39",
        borderRadius: "0.3rem",
        border: "1px solid #a5abbd",
        padding: "0.8rem",
        display: "flex",
        gap: "0.5rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    const iconStyle = {
        color: "#0B111E",
        fontSize: "1.5rem",
        marginInlineEnd: "0rem"
    }

    const titleStyle = {
        color: "#a5abbd",
        fontSize: "0.9rem",
        fontWeight: "bold",
    }

    const subTitleStyle = {
        color: "#3892f9",
        fontSize: "0.7rem"
    }

    return (
        <>
            <Flex gap="1rem">
                <List>
                    <ListItem sx={listItemStyle} >
                        <ListIcon as={FaGraduationCap} sx={iconStyle} />
                        <Text sx={titleStyle}>Education</Text>
                        <Text sx={subTitleStyle}>BSc Hons</Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem sx={listItemStyle}>
                        <ListIcon as={GiAchievement} sx={iconStyle} />
                        <Text sx={titleStyle}>Experience</Text>
                        <Text sx={subTitleStyle}>1+ Years</Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem sx={listItemStyle}>
                        <ListIcon as={RiSuitcaseFill} sx={iconStyle} />
                        <Text sx={titleStyle}>Completed</Text>
                        <Text sx={subTitleStyle}>10+ Projects</Text>
                    </ListItem>
                </List>
            </Flex>
        </>
    );
};

export default AboutMeWrapper;
