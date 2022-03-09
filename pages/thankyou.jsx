import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Navbar, ThankYou, Footer } from '../components/layouts';

const ThankYouPage = () => {
    return (
        <>
            <Head>
                <title>Thank You | Jiten Gurung</title>
            </Head>
            <Box position="relative" zIndex="999">
                <Navbar />
                <ThankYou />
            </Box>
            <Box position="absolute" width="100%">
                <Footer />
            </Box>
        </>
    );
};

export default ThankYouPage;
