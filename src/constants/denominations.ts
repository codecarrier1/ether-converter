type IDenomination = {
  name: string;
  decimals: number;
  format: string;
};

export const DENOMINATIONS: IDenomination[] = [
  {
    name: 'Wei',
    decimals: -9,
    format: '1',
  },
  {
    name: 'Kwei',
    decimals: -6,
    format: '1000',
  },
  {
    name: 'Mwei',
    decimals: -3,
    format: '1000000',
  },
  {
    name: 'Gwei',
    decimals: 0,
    format: '1000000000',
  },
  {
    name: 'Microether',
    decimals: 3,
    format: '1000000000000',
  },
  {
    name: 'Milliether',
    decimals: 6,
    format: '1000000000000000',
  },
  {
    name: 'Ether',
    decimals: 9,
    format: '1000000000000000000',
  },
];
