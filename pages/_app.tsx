import MetaData from 'components/pages/MetaData';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import StyledApp from '../components/pages/styledApp'; // Move to environment

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <MetaData />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
