import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='keywords' content='Portfolio, Portfolio Website, Jiten, zeetaen, Jiten Gurung, Jitendra, Jitendra Kumar Gurung' />
          <meta name='description' content='Portfolio Website of Jiten Gurung' />
          <meta name='author' content='Jitendra Gurung, Jiten Gurung' />
          <meta name='copyright' content='Jiten Gurung' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}