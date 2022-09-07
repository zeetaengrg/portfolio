import { motion } from "framer-motion";
import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Image,
} from "@chakra-ui/react";
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
      height={{ base: "fit-content", md: "fit-content", xl: "100vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      aria-labelledby="skills-title"
    >
      <Box as="figure" position="absolute" top="-2rem" opacity="0.1">
        <Image
          src="/images/skills-bg.svg"
          alt="Skills section background"
          height="46.5rem"
          width="93.5rem"
          objectFit={{ base: "cover", lg: "contain" }}
          draggable="false"
        />
      </Box>
      <Header id="skills-title" heading="Tools And Technologies" />
      <LineDivider width={{ base: "70%", md: "50%", lg: "40%" }} />
      <SubHeader subHeading="Languages, Frameworks and Tools" />
      <MotionTabs
        as="section"
        m={{ base: "1.5rem 0" }}
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
        }}
      >
        <TabList as="article">
          {tabList.map((tab) => (
            <Tab sx={tabStyle} key={tab}>
              {tab}
              <Box as="figure" {...iconStyle}>
                {tab === "Language" ? (
                  <MdLanguage aria-label="Language Icon" />
                ) : tab === "Backend" ? (
                  <BsBack aria-label="Backend Icon" />
                ) : tab === "Database" ? (
                  <FaDatabase aria-label="Database Icon" />
                ) : tab === "UI Design" ? (
                  <MdDesignServices aria-label="UI Design Icon" />
                ) : (
                  <FaTools aria-label="Tools Icon" />
                )}
              </Box>
            </Tab>
          ))}
        </TabList>
        <TabPanels as="article">
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
