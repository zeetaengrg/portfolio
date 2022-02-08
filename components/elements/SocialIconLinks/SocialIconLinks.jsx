import { Link } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const SocialIconLinks = () => {

    const iconStyle = {
        fontSize: "1.5rem",
    }

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        },
        _focus: { boxShadow: "none" },
    }

    return (
        <>
            <Link href="https://www.facebook.com/zeetaen/" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                <FaFacebookSquare style={iconStyle} />
            </Link>
            <Link href="https://www.instagram.com/zeetaen/" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                <FaInstagramSquare style={iconStyle} />
            </Link>
            <Link href="https://www.youtube.com/c/ZeetaenGurung" sx={linkStyle} target="_blank" rel="noreferrer noopener nofollow">
                <FaYoutubeSquare style={iconStyle} />
            </Link>
        </>
    );
};

export default SocialIconLinks;
