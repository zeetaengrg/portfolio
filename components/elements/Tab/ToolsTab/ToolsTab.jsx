import { Flex } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { tools } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const ToolsTab = () => {
  return (
    <Flex as="figure" sx={flexStyle}>
      {tools.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default ToolsTab;
