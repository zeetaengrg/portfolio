import NextDocument, { Html, Head, Main, NextScript } from "next/document";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Jitendra, Jitendra Gurung, zeetaen, jitendra gurung, jitendra"
          />
          <meta
            name="google-site-verification"
            content="WIFwiUnwtnHytBzpBU2ZyH8TpAhnruvOZJkRavlj94s"
          />
          <meta
            name="description"
            content="Portfolio Website of Jiten Gurung"
          />
          <meta name="author" content="Jitendra Gurung" />
          <meta name="copyright" content="Jitendra Gurung" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#0b111e" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
          ></link>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
          <link rel="apple-touch-icon" href="images/logo.svg"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
