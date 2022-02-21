import Head from "next/head";
import {
    Navbar,
    Intro,
    AboutMe,
    Skills,
    Projects,
    Contacts,
    Footer,
} from "../components/layouts";

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