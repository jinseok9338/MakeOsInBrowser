import type { AppProps } from 'next/app';
import Head from 'next/head';
import _packages from 'package.json';
import type { ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{_packages.name}</title>
        <meta name="description" content={_packages.description} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
