import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { Header } from '.';
import { theme } from '~/config/styles';

describe('Header', () => {
  test('should renders Header with the correct information', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const header = getByTestId('header');
    const logo = getByTestId('logo');

    expect(header).toBeTruthy();
    expect(logo).toBeTruthy();
  });
});
