import React, { useState } from 'react';

import { Panel, Input } from './components';

type IBodyProps = {
  showPanel?: boolean;
};

const Body: React.FC<IBodyProps> = ({ showPanel = false }) => {
  const [gwei, setGwei] = useState('');

  return (
    <div id='body' className='flex justify-center gap-10 p-4'>
      <div>
        <label htmlFor='gwei' className='text-white text-lg font-bold'>
          Gwei
        </label>
        <Input
          id='gwei'
          name='gwei'
          type='number'
          placeholder='gwei value'
          value={gwei}
          onChange={(value) => setGwei(value)}
        />
      </div>
      {showPanel && <Panel gwei={gwei} />}
    </div>
  );
};

export default Body;
