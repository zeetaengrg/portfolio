import { Heading, TabList, Tabs, Tab, TabPanels, TabPanel, Image, Flex, Divider, Center } from "@chakra-ui/react";

const Skills = () => {
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
            >
                Tools and Technologies
            </Heading>
            <Center>
                <Divider width="60%" />
            </Center>
            <Tabs
                // size={{ base: "sm", md: "md", lg: "lg" }}
                mt="1rem"
                variant="solid-rounded"
                align="center"
                isLazy
            >
                <TabList>
                    <Tab
                        fontSize={{ base: "1rem", md: "1.2rem" }}
                        color="#b4a5a5"
                        _focus={{ outline: "none" }}
                        _active={{ bg: "none" }}
                        _selected={{ bg: "#0F3460" }}
                    >
                        Front-End
                    </Tab>
                    <Tab
                        fontSize={{ base: "1rem", md: "1.2rem" }}
                        color="#b4a5a5"
                        _focus={{ outline: "none" }}
                        _active={{ bg: "none" }}
                        _selected={{ bg: "#0F3460" }}
                    >
                        Back-End
                    </Tab>
                    <Tab
                        fontSize={{ base: "1rem", md: "1.2rem" }}
                        color="#b4a5a5"
                        _focus={{ outline: "none" }}
                        _active={{ bg: "none" }}
                        _selected={{ bg: "#0F3460" }}
                    >
                        Database
                    </Tab>
                    <Tab
                        fontSize={{ base: "1rem", md: "1.2rem" }}
                        color="#b4a5a5"
                        _focus={{ outline: "none" }}
                        _active={{ bg: "none" }}
                        _selected={{ bg: "#0F3460" }}
                    >
                        Tools
                    </Tab>
                    <Tab
                        fontSize={{ base: "1rem", md: "1.2rem" }}
                        color="#b4a5a5"
                        _focus={{ outline: "none" }}
                        _active={{ bg: "none" }}
                        _selected={{ bg: "#0F3460" }}
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
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/css.png"
                                alt="CSS3"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/javascript.png"
                                alt="JavaScript"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/reactjs.png"
                                alt="ReactJS"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/nextjs.png"
                                alt="NextJS"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
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
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/expressjs.png"
                                alt="ExpressJS"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
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
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
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
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/styled-components.png"
                                alt="Styled Components"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/materialui.png"
                                alt="Material UI"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            {/* <Image
                                src="/images/chakraui.png"
                                alt="Chakra UI"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            /> */}
                            <Image
                                src="/images/bootstrap.png"
                                alt="Bootstrap"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/tailwind.png"
                                alt="Tailwind"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/git.png"
                                alt="Git"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/github.png"
                                alt="GitHub"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                            <Image
                                src="/images/gitlab.png"
                                alt="GitLab"
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
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
                                height={{ base: "4rem", md: "5.625rem" }}
                                width={{ base: "4rem", md: "5.625rem" }}
                            />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default Skills;
