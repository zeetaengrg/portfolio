import NextLink from "next/link";
import { Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image)

const imageVariants = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            duration: 1,
            type: "spring",
            stiffness: 120
        }
    }
}

const LogoImage = () => {

    const linkStyle = {
        _focus: { boxShadow: "none" },
    };

    return (
        <>
            <NextLink href="/" passHref>
                <Link sx={linkStyle}>
                    <MotionImage
                        src="/images/logo.svg"
                        alt="Logo"
                        width="60px"
                        height="45px"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </Link>
            </NextLink>
        </>
    );
};

export default LogoImage;
