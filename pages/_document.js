import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { pageMeta } from "../components/constants/constants";

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html lang="en">
        <Head>
          {pageMeta.tags.map(tag => (
            <meta {...tag} />
          ))}
          {styleTags}
        </Head>

        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
