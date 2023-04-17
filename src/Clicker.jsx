import React, { useEffect, useState } from 'react';

const Clicker = () => {
  console.log('render');
  let [count, setCount] = useState(
    parseInt(localStorage.getItem('count') ?? 0)
  );

  useEffect(() => {
    // const savedCount = parseInt(localStorage.getItem('count') ?? 0);
    // setCount(savedCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const buttonClick = () => {
    setCount((count += 1));
  };

  return (
    <div>
      <div>Clicks count: {count}</div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
};

export default Clicker;
