import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { SavingGoalPlanSimulation } from '.';
import { theme } from '~/config/styles';

describe('SavingGoalPlanSimulation', () => {
  test('should renders SavingGoalPlanSimulation Screen', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SavingGoalPlanSimulation />
      </ThemeProvider>
    );

    const title = getByTestId('screen-title').textContent;

    expect(title).toContain("Let's plan your saving goal.");
  });
  test('should not break screen SavingGoalPlanSimulation when button is clicked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SavingGoalPlanSimulation />
      </ThemeProvider>
    );

    const button = getByTestId('button');
    fireEvent.click(button);

    const title = getByTestId('screen-title').textContent;

    expect(title).toContain("Let's plan your saving goal.");
  });
});
