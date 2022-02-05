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
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:ital,wght@1,100&family=Roboto:wght@100;300;400;500;700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}