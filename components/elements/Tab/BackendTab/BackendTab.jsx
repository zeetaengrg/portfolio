import { Image, Flex, Tooltip } from "@chakra-ui/react";
import { icons } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const BackendTab = () => {
    return (
        <>
            {icons.map((icon, index) => (
                <Flex key={index} sx={flexStyle} >
                    {icon.backend.map(i => (
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

export default BackendTab;
