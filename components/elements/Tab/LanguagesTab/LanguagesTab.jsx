import { Box } from "@chakra-ui/react";
import { TabContent } from "@components/elements";
import { language } from "@data/icons-data";
import { flexStyle } from "../TabsStyle";

const LanguagesTab = () => {
  return (
    <Box as="figure" sx={flexStyle}>
      {language.map((item) => (
        <TabContent key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default LanguagesTab;
