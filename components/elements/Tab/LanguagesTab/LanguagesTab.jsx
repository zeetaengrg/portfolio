import { Flex } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { language } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const LanguagesTab = () => {
  return (
    <Flex as="figure" sx={flexStyle}>
      {language.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default LanguagesTab;
