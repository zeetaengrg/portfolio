import Head from "next/head";
import { ServerError } from "@components/layouts";

const ServerErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error 500: Internal Server Error</title>
      </Head>
      <ServerError />
    </>
  );
};

export default ServerErrorPage;
