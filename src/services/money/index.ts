const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
});

export const getFormattedPrice = (price: number) => {
  return priceFormatter.format(price);
};

export const getFormattedCeiledPrice = (price: number) => {
  const priceCeiled = Math.ceil(price);
  return priceFormatter.format(priceCeiled).replace(/\D00$/, '');
};

export const getMonthlyAmount = (totalAmount: number, totalMonths: number) => {
  const monthlyAmount = totalAmount / totalMonths;
  const formattedPrice = getFormattedCeiledPrice(monthlyAmount);
  return formattedPrice;
};
