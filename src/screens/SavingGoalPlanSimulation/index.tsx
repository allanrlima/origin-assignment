import React, { useState } from 'react';

import { Header } from '~/components/Header';
import { Container } from '~/components/Container';
import { BoldTitleText, ButtonWrapper, InputsWrapper, Title } from './styles';
import { Button } from '~/components/Button';
import { MoneyInput } from '~/components/MoneyInput';
import { MonthInput } from '~/components/MonthInput';
import { Card } from '~/components/Card';

import { CardHeader } from './components/CardHeader';
import { MonthlyAmountCard } from './components/MonthlyAmountCard';

export const SavingGoalPlanSimulation = () => {
  const [totalAmount, setTotalAmount] = useState(10000);
  const [totalMonths, setTotalMonths] = useState(1);

  return (
    <>
      <Header />
      <Container>
        <Title data-testid="screen-title">
          {"Let's plan your "}
          <BoldTitleText>{'saving goal.'}</BoldTitleText>
        </Title>
        <Card>
          <CardHeader />
          <InputsWrapper>
            <MoneyInput
              value={totalAmount}
              onChange={setTotalAmount}
              label={'Total amount'}
            />
            <MonthInput
              totalMonths={totalMonths}
              label={'Reach goal by'}
              onChange={setTotalMonths}
            />
          </InputsWrapper>
          <MonthlyAmountCard
            totalAmount={totalAmount}
            totalMonths={totalMonths}
          />
          <ButtonWrapper>
            <Button
              text={'Confirm'}
              onClick={() => console.log('button was clicked!')}
            />
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};
