import { Image, Flex, Tooltip } from "@chakra-ui/react";
import { database } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const DatabaseTab = () => {
    return (
        <Flex sx={flexStyle}>
            {database.map(item => (
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

export default DatabaseTab;
