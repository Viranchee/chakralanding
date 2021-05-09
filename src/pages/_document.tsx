import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="lol" />
          <title>LOL</title>
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
