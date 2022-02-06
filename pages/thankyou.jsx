import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThankYou from '../components/ThankYou';
import Head from 'next/head';

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
