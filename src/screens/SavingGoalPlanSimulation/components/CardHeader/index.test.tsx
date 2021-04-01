import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { CardHeader } from '.';
import { theme } from '~/config/styles';

describe('CardHeader', () => {
  test('should renders CardHeader with the correct information', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CardHeader />
      </ThemeProvider>
    );

    const cardHeader = getByTestId('card-header');
    expect(cardHeader).toBeTruthy();
  });
});
