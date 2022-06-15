import { Flex } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { database } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const DatabaseTab = () => {
  return (
    <Flex as="figure" sx={flexStyle}>
      {database.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default DatabaseTab;
