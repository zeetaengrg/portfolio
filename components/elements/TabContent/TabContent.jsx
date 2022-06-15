import { Image, Tooltip } from "@chakra-ui/react";

const TabContent = ({ item }) => {
  return (
    <Tooltip as="figcaption" label={item.name} placement="top">
    <Image
      src={item.image}
      alt={item.name}
      height="75"
      width="75"
      objectFit="contain"
    />
    </Tooltip>
  );
};

export default TabContent;
