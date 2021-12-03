import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Body from './Body';

function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div id='body'>
      <Header setShowPanel={setShowPanel} />
      <Body showPanel={showPanel} />
    </div>
  );
}

export default App;
