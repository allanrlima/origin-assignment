import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { MonthlyAmountCard } from '.';
import { theme } from '~/config/styles';

describe('MonthlyAmountCard', () => {
  test('should renders MonthlyAmountCard with the correct information', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthlyAmountCard totalAmount={10000} totalMonths={5} />
      </ThemeProvider>
    );

    const monthlyDepositsText = getByTestId('monthly-deposits').textContent;
    const monthlyAmountText = getByTestId('monthly-amount').textContent;

    expect(monthlyDepositsText).toContain('5 monthly deposits');
    expect(monthlyAmountText).toContain('2,000');
  });
});
