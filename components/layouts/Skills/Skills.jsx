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
import { motion, AnimatePresence } from "framer-motion";

// const MotionTabPanel = motion(TabPanel)

const tabVariants = {
    hidden: {
        opacity: 0,
        y: "10vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        y: "-10vh",
        transition: {
            delay: 0.2,
            duration: 0.5,
        }
    }
}

const Skills = () => {

    const tabList = ["Frontend", "Tools", "UI/UX"];

    const tabPanels = [
        {
            item: <FrontendTab />,
        },
        // {
        //     item: <BackendTab />,
        // },
        // {
        //     item: <DatabaseTab />,
        // },
        {
            item: <ToolsTab />,
        },
        {
            item: <UITab />,
        }
    ]

    const headingStyle = {
        id: "skills",
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
            <Heading sx={headingStyle}>Tools and Technologies</Heading>
            <Center>
                <Divider width="50%" mb="0.5rem" />
            </Center>
            <Center>
                <Text fontWeight="bold" fontSize="1.1rem">
                    My Tools and Technologies
                </Text>
            </Center>
            <Tabs
                m={{ base: "1.5rem 0", md: "1.5rem 0" }}
                variant="solid-rounded"
                align="center"
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
                                ) : tab === "Tools" ? (
                                    <FaTools />
                                ) : (
                                    <MdDesignServices />
                                )}
                            </Box>
                        </Tab>
                    ))}
                </TabList>
                {/* <TabPanels>
                    <AnimatePresence>
                        {tabPanels.map((panel, index) => (
                            <MotionTabPanel
                                key={index}
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {panel.item}
                            </MotionTabPanel>
                        ))}
                    </AnimatePresence>
                </TabPanels> */}
                <TabPanels>
                    <TabPanel>
                        <FrontendTab />
                    </TabPanel>
                    {/* <TabPanel>
                        <BackendTab />
                    </TabPanel>
                    <TabPanel>
                        <DatabaseTab />
                    </TabPanel> */}
                    <TabPanel>
                        <ToolsTab />
                    </TabPanel>
                    <TabPanel>
                        <UITab />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Skills;
