import * as React from 'react';
import add from 'date-fns/add';
import format from 'date-fns/format';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MonthInput } from '.';
import { theme } from '~/config/styles';

describe('MonthInput', () => {
  test('should renders MonthInput with the correct information', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 1,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    const currentDate = add(new Date(), {
      months: props.totalMonths
    });

    const currentMonth = format(currentDate, 'LLLL');
    const currentYear = format(currentDate, 'y');

    const monthText = getByTestId('month-info').textContent;
    const yearText = getByTestId('year-info').textContent;

    expect(monthText).toBe(currentMonth);
    expect(yearText).toBe(currentYear);
  });

  test('should not show arrow left if total months is equal than 1', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 1,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    expect(getByTestId('hidden-arrow')).toBeTruthy();
  });

  test('should trigger on change function with removed one month when left arrow is clicked if total months is bigger than 1', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 10,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('arrow-left'));
    expect(props.onChange).toBeCalledWith(9);
  });

  test('should trigger on change function with increased one month when right arrow is clicked', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 1,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('arrow-right'));
    expect(props.onChange).toBeCalledWith(2);
  });

  test('should not trigger on change function when total months is equals to 1', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 1,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    fireEvent.keyDown(getByTestId('month-input'), { key: 'ArrowLeft' });

    expect(props.onChange).not.toBeCalled();
  });

  test('should trigger on change function with removed one month when left arrow is pressed on keyboard if total months is bigger than 1', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 10,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    fireEvent.keyDown(getByTestId('month-input'), { key: 'ArrowLeft' });

    expect(props.onChange).toBeCalledWith(9);
  });

  test('should trigger on change function with increased one month when right arrow is pressed on keyboard', () => {
    const props = {
      onChange: jest.fn(),
      totalMonths: 10,
      label: 'Test Label'
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MonthInput {...props} />
      </ThemeProvider>
    );

    fireEvent.keyDown(getByTestId('month-input'), { key: 'ArrowRight' });

    expect(props.onChange).toBeCalledWith(11);
  });
});
