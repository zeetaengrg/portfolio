import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ThankYou } from '../components/layouts';
import { Navbar, Footer } from '../components/templates';

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
