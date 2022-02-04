import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:ital,wght@1,100&family=Roboto:wght@100;300;400;500;700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <form action="https://formsubmit.co/zeetaen.gurung@gmail.com" method="POST"></form>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument