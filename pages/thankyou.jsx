import Head from 'next/head';
import Navbar from '../components/layouts/Navbar/Navbar';
import Footer from '../components/layouts/Footer/Footer';
import ThankYou from '../components/layouts/ThankYou/ThankYou';

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
