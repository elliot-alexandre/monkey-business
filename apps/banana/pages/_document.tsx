import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  // componentDidMount() {
  //   initGA('UA-214528583-1');
  //   PageView();
  // }

  render() {
    return (
      <React.StrictMode>
        <Html lang="en-US">
          <Head></Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </React.StrictMode>
    );
  }
}

export default MyDocument;
