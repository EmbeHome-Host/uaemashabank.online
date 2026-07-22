export const ACCOUNT = {
  holderName: 'Krishna Sai Vinay Kumar Villas',
  accountType: 'Savings',
  accountNumber: 'xxxxxxxx1533',
  branch: 'DUBAI',
  balance: 12030000000,
};

/** Indian numbering: 18,03,00,00,000.00 */
export const formatBalance = (amount) =>
  new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

export const BALANCE_DISPLAY = {
  inr: `INR ${formatBalance(ACCOUNT.balance)}`,
};
