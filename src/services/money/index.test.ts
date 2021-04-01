import {
  getFormattedCeiledPrice,
  getFormattedPrice,
  getMonthlyAmount
} from '.';

describe('getFormattedPrice()', () => {
  test('should get a formatted price when a value is given', () => {
    let value = 25000.5;
    let formattedPrice = getFormattedPrice(value);
    expect(formattedPrice).toBe('$25,000.50');
    value = 60000.3;
    formattedPrice = getFormattedPrice(value);
    expect(formattedPrice).toBe('$60,000.30');
  });
});

describe('getFormattedCeiledPrice()', () => {
  test('should get a formatted and ceiled price when a value is given', () => {
    let value = 25000;
    let formattedPrice = getFormattedCeiledPrice(value);
    expect(formattedPrice).toBe('$25,000');
    value = 60000.3;
    formattedPrice = getFormattedCeiledPrice(value);
    expect(formattedPrice).toBe('$60,001');
  });
});

describe('getMonthlyAmount()', () => {
  test('should get a formatted monthly amount when the total amount and total months are given', () => {
    let totalAmount = 25000;
    let totalMonths = 48;
    let monthlyAmount = getMonthlyAmount(totalAmount, totalMonths);
    expect(monthlyAmount).toBe('$521');
    totalAmount = 60000;
    totalMonths = 72;
    monthlyAmount = getMonthlyAmount(totalAmount, totalMonths);
    expect(monthlyAmount).toBe('$834');
  });
});
