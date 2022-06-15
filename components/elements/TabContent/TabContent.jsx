import Image from "next/image";
import { Tooltip } from "@chakra-ui/react";

const TabContent = ({ item }) => {
  return (
    <Tooltip as="figcaption" key={item.id} label={item.name} placement="top">
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
