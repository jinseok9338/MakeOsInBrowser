/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import StyledApp from 'components/pages/styledApp';
import Index from 'pages/index';
import themes from 'styles/themes';

test('renders index page', () => {
  const { getByText } = render(
    <StyledApp currentTheme={themes.default}>
      <Index />
    </StyledApp>
  );

  expect(getByText('Hello, world!')).toBeInTheDocument();
});
