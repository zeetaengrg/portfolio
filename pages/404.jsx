import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { Navbar, Error, Footer } from "../components/layouts";

const ErrorPage = () => {

    const heroBoxStyle = {
        position: {
            base: "initial",
            md: "relative",
        },
        zIndex: {
            base: "auto",
            md: "999",
        },
        height: {
            base: "100%",
        }
    }

    const footerBoxStyle = {
        position: {
            base: "initial",
            md: "absolute",
        },
        width: "100%",
        // bottom: {
        //     base: "10%",
        // }
    }

    return (
        <>
            <Head>
                <title>404 Error: Page Not Found</title>
            </Head>
            <Box sx={heroBoxStyle}>
                <Navbar />
                <NextLink href="/404">
                    <Error />
                </NextLink>
            </Box>
            <Box sx={footerBoxStyle}>
                <Footer />
            </Box>
        </>
    );
};

export default ErrorPage;
