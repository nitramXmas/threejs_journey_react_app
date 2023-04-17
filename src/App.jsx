import React, { useState } from 'react';
import Clicker from './Clicker.jsx';

const App = () => {
  const [hasClicker, setHasClicker] = useState(true);

  const toggle = () => {
    setHasClicker(!hasClicker);
  };

  return (
    <>
      <button onClick={toggle}>Toggle the clicker</button>
      {hasClicker ? <Clicker /> : <></>}
    </>
  );
};

export default App;
