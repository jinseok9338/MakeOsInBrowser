import type { AppProps } from 'next/app';
import Head from 'next/head';
import _packages from 'package.json';
import type { ReactElement } from 'react';

import StyledApp from '../components/pages/styledApp';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{_packages.name}</title>
        <meta name="description" content={_packages.description} />
      </Head>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
