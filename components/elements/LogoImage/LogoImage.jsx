import NextLink from "next/link";
import { Link, Image } from "@chakra-ui/react";

const LogoImage = () => {

    const linkStyle = {
        _focus: { boxShadow: "none" },
    }

    return (
        <>
            <NextLink href="/" passHref>
                <Link sx={linkStyle}>
                    <Image src="/images/logo.webp" alt="Logo" width="69px" height="45px" />
                </Link>
            </NextLink>
        </>
    );
};

export default LogoImage;
