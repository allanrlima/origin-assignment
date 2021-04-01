import React from 'react';
import dollar from '~/icons/dollar-sign.svg';

import { getFormattedPrice } from '~/services/money';
import { Input } from '../Input';

import { InputWrapper, MoneyLogo, Wrapper } from './styles';

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

interface InputType {
  target: {
    value: string;
  };
}

export const MoneyInput: React.FunctionComponent<Props> = ({
  onChange,
  label,
  value
}: Props) => {
  const setMoneyInput = ({ target }: InputType) => {
    const moneyValue = Number(target.value.replace(/\D/g, ''));
    onChange(moneyValue / 100);
  };

  const maskedValue = getFormattedPrice(value);
  const maskedValueWithRemovedDollar = maskedValue.substring(1);

  return (
    <Input label={label}>
      <Wrapper>
        <InputWrapper
          data-testid="money-input"
          value={maskedValueWithRemovedDollar}
          onChange={setMoneyInput}
          maxLength={15}
        />
        <MoneyLogo src={dollar} alt={'Money'} />
      </Wrapper>
    </Input>
  );
};
