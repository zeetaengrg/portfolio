import { Image, Tooltip, Flex } from "@chakra-ui/react";
import { library } from "../../../../data/icons-data";
import { flexStyle, imageStyle } from "../TabsStyle";

const Library = () => {
  return (
    <Flex sx={flexStyle}>
      {library.map((item) => (
        <Tooltip key={item.id} label={item.name} placement="top">
          <Image
            src={item.image}
            alt={item.name}
            height={{ base: "4rem", md: "5.625rem" }}
            width={{ base: "4rem", md: "5.625rem" }}
            objectFit="contain"
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default Library;
