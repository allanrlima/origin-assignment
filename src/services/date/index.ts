import add from 'date-fns/add';
import format from 'date-fns/format';

export const getGoalDateByTotalMonths = (totalMonths: number) => {
  const goalDate = add(new Date(), {
    months: totalMonths
  });
  const formattedGoalDate = format(goalDate, 'LLLL, y');
  return formattedGoalDate;
};
