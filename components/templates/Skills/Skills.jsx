import { TabList, Tabs, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsBack } from "react-icons/bs";
import { FaTools, FaDatabase } from "react-icons/fa";
import { MdLanguage, MdDesignServices } from "react-icons/md";
import {
  Header,
  LineDivider,
  SubHeader,
  LanguagesTab,
  BackendTab,
  DatabaseTab,
  ToolsTab,
  LibraryTab,
} from "@components/elements";
import { tabList, tabStyle, iconStyle } from "./SkillsStyle";

const MotionTabs = motion(Tabs);

const commonVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <Box
      as="section"
      id="skills"
      height={{ md: "95vh", lg: "100vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header heading="Tools And Technologies" />
      <LineDivider width={{ base: "70%", md: "50%", lg: "40%" }} />
      <SubHeader subHeading="Libraries, Frameworks and Tools" />
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
          {tabList.map((tab) => (
            <Tab sx={tabStyle} key={tab}>
              {tab}
              <Box {...iconStyle}>
                {tab === "Language" ? (
                  <MdLanguage />
                ) : tab === "Backend" ? (
                  <BsBack />
                ) : tab === "Database" ? (
                  <FaDatabase />
                ) : tab === "UI Design" ? (
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
              {tab === "Language" ? (
                <LanguagesTab />
              ) : tab === "Backend" ? (
                <BackendTab />
              ) : tab === "Database" ? (
                <DatabaseTab />
              ) : tab === "UI Design" ? (
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
