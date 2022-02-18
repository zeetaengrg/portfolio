import {
    Heading,
    Text,
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    Divider,
    Center,
    Box,
} from "@chakra-ui/react";
import { BsFront, BsBack } from "react-icons/bs";
import { FaTools, FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import FrontendTab from "../../elements/Tab/FrontendTab/FrontendTab";
import BackendTab from "../../elements/Tab/BackendTab/BackendTab";
import DatabaseTab from "../../elements/Tab/DatabaseTab/DatabaseTab";
import ToolsTab from "../../elements/Tab/ToolTab/ToolsTab";
import UITab from "../../elements/Tab/UITab/UITab";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading)

const MotionDivider = motion(Divider)

const MotionText = motion(Text)

const MotionTabs = motion(Tabs)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const Skills = () => {

    const tabList = ["Frontend", "UI/UX", "Tools"];

    const headingStyle = {
        textAlign: "center",
        textTransform: "uppercase",
        bgGradient: "linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)",
        bgClip: "text",
        fontSize: { base: "3rem", md: "4rem" },
        fontFamily: "inherit",
        marginTop: "2rem",
    }

    const tabStyle = {
        margin: { base: "0.5rem", md: "1.3rem" },
        fontSize: { base: "1rem", md: "1.2rem" },
        color: "#a5abbd",
        _focus: { outline: "none" },
        _active: { bg: "none" },
        _selected: { bg: "#141E39", border: "1px solid #a5abbd" },
    };

    const iconStyle = {
        marginLeft: "0.5rem"
    }

    return (
        <Box>
            <MotionHeading
                id="skills"
                sx={headingStyle}
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    type: "tween",
                }}
            >
                Tools and Technologies
            </MotionHeading>
            <Center>
                <MotionDivider
                    width="50%"
                    mb="0.5rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "tween",
                    }}
                />
            </Center>
            <Center>
                <MotionText
                    fontWeight="bold"
                    fontSize="1.1rem"
                    variants={commonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "tween",
                    }}
                >
                    My Expertise
                </MotionText>
            </Center>
            <MotionTabs
                m={{ base: "1.5rem 0", md: "1.5rem 0" }}
                variant="solid-rounded"
                align="center"
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.4,
                    duration: 0.5,
                    type: "tween",
                }}
            >
                <TabList>
                    {tabList.map((tab) => (
                        <Tab sx={tabStyle} key={tab}>
                            {tab}
                            <Box {...iconStyle}>
                                {tab === "Frontend" ? (
                                    <BsFront />
                                ) : tab === "Backend" ? (
                                    <BsBack />
                                ) : tab === "Database" ? (
                                    <FaDatabase />
                                ) : tab === "UI/UX" ? (
                                    <MdDesignServices />
                                ) : (
                                    <FaTools />
                                )}
                            </Box>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {tabList.map((tab) => (
                        <TabPanel key={tab}>
                            {tab === "Frontend" ? (
                                <FrontendTab />
                            ) : tab === "Backend" ? (
                                <BackendTab />
                            ) : tab === "Database" ? (
                                <DatabaseTab />
                            ) : tab === "UI/UX" ? (
                                <UITab />
                            ) : (
                                <ToolsTab />
                            )}
                        </TabPanel>
                    ))}
                </TabPanels>
            </MotionTabs>
        </Box>
    );
};

export default Skills;
