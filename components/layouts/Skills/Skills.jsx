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
import { BsFront } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import FrontendTab from "../../elements/Tab/FrontendTab/FrontendTab";
import BackendTab from "../../elements/Tab/BackendTab/BackendTab";
import DatabaseTab from "../../elements/Tab/DatabaseTab/DatabaseTab";
import ToolsTab from "../../elements/Tab/ToolTab/ToolsTab";
import UITab from "../../elements/Tab/UITab/UITab";

const Skills = () => {

    const tabStyle = {
        fontSize: { base: "1rem", md: "1.2rem" },
        color: "#a5abbd",
        margin: { base: "0.5rem", md: "1.3rem" },
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
                <Text fontWeight="bold" fontSize="1.1rem">My Tools and Technologies</Text>
            </Center>
            <Tabs
                m={{ base: "1.5rem 0", md: "1.5rem 0" }}
                variant="solid-rounded"
                align="center"
                isLazy
            >
                <TabList>
                    <Tab sx={tabStyle}>Frontend<BsFront style={iconStyle} /></Tab>
                    {/* <Tab sx={tabStyle}>Back-End</Tab> */}
                    {/* <Tab sx={tabStyle}>Database</Tab> */}
                    <Tab sx={tabStyle}>Tools<FaTools style={iconStyle} /></Tab>
                    <Tab sx={tabStyle}>UI/UX<MdDesignServices style={iconStyle} /></Tab>
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
