import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#0B111E",
        color: "#a5abbd",
        fontFamily: '"Poppins", sans-serif',
        scrollBehavior: "smooth",
      },

      a: {
        _hover: {
          color: "#fff",
        },
      },
    },
  },
});
