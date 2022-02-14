import { Image, Tooltip, Flex } from "@chakra-ui/react";
import { icons } from "../../../../data/icons-data";

const UITab = () => {

    const flexStyle = {
        justifyContent: "center",
        gap: "2rem",
        flexWrap: {
            base: "wrap",
            md: "nowrap",
        }
    }

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            {icons.map((icon, index) => (
                <Flex key={index} sx={flexStyle} >
                    {icon.ui.map(i => (
                        <Tooltip key={i.id} label={i.name} placement="top">
                            <Image
                                src={i.image}
                                alt={i.name}
                                sx={imageStyle}
                            />
                        </Tooltip>
                    ))}
                </Flex>
            ))}
        </>
    );
};

export default UITab;
