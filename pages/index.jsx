import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Jiten Gurung</title>
			</Head>
			<Navbar />
			<Intro />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</div>
	);
};

export default Home;