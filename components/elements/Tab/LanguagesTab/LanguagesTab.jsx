import { Flex, Image, Tooltip } from '@chakra-ui/react';
import { language } from '../../../../data/icons-data';
import { flexStyle, imageStyle } from "../TabsStyle";

const LanguagesTab = () => {
    return (
        <Flex sx={flexStyle}>
            {language.map(item => (
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

export default LanguagesTab;
