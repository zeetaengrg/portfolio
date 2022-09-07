import Head from "next/head";
import { Error } from "@components/layouts";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error 404: Page Not Found</title>
      </Head>
      <Error />
    </>
  );
};

export default ErrorPage;
