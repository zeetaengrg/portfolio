import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#0B111E",
        color: "#a5abbd",
        fontFamily: '"Exo 2", sans-serif',
        scrollBehavior: "smooth",
        fontSize: "1rem",
      },

      a: {
        _hover: {
          color: "#fff",
        },
      },
    },
  },
});
