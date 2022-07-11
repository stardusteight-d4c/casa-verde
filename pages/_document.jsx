import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Montserrat:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Casa Verde - Dezenas de espécies de plantas à pronta entrega" />
          <meta name="keywords" content="Plantas, cuidar, comprar, venda, dicas" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
