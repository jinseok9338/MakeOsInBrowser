import MetaData from 'components/pages/MetaData';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import StyledApp from '../components/pages/styledApp';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <MetaData />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
