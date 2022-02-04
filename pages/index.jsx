import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Layout = () => {
	return (
		<div>
			<Head>
				<title>Jiten Gurung</title>
			</Head>
			<Navbar />
			<Intro />
			<AboutMe />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</div>
	);
};

export default Layout;