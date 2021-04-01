import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { MoneyInput } from '.';
import { theme } from '~/config/styles';

describe('MoneyInput', () => {
  test('should renders MoneyInput with the correct information', () => {
    const props = {
      onChange: jest.fn(),
      value: 10000,
      label: 'Money Input'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MoneyInput {...props} />
      </ThemeProvider>
    );

    const moneyInputText = getByTestId('money-input');

    expect(moneyInputText.getAttribute('value')).toBe('10,000.00');
  });

  test('should trigger on change function when user type the total amount value', () => {
    const props = {
      onChange: jest.fn(),
      value: 10000,
      label: 'Money Input'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MoneyInput {...props} />
      </ThemeProvider>
    );

    const moneyInputElement = getByTestId('money-input');

    fireEvent.change(moneyInputElement, { target: { value: '5,000.50' } });

    expect(props.onChange).toBeCalledWith(5000.5);

    fireEvent.change(moneyInputElement, { target: { value: '9,000,000.65' } });

    expect(props.onChange).toBeCalledWith(9000000.65);
  });
});
