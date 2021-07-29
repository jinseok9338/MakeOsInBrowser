import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document from 'next/document';

import WithServerStyleSheet from '../utils/withStyledComponents';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return WithServerStyleSheet(ctx);
  }

  // render(): ReactElement {
  //   return (
  //     <Html lang="en">
  //       <Head />
  //       <link rel="shortcut icon" href="/static/Apple_logo_black.svg.png" />
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}

export default MyDocument;
