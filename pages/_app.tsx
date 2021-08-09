import MetaData from 'components/pages/MetaData';
import { FileSystemProvider } from 'contexts/fileSystem';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import StyledApp from '../components/pages/styledApp'; // Move to environment

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <FileSystemProvider>
    <SessionProvider>
      <StyledApp>
        <MetaData />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
