import React, { useEffect } from 'react';
import add from 'date-fns/add';
import format from 'date-fns/format';

import arrow from '~/icons/arrow.svg';

import { Input } from '../Input';

import {
  ArrowLeft,
  ArrowRight,
  DateWrapper,
  DateWrapperMonth,
  DateWrapperYear,
  HiddenArrow,
  Wrapper
} from './styles';

interface Props {
  onChange: (value: number) => void;
  totalMonths: number;
  label: string;
}

export const MonthInput: React.FunctionComponent<Props> = ({
  onChange,
  label,
  totalMonths
}: Props) => {
  const removeOneMonth = () => {
    if (totalMonths > 1) {
      onChange(totalMonths - 1);
    }
  };

  const addOneMonth = () => {
    onChange(totalMonths + 1);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'ArrowLeft') {
      removeOneMonth();
    }
    if (e.key === 'ArrowRight') {
      addOneMonth();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalMonths]);

  const currentDate = add(new Date(), {
    months: totalMonths
  });

  const month = format(currentDate, 'LLLL');
  const year = format(currentDate, 'y');

  return (
    <Input label={label}>
      <Wrapper data-testid="month-input">
        {totalMonths > 1 ? (
          <ArrowLeft
            src={arrow}
            onClick={removeOneMonth}
            data-testid="arrow-left"
          />
        ) : (
          <HiddenArrow data-testid="hidden-arrow" />
        )}
        <DateWrapper>
          <DateWrapperMonth data-testid="month-info">{month}</DateWrapperMonth>
          <DateWrapperYear data-testid="year-info">{year}</DateWrapperYear>
        </DateWrapper>
        <ArrowRight
          src={arrow}
          onClick={addOneMonth}
          data-testid="arrow-right"
        />
      </Wrapper>
    </Input>
  );
};
