import MetaData from 'components/pages/MetaData';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import StyledApp from '../components/pages/styledApp'; // Move to environment

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <MetaData />
    <SessionProvider>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </>
);

export default App;
