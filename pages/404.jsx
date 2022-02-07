import Head from "next/head";
import NextLink from "next/link";
import Navbar from '../components/layouts/Navbar/Navbar';
import Error from '../components/layouts/Error/Error';
import Footer from '../components/layouts/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Head>
                <title>404 Error: Page Not Found</title>
            </Head>
            <Navbar />
            <NextLink href="/404">
                <Error />
            </NextLink>
            <Footer />
        </>
    );
};

export default ErrorPage;
