import { Image, Tooltip, Flex } from "@chakra-ui/react";
import { icons } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const Library = () => {
    return (
        <>
            {icons.map((icon, index) => (
                <Flex key={index} sx={flexStyle} >
                    {icon.library.map(i => (
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

export default Library;
