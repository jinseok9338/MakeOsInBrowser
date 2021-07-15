import { render } from '@testing-library/react';

import Home from '../../pages/index';

test('renders deploy link', () => {
  const { getByText } = render(<Home />);
  const HelloWorldElement = getByText('Hello World');
  // expect(HelloWorldElement).toBeInTheDocument();
});
