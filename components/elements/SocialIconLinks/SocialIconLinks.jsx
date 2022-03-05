import { Box, Link } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { linkStyle } from "../LinkStyle/LinkStyle";

const SocialIconLinks = () => {

    const links = [
        {
            name: "Facebook Icon",
            url: "https://www.facebook.com/zeetaen/"
        },
        {
            name: "Instagram Icon",
            url: "https://www.instagram.com/zeetaen/"
        },
        {
            name: "Twitter Icon",
            url: "https://twitter.com/zeetaen"
        }
    ]

    const iconStyle = {
        fontSize: "1.5rem",
        transition: "all 0.2s linear",
        _hover: { color: "white", transform: "translateY(-2px)" },
    }

    return (
        <>
            {links.map((link, index) => (
                <Link href={link.url} aria-label={link.name} key={index} {...linkStyle}>
                    <Box {...iconStyle}>
                        {link.name === "Facebook Icon" ? (
                            <FaFacebookSquare />
                        ) : link.name === "Instagram Icon" ? (
                            <FaInstagramSquare />
                        ) : (
                            <FaTwitterSquare />
                        )}
                    </Box>
                </Link>
            ))}
        </>
    );
};

export default SocialIconLinks;
