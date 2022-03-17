import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { tools } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const ToolsTab = () => {
    return (
        <Flex sx={flexStyle}>
            {tools.map(item => (
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

export default ToolsTab;
