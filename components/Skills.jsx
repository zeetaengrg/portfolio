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
import BackendTab from "./BackendTab";
import DatabaseTab from "./DatabaseTab";
import FrontendTab from "./FrontendTab";
import ToolsTab from "./ToolsTab";
import UITab from "./UITab";

const Skills = () => {

    const tabStyle = {
        fontSize: { base: "1rem", md: "1.2rem" },
        color: "#a5abbd",
        margin: { base: "0.5rem", md: "1rem" },
        _focus: { outline: "none" },
        _active: { bg: "none" },
        _selected: { bg: "#141E39", border: "1px solid #a5abbd" },
    };

    const flexStyle = {
        justifyContent: "center",
        gap: "2rem",
        flexWrap: {
            base: "wrap",
            md: "nowrap",
        }
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
            >
                Tools and Technologies
            </Heading>
            <Center>
                <Divider width="50%" mb="0.5rem" />
            </Center>
            <Center>
                <Text>My Tools and Technologies</Text>
            </Center>
            <Tabs
                m={{ base: "1.5rem 0", md: "2rem 0" }}
                variant="solid-rounded"
                align="center"
                isLazy
            >
                <TabList>
                    <Tab sx={tabStyle}>Frontend</Tab>
                    {/* <Tab sx={tabStyle}>Back-End</Tab> */}
                    {/* <Tab sx={tabStyle}>Database</Tab> */}
                    <Tab sx={tabStyle}>Tools</Tab>
                    <Tab sx={tabStyle}>UI</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex sx={flexStyle} >
                            <FrontendTab />
                        </Flex>
                    </TabPanel>
                    {/* <TabPanel>
                        <Flex sx={flexStyle} >
                            <BackendTab />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex sx={flexStyle} >
                            <DatabaseTab />
                        </Flex>
                    </TabPanel> */}
                    <TabPanel>
                        <Flex sx={flexStyle} >
                            <ToolsTab />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex sx={flexStyle} >
                            <UITab />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Skills;
