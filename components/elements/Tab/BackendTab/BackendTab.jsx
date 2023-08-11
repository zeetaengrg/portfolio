import { Flex } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { backend } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const BackendTab = () => {
  return (
    <Flex as="figure" sx={flexStyle}>
      {backend.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default BackendTab;
