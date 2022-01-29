import { Heading, TabList, Tabs, Tab, TabPanels, TabPanel, Image, Flex } from "@chakra-ui/react";

const Skills = () => {
    return (
        <>
            <Heading
                id="skills"
                textAlign="center"
                textTransform="uppercase"
                bgGradient="linear(to-r, #fff, #B4A5A5, #3C415C, #0F3460, #16213E)"
                bgClip="text"
                fontSize={{ base: "2rem", md: "3rem" }}
            >
                Tools and Technologies
            </Heading>
            <Tabs mt="1rem" variant="solid-rounded" align="center" isLazy>
                <TabList>
                    <Tab fontSize="1.2rem" color="#b4a5a5" _focus={{ outline: "none" }} _active={{ bg: "none" }} _selected={{ bg: "#0F3460" }}>
                        Front-End
                    </Tab>
                    <Tab fontSize="1.2rem" color="#b4a5a5" _focus={{ outline: "none" }} _active={{ bg: "none" }} _selected={{ bg: "#0F3460" }}>
                        Back-End
                    </Tab>
                    <Tab fontSize="1.2rem" color="#b4a5a5" _focus={{ outline: "none" }} _active={{ bg: "none" }} _selected={{ bg: "#0F3460" }}>
                        Database
                    </Tab>
                    <Tab fontSize="1.2rem" color="#b4a5a5" _focus={{ outline: "none" }} _active={{ bg: "none" }} _selected={{ bg: "#0F3460" }}>
                        Tools
                    </Tab>
                    <Tab fontSize="1.2rem" color="#b4a5a5" _focus={{ outline: "none" }} _active={{ bg: "none" }} _selected={{ bg: "#0F3460" }}>
                        UI
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex justifyContent="center" gap="3rem">
                            <Image src="/images/html.png" alt="HTML5" height="90px" width="90px" />
                            <Image src="/images/css.png" alt="CSS3" height="90px" width="90px" />
                            <Image src="/images/javascript.png" alt="JavaScript" height="90px" width="90px" />
                            <Image src="/images/reactjs.png" alt="ReactJS" height="90px" width="90px" />
                            <Image src="/images/nextjs.png" alt="NextJS" height="90px" width="90px" />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center" gap="3rem">
                            <Image src="/images/nodejs.png" alt="NodeJS" height="90px" width="90px" />
                            <Image src="/images/expressjs.png" alt="ExpressJS" height="90px" width="90px" />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center" gap="3rem">
                            <Image src="/images/mongodb.png" alt="MongoDB" height="90px" width="90px" />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center" gap="3rem">
                            <Image src="/images/sass.png" alt="Sass" height="90px" width="90px" />
                            <Image src="/images/styled-components.png" alt="Styled Components" height="90px" width="90px" />
                            <Image src="/images/materialui.png" alt="Material UI" height="90px" width="90px" />
                            {/* <Image src="/images/chakraui.png" alt="Chakra UI" height="90px" width="90px" /> */}
                            <Image src="/images/bootstrap.png" alt="Bootstrap" height="90px" width="90px" />
                            <Image src="/images/tailwind.png" alt="Tailwind" height="90px" width="90px" />
                            <Image src="/images/git.png" alt="Git" height="90px" width="90px" />
                            <Image src="/images/github.png" alt="GitHub" height="90px" width="90px" />
                            <Image src="/images/gitlab.png" alt="GitLab" height="90px" width="90px" />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center" gap="3rem">
                            <Image src="/images/figma.png" alt="Figma" height="90px" width="90px" />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default Skills;
