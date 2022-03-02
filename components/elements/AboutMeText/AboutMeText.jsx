import { Text, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const AboutMeText = () => {

    const linkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
    }

    const specialLinkStyle = {
        _hover:{
            "&::after": { content: "none" },
        },
        _focus: { outline: "none" },
        _active: { outline: "none" },
        textTransform: "none",
        fontFamily: "inherit",
        fontSize: { base: "1.1rem", md: "1.2rem" },
        fontWeight: "normal",
        textDecoration: "underline",
    }

    return (
        <>
            <MotionText
                p={{ base: "1.5rem 0rem", md: "2rem" }}
                fontSize={{ base: "1.1rem", md: "1.2rem" }}
                textAlign="center"
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: "tween",
                    stiffness: 110,
                }}
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
                with an acute detail to hone the skills as required by the
                project as well as modest experience of UI/UX designing
                proficiency and immense interest to build elegant as well as
                fully functioning applications.
                <br />
                <br />
                In the past, I have worked as a network technician and system
                engineer. However, I always had secret affair with building
                interactive web applications. During COVID19, I had an epiphany
                to learn web development seriously. I took few courses from{" "}
                <Link
                    sx={specialLinkStyle}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    href="https://freecodecamp.org"
                >
                    freeCodeCamp
                </Link>
                , and followed many Youtube guru&apos;s like{" "}
                <Link
                    sx={specialLinkStyle}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    href="https://bit.ly/3sHIVhU"
                >
                    Kevin Powell
                </Link>
                ,{" "}
                <Link
                    sx={specialLinkStyle}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    href="https://bit.ly/3oJld3t"
                >
                    Traversy Media
                </Link>
                ,{" "}
                <Link
                    sx={specialLinkStyle}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    href="https://bit.ly/3HPiehA"
                >
                    Web Dev Simplified
                </Link>
                ,{" "}
                <Link
                    sx={specialLinkStyle}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    href="https://bit.ly/3rHHHUs"
                >
                    TheNetNinja
                </Link>
                , and many more.
                <br />
                <br />
                Without being ostentacious, I am a hard worker and a learner as
                I have completed few certifications namely{" "}
                <Link
                    href="https://bit.ly/34z9OfC"
                    sx={specialLinkStyle}
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                >
                    Responsive Web Design Certification
                </Link>{" "}
                and{" "}
                <Link
                    href="https://bit.ly/3Bjjg2Y"
                    sx={specialLinkStyle}
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                >
                    JavaScript Algorithms and Data Structures Certification
                </Link>{" "}
                from freeCodeCamp. To further prove my hardworking habtitude,
                during my university days, I was awarded with the Best Software
                Project Award by{" "}
                <Link
                    href="https://nta.gov.np"
                    sx={specialLinkStyle}
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                >
                    Nepal Telecommunication Authority
                </Link>
                (NTA) for building Class Routine Management System.
                <br />
                <br />
                Right now I am upskilling myself by learning ReactJS and NextJS
                frameworks and have completed few projects using them which can
                be found in my{" "}
                <Link
                    href="https://bit.ly/3LmRDue"
                    sx={specialLinkStyle}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                >
                    GitHub
                </Link>{" "}
                profile and{" "}
                <Link href="#projects" sx={specialLinkStyle}>
                    Projects
                </Link>{" "}
                section.
                <br />
                <br />
                As per my hobby, I am a football fanatic and secretly dream
                about being a Rock &apos;n&apos; Roll guitarist <Image src="/images/guitar.png" alt="Guitar" height="2rem" width="2rem" display="inline-block" />.
            </MotionText>
        </>
    );
};

export default AboutMeText;
