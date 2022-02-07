import Head from "next/head";
import Navbar from "../components/layouts/Navbar/Navbar";
import Intro from "../components/layouts/Intro/Intro";
import AboutMe from "../components/layouts/AboutMe/AboutMe";
import Skills from "../components/layouts/Skills/Skills";
import Projects from "../components/layouts/Projects/Projects";
import Contacts from "../components/layouts/Contacts/Contacts";
import Footer from "../components/layouts/Footer/Footer";

const Layout = () => {
	return (
		<>
			<Head>
				<title>Jiten Gurung | Portfolio Website</title>
			</Head>
			<Navbar />
			<Intro />
			<AboutMe />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
};

export default Layout;