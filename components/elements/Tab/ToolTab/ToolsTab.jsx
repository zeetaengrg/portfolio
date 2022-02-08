import { Image } from "@chakra-ui/react";

const ToolsTab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Image
                src="/images/sass.png"
                alt="Sass"
                sx={imageStyle}
            />
            <Image
                src="/images/styled-components.png"
                alt="Styled Components"
                sx={imageStyle}
            />
            <Image
                src="/images/materialui.png"
                alt="Material UI"
                sx={imageStyle}
            />
            <Image
                src="/images/chakraui.webp"
                alt="Chakra UI"
                sx={imageStyle}
            />
            <Image
                src="/images/bootstrap.png"
                alt="Bootstrap"
                sx={imageStyle}
            />
            <Image
                src="/images/tailwind.png"
                alt="Tailwind"
                sx={imageStyle}
            />
            <Image
                src="/images/git.png"
                alt="Git"
                sx={imageStyle}
            />
            <Image
                src="/images/github.png"
                alt="GitHub"
                sx={imageStyle}
            />
        </>
    );
};

export default ToolsTab;
