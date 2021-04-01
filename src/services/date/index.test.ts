import { getGoalDateByTotalMonths } from '.';
import add from 'date-fns/add';
import format from 'date-fns/format';

describe('getGoalDateByTotalMonths()', () => {
  test('should get a formatted date with month and year when total months are given', () => {
    const totalMonths = 2;
    const goalDate = getGoalDateByTotalMonths(totalMonths);
    const currentDate = add(new Date(), {
      months: totalMonths
    });

    const currentMonth = format(currentDate, 'LLLL');
    const currentYear = format(currentDate, 'y');

    expect(goalDate).toBe(`${currentMonth}, ${currentYear}`);
  });
});
