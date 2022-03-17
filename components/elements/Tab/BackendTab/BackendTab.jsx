import { Image, Flex, Tooltip } from "@chakra-ui/react";
import { backend } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const BackendTab = () => {
    return (
        <Flex sx={flexStyle}>
            {backend.map(item => (
                <Tooltip key={item.id} label={item.name} placement="top">
                    <Image
                        src={item.image}
                        alt={item.name}
                        sx={imageStyle}
                    />
                </Tooltip>
            ))}
        </Flex>
    );
};

export default BackendTab;
