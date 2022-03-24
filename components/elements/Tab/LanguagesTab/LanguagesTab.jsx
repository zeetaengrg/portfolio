import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { language } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const LanguagesTab = () => {
  return (
    <Flex sx={flexStyle}>
      {language.map((item) => (
        <Tooltip key={item.id} label={item.name} placement="top">
          <Image
            src={item.image}
            alt={item.name}
            height={{ base: "4rem", md: "5.625rem" }}
            width={{ base: "4rem", md: "5.625rem" }}
            objectFit="contain"
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default LanguagesTab;
