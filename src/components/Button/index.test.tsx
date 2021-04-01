import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { Button } from '.';
import { theme } from '~/config/styles';

describe('Button', () => {
  test('should renders Button with the correct information', () => {
    const props = {
      onClick: jest.fn(),
      text: 'Button Text'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    );

    const button = getByTestId('button').textContent;

    expect(button).toBe(props.text);
  });
  test('should trigger on click function when Button is clicked', () => {
    const props = {
      onClick: jest.fn(),
      text: 'Button Text'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    );

    const button = getByTestId('button');
    fireEvent.click(button);
    expect(props.onClick).toBeCalled();
  });
});
