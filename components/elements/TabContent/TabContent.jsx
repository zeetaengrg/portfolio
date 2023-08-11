import { Image, Tooltip } from "@chakra-ui/react";

const TabContent = ({ item }) => {
  const imgStyle = {
    filter: "drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 1))",
  };

  return (
    <Tooltip hasArrow as="figcaption" label={item.name} placement="top">
      <Image
        src={item.image}
        alt={item.name}
        height={{ base: "3.5rem", md: "4.5rem" }}
        width={{ base: "3.5rem", md: "4.5rem" }}
        objectFit="contain"
        draggable="false"
        userSelect="none"
        sx={imgStyle}
      />
    </Tooltip>
  );
};

export default TabContent;
