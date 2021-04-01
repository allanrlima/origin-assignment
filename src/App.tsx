import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/styles';

import { SavingGoalPlanSimulation } from './screens/SavingGoalPlanSimulation';

const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SavingGoalPlanSimulation />
      </ThemeProvider>
    </>
  );
};

export default App;
