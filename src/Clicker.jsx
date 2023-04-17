import React, { useEffect, useState } from 'react';

const Clicker = ({keyName, color, increment}) => 
  {
    //initialisation du count avec le contenu du locaStorage s'il existe, evite le double-render au premier chargement si dans le premier useEffect dessous
    
    let [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0)); 
  
    useEffect(() => 
    {
        return () => 
          {
            localStorage.removeItem(keyName);     //cleans the localStorage when the component is 'destroyed'
          };
    }, []); 

    useEffect(() => 
    {
        localStorage.setItem(keyName, count);
    }, [count]);  // function inside useEffect works when this state changes
    
    const buttonClick = () => 
    {
      setCount((count + 1))
      increment();
    };

    return (
      <div>
        <div style={{color: color}}>Clicks count: {count}</div>
        <button onClick={buttonClick}>Click me</button>
      </div>
    );
  };

export default Clicker;
