import Head from "next/head";
import { ScrollBackToTopBtn } from "../components/elements";
import {
  Navbar,
  Hero,
  AboutMe,
  Skills,
  Projects,
  Contacts,
  Footer,
} from "../components/templates";

const Layout = () => {
	return (
		<>
			<Head>
				<title>Jiten Gurung | Portfolio Website</title>
			</Head>
			<Navbar />
			<ScrollBackToTopBtn />
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
};

export default Layout;