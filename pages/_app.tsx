import MetaData from 'components/pages/MetaData';
import type { AppProps } from 'next/app';
import { description, name } from 'package.json';
import type { ReactElement } from 'react';
import themes from 'styles/themes.json';

import StyledApp from '../components/pages/styledApp'; // Move to environment

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <MetaData description={description} name={name} />
      <StyledApp currentTheme={themes.default}>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
