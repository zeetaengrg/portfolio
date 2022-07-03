import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import { Layout, LoadingAnimation } from "@components/layouts";
import ThankYouPage from "./thankyou";

// const Loader = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 3000);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   }, [router]);

//   return loading && <LoadingAnimation />;
// };

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {router.asPath === "/thankyou" ? (
        <Layout>
          <ThankYouPage />
        </Layout>
      ) : (
        <>
          {/* <Loader /> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
