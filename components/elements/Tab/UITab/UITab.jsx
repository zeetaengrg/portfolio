import { Image, Tooltip } from "@chakra-ui/react";

const UITab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Tooltip label="Figma" placement="top">
                <Image
                    src="/images/figma.png"
                    alt="Figma"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Framer Motion" placement="top">
                <Image
                    src="/images/framer-motion.png"
                    alt="Framer Motion"
                    sx={imageStyle}
                />
            </Tooltip>
        </>
    );
};

export default UITab;
