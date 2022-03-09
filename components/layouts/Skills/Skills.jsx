import {
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    Box,
} from "@chakra-ui/react";
import {
    Header,
    LineDivider,
    SubHeader,
    LanguagesTab,
    BackendTab,
    DatabaseTab,
    ToolsTab,
    LibraryTab,
} from "../../elements";
import { tabList, tabStyle, iconStyle } from "./SkillsStyle";
import { BsFront, BsBack } from "react-icons/bs";
import { FaTools, FaDatabase } from "react-icons/fa";
import { MdLanguage, MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

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
};

const Skills = () => {

    

    return (
        <Box>
            <Header heading="Tools And Technologies" id="skills" />
            <LineDivider />
            <SubHeader subHeading="Libraries, Frameworks and Tools I Use" />
            <MotionTabs
                m={{ base: "1.5rem 0", md: "1.5rem 0" }}
                size="sm"
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
                    {tabList.map(tab => (
                        <Tab sx={tabStyle} key={tab}>
                            {tab}
                            <Box {...iconStyle}>
                                {tab === "Languages" ? (
                                    <MdLanguage />
                                ) : tab === "Backend" ? (
                                    <BsBack />
                                ) : tab === "Database" ? (
                                    <FaDatabase />
                                ) : tab === "Libraries/Frameworks" ? (
                                    <MdDesignServices />
                                ) : (
                                    <FaTools />
                                )}
                            </Box>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {tabList.map(tab => (
                        <TabPanel key={tab}>
                            {tab === "Languages" ? (
                                <LanguagesTab />
                            ) : tab === "Backend" ? (
                                <BackendTab />
                            ) : tab === "Database" ? (
                                <DatabaseTab />
                            ) : tab === "Libraries/Frameworks" ? (
                                <LibraryTab />
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
