import Head from "next/head";
import { Error } from "@components/layouts";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404 Error: Page Not Found</title>
      </Head>
      <Error />
    </>
  );
};

export default ErrorPage;
