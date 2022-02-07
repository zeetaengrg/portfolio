import { Image } from "@chakra-ui/react";

const UITab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Image
                src="/images/figma.png"
                alt="Figma"
                sx={imageStyle}
            />
        </>
    );
};

export default UITab;
