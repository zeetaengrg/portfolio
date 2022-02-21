import Head from 'next/head';
import { Navbar, ThankYou, Footer } from '../components/layouts';

const ThankYouPage = () => {
    return (
        <>
            <Head>
                <title>Thank You | Jiten Gurung</title>
            </Head>
            <Navbar />
            <ThankYou />
            <Footer />
        </>
    );
};

export default ThankYouPage;
