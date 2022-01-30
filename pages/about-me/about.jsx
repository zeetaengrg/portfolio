import Head from "next/head";
import AboutMe from "../../components/AboutMe";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Navbar />
            <AboutMe />
            <Footer />
        </>
    );
};

export default About;
