import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const WithServerStyleSheet = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const originalRenderPage = ctx.renderPage;
  const sheet = new ServerStyleSheet();

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};

export default WithServerStyleSheet;
