import { Flex } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { library } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const Library = () => {
  return (
    <Flex as="figure" sx={flexStyle}>
      {library.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default Library;
