import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { theme } from '~/config/styles';
import { Container } from '.';

describe('Container', () => {
  test('should renders Container with the correct information', () => {
    const text = 'test children';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Container>
          <div data-testid="test-children">{text}</div>
        </Container>
      </ThemeProvider>
    );

    const container = getByTestId('test-children').textContent;

    expect(container).toBe(text);
  });
});
