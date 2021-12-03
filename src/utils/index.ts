import BigNumber from 'bignumber.js';

export const toWei = (
  value: number | string,
  decimals: number = 18
): string => {
  return new BigNumber(value)
    .times(new BigNumber(10).pow(decimals))
    .toString(10);
};
