import { Image } from "@chakra-ui/react";

const BackendTab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Image
                src="/images/nodejs.png"
                alt="NodeJS"
                sx={imageStyle}
            />
            <Image
                src="/images/expressjs.png"
                alt="ExpressJS"
                sx={imageStyle}
            />
        </>
    );
};

export default BackendTab;
