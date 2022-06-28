import { Image, Tooltip } from "@chakra-ui/react";

const TabContent = ({ item }) => {
  return (
    <Tooltip hasArrow as="figcaption" label={item.name} placement="top">
      <Image
        src={item.image}
        alt={item.name}
        height={{ base: "3rem", md: "4.5rem" }}
        width={{ base: "3rem", md: "4.5rem" }}
        objectFit="contain"
        draggable="false"
        userSelect="none"
      />
    </Tooltip>
  );
};

export default TabContent;
