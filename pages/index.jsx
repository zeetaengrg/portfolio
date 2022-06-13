import Head from "next/head";
import { ScrollBackToTopBtn } from "@components/elements";
import {
  Navbar,
  Hero,
  AboutMe,
  Skills,
  Projects,
  Contacts,
  Footer,
} from "@components/templates";

const Layout = () => {
  return (
    <>
      <Head>
        <title>Jiten Gurung | Portfolio Website</title>
        <meta
          name="keywords"
          content="Jitendra, Jitendra Gurung, zeetaen, jitendra gurung, jitendra"
        />
        <meta name="description" content="Portfolio Website of Jiten Gurung" />
        <meta name="author" content="Jitendra Gurung" />
        <meta name="copyright" content="Jitendra Gurung" />
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
