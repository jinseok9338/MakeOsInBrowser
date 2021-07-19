/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import StyledApp from 'components/pages/styledApp';
import Index from 'pages/index';

test('renders index page', () => {
  const { getByText } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
