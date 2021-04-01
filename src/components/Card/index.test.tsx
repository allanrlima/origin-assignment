import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { Card } from '.';
import { theme } from '~/config/styles';

describe('Card', () => {
  test('should renders Card with the correct information', () => {
    const text = 'test children';
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Card>
          <div data-testid="test-children">{text}</div>
        </Card>
      </ThemeProvider>
    );

    const card = getByTestId('test-children').textContent;

    expect(card).toBe(text);
  });
});
