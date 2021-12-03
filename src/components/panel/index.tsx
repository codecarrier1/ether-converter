import React, { useState, useEffect } from 'react';

import { Input } from '../input';
import { DENOMINATIONS } from '../../constants';
import { toWei } from '../../utils';

type IPanelProps = {
  gwei: string;
};

export const Panel: React.FC<IPanelProps> = ({ gwei }) => {
  const [ratio, setRatio] = useState(gwei);
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    setRatio(gwei);
    setActiveIndex(3);
  }, [gwei]);

  return (
    <div>
      {DENOMINATIONS.map((denomination, index) => (
        <div key={denomination.name} className='flex items-center gap-2 mb-2'>
          <label className='text-white text-base w-20 flex-shrink-0'>
            {denomination.name}
          </label>
          <Input
            value={toWei(
              ratio.toString(),
              denomination.decimals - DENOMINATIONS[activeIndex].decimals
            )}
            onChange={(v) => {
              setRatio(v);
              setActiveIndex(index);
            }}
            type='number'
          />
        </div>
      ))}
    </div>
  );
};
