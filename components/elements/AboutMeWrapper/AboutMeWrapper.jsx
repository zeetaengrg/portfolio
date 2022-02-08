import { Wrap, Flex, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiSuitcaseFill } from "react-icons/ri";

const AboutMeWrapper = () => {

    const wrapperStyle = {
        bgColor: "#141E39",
        borderRadius: "0.3rem",
        border: "1px solid #a5abbd",
    }

    const aboutMeFlexStyle = {
        gap: "0.3rem",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
    }

    const iconStyle = {
        color: "#0B111E",
        fontSize: "1.5rem"
    }

    const titleStyle = {
        color: "#a5abbd",
        fontSize: "0.9rem"
    }

    const subTitleStyle = {
        color: "#3892f9",
        fontSize: "0.7rem"
    }

    return (
        <>
            <Wrap sx={wrapperStyle}>
                <Flex sx={aboutMeFlexStyle}>
                    <FaGraduationCap style={iconStyle} />
                    <Text sx={titleStyle}>Education</Text>
                    <Text sx={subTitleStyle}>BSc Hons</Text>
                </Flex>
            </Wrap>
            <Wrap sx={wrapperStyle}>
                <Flex sx={aboutMeFlexStyle}>
                    <GiAchievement style={iconStyle} />
                    <Text sx={titleStyle}>Experience</Text>
                    <Text sx={subTitleStyle}>1+ years</Text>
                </Flex>
            </Wrap>
            <Wrap sx={wrapperStyle}>
                <Flex sx={aboutMeFlexStyle}>
                    <RiSuitcaseFill style={iconStyle} />
                    <Text sx={titleStyle}>Completed</Text>
                    <Text sx={subTitleStyle}>10+ projects</Text>
                </Flex>
            </Wrap>
        </>
    );
};

export default AboutMeWrapper;
