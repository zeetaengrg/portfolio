import {
    Heading,
    Text,
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
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

const Skills = () => {

    const tabList = ["Frontend", "Tools", "UI/UX"];

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
            <Heading
                id="skills"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #a5abbd, #384765, #152641, #0B111E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
                mt="2rem"
            >
                Tools and Technologies
            </Heading>
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
