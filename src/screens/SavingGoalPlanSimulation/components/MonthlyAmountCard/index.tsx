import React from 'react';

import { getFormattedCeiledPrice, getMonthlyAmount } from '~/services/money';
import { getGoalDateByTotalMonths } from '~/services/date';
import {
  Description,
  DescriptionBold,
  MonthlyAmountHeader,
  MonthlyAmountText,
  MonthlyAmountValue,
  Wrapper
} from './styles';

interface Props {
  totalAmount: number;
  totalMonths: number;
}

export const MonthlyAmountCard = ({ totalAmount, totalMonths }: Props) => {
  const formattedPrice = getFormattedCeiledPrice(totalAmount);
  const monthlyAmount = getMonthlyAmount(totalAmount, totalMonths);
  const goalDate = getGoalDateByTotalMonths(totalMonths);

  return (
    <Wrapper>
      <MonthlyAmountHeader>
        <MonthlyAmountText>{'Monthly amount'}</MonthlyAmountText>
        <MonthlyAmountValue data-testid="monthly-amount">
          {monthlyAmount}
        </MonthlyAmountValue>
      </MonthlyAmountHeader>
      <Description>
        {'You’re planning '}
        <DescriptionBold data-testid="monthly-deposits">{`${totalMonths} monthly deposits `}</DescriptionBold>
        {'to reach your '}
        <DescriptionBold>{formattedPrice}</DescriptionBold> {'goal by '}
        <DescriptionBold>{goalDate}</DescriptionBold>
      </Description>
    </Wrapper>
  );
};
