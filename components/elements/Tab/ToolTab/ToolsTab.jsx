import { Image, Tooltip } from "@chakra-ui/react";

const ToolsTab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Tooltip label="Sass" placement="top">
                <Image
                    src="/images/sass.png"
                    alt="Sass"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Styled Components" placement="top">
                <Image
                    src="/images/styled-components.png"
                    alt="Styled Components"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Bootstrap" placement="top">
                <Image
                    src="/images/bootstrap.png"
                    alt="Bootstrap"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Tailwind CSS" placement="top">
                <Image
                    src="/images/tailwind.png"
                    alt="Tailwind"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Material-UI" placement="top">
                <Image
                    src="/images/materialui.png"
                    alt="Material UI"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Chakra-UI" placement="top">
                <Image
                    src="/images/chakraui.webp"
                    alt="Chakra UI"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="Git" placement="top">
                <Image
                    src="/images/git.png"
                    alt="Git"
                    sx={imageStyle}
                />
            </Tooltip>
            <Tooltip label="GitHub" placement="top">
                <Image
                    src="/images/github.png"
                    alt="GitHub"
                    sx={imageStyle}
                />
            </Tooltip>
        </>
    );
};

export default ToolsTab;
