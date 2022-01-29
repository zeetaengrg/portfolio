import { Heading, TabList, Tabs, Tab, TabPanels, TabPanel, Image, Flex, Divider, Center } from "@chakra-ui/react";

const Skills = () => {

    const tabStyle = {
        fontSize: { base: "1rem", md: "1.2rem" },
        color: "#b4a5a5",
        _focus: { outline: "none" },
        _active: { bg: "none" },
        _selected: { bg: "#0F3460"}
    };

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" }
    };

    return (
        <>
            <Heading
                mt={{ base: "2rem", md: "0" }}
                id="skills"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #B4A5A5, #3C415C, #0F3460, #16213E)"
                bgClip="text"
                fontSize={{ base: "3rem", md: "4rem" }}
                fontFamily="inherit"
            >
                Tools and Technologies
            </Heading>
            <Center>
                <Divider width="50%" />
            </Center>
            <Tabs
                mt="1rem"
                variant="solid-rounded"
                align="center"
                isLazy
            >
                <TabList>
                    <Tab
                        sx={tabStyle}
                    >
                        Front-End
                    </Tab>
                    <Tab
                        sx={tabStyle}
                    >
                        Back-End
                    </Tab>
                    <Tab
                        sx={tabStyle}
                    >
                        Database
                    </Tab>
                    <Tab
                        sx={tabStyle}
                    >
                        Tools
                    </Tab>
                    <Tab
                        sx={tabStyle}
                    >
                        UI
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex
                            justifyContent="center"
                            gap="3rem"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Image
                                src="/images/html.png"
                                alt="HTML5"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/css.png"
                                alt="CSS3"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/javascript.png"
                                alt="JavaScript"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/reactjs.png"
                                alt="ReactJS"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/nextjs.png"
                                alt="NextJS"
                                sx={imageStyle}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            justifyContent="center"
                            gap="3rem"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Image
                                src="/images/nodejs.png"
                                alt="NodeJS"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/expressjs.png"
                                alt="ExpressJS"
                                sx={imageStyle}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            justifyContent="center"
                            gap="3rem"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Image
                                src="/images/mongodb.png"
                                alt="MongoDB"
                                sx={imageStyle}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            justifyContent="center"
                            gap="3rem"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Image
                                src="/images/sass.png"
                                alt="Sass"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/styled-components.png"
                                alt="Styled Components"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/materialui.png"
                                alt="Material UI"
                                sx={imageStyle}
                            />
                            {/* <Image
                                src="/images/chakraui.png"
                                alt="Chakra UI"
                                sx={imageStyle}
                            /> */}
                            <Image
                                src="/images/bootstrap.png"
                                alt="Bootstrap"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/tailwind.png"
                                alt="Tailwind"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/git.png"
                                alt="Git"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/github.png"
                                alt="GitHub"
                                sx={imageStyle}
                            />
                            <Image
                                src="/images/gitlab.png"
                                alt="GitLab"
                                sx={imageStyle}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            justifyContent="center"
                            gap="3rem"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Image
                                src="/images/figma.png"
                                alt="Figma"
                                sx={imageStyle}
                            />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default Skills;
