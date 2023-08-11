import Head from "next/head";
import { MessageSent } from "@components/layouts";

const MessageSentPage = () => {
  return (
    <>
      <Head>
        <title>Message Sent - Thank You | Jiten Gurung</title>
      </Head>
      <MessageSent />
    </>
  );
};

export default MessageSentPage;
