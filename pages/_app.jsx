import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;