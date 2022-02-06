import NextLink from "next/link";
import { Link, Image } from "@chakra-ui/react";

const LogoImage = () => {
    return (
        <>
            <NextLink href="/">
                    <Link>
                        <Image src="/images/logo.png" alt="Logo" />
                    </Link>
                </NextLink>
        </>
    );
};

export default LogoImage;
