import { Image } from "@chakra-ui/react";

const DatabaseTab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Image
                src="/images/mongodb.png"
                alt="MongoDB"
                sx={imageStyle}
            />
        </>
    );
};

export default DatabaseTab;
