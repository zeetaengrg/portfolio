import { Box, Link } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { linkStyle } from "../LinkStyle";
import { links, iconStyle } from "./SocialIconsLinksStyles";

const SocialIconLinks = () => {

    return (
        <>
            {links.map(link => (
                <Link href={link.url} aria-label={link.name} key={link.id} {...linkStyle}>
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
