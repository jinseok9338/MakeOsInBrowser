import { SessionConsumer } from 'contexts/session';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

import GlobalStyle from '../../styles/GlobalStyles';

const StyledApp: FC<StyledAppProps> = ({ children, currentTheme }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = currentTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
