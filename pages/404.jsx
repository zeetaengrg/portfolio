import NextLink from "next/link";
import Navbar from '../components/Navbar';
import Error from '../components/Error';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <NextLink href="/404">
                <Error />
            </NextLink>
            <Footer />
        </>
    );
};

export default ErrorPage;
