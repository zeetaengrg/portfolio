import { Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiSuitcaseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const MotionListItem = motion(ListItem)

const listItemVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 0.5,
            type: "tween",
        }
    }
}

const AboutMeWrapper = () => {

    const wrapperList = [
        {
            icon: <FaGraduationCap />,
            title: "Education",
            subtitle: "B.Sc. Hons"
        },
        {
            icon: <GiAchievement />,
            title: "Certifications",
            subtitle: "2+ Certs"
        },
        {
            icon: <RiSuitcaseFill />,
            title: "Completed",
            subtitle: "10+ Projects"
        }
    ]

    const listItemStyle = {
        width: "7rem",
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
        fontSize: "0.8rem",
    }

    const subTitleStyle = {
        color: "#3892f9",
        fontSize: "0.7rem"
    }

    return (
        <>
            <List>
                <Flex gap="1rem">
                    {wrapperList.map((wrapper) => (
                        <MotionListItem
                            sx={listItemStyle}
                            key={wrapper}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <ListIcon {...iconStyle}>{wrapper.icon}</ListIcon>
                            <Text {...titleStyle}>{wrapper.title}</Text>
                            <Text {...subTitleStyle}>{wrapper.subtitle}</Text>
                        </MotionListItem>
                    ))}
                </Flex>
            </List>
        </>
    );
};

export default AboutMeWrapper;
