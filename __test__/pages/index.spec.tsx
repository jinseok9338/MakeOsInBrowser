/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/styledApp';
import Index from 'pages/index';

test('renders main role', () => {
  render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  expect(screen.getByRole('main')).toBeInTheDocument();
});
