import React from 'react';
import { Button } from './components';

type IHeaderProps = {
  setShowPanel: (showPanel: boolean) => void;
};

const Header: React.FC<IHeaderProps> = ({ setShowPanel }) => {
  return (
    <header className='App-header flex flex-row p-4 gap-2'>
      <Button variant='primary' onClick={() => setShowPanel(true)}>
        Show Panel
      </Button>
      <Button variant='secondary' onClick={() => setShowPanel(false)}>
        Hide Panel
      </Button>
    </header>
  );
};

export default Header;
