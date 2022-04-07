import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import { Loader } from "@components/layouts";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {!isLoading ? <Loader /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
