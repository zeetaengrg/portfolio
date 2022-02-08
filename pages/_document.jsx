import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='keywords' content='Portfolio, Portfolio Website, Jiten, zeetaen, Jiten Gurung' />
          <meta name='description' content='Portfolio Website of Jiten Gurung' />
          <meta name='author' content='Jiten Gurung, zeetaen.gurung@gmail.com' />
          <meta name='copyright' content='Jiten Gurung' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}