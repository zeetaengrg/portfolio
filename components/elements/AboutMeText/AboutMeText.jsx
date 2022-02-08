import { Text, Link } from "@chakra-ui/react";

const AboutMeText = () => {

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
    }

    return (
        <>
            <Text
                m={{ base: "1.5rem", md: "2rem" }}
                fontSize={{ base: "1.1rem", md: "1.3rem" }}
                textAlign="center"
            >
                A Front-End developing aficionado from{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Nepal"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    sx={linkStyle}
                    fontSize={{ base: "1.1rem", md: "1.5rem" }}
                >
                    🇳🇵
                </Link>{" "}
                with an acute detail to hone the skills as required by
                the project requirements. A web technology ethusiast
                with a modest experience of UI/UX designing proficiency and
                immense interest to build elegant as well as fully
                functioning applications.
            </Text>
        </>
    );
};

export default AboutMeText;
