import React, { useMemo, useState } from 'react';
import Clicker from './Clicker.jsx';


const App = ({clickersCount, children}) => 
  {
    const [hasClicker, setHasClicker] = useState(true);
    const [count, setCount] = useState(0)

    const toggle = () => 
      { 
        setHasClicker(!hasClicker);
      };

      const increment= () => {
        setCount(count + 1)
      }

      //const tempArray = [...Array(clickersCount)] empty to undefined to a new array in order to have something to map on



      const colors = useMemo(()=>
      {
        const colors = []
  
        for(let i = 0; i <  clickersCount; i++)
        {
          colors.push(`hsl(${Math.random() * 360}deg, 100%, 60% )`)
        }
        return colors
      },[clickersCount])

    return (
        <>
          {children}

          <div>Total count: {count}</div>

          <button onClick={toggle}>{hasClicker ? 'Hide counter' : 'Show counter'}</button>
          {/*v---Same as : {hasClicker ? <Clicker /> : null} */}
          {hasClicker && (
            <>
              {[...Array(clickersCount)].map((value,index)=>
                (
                  <Clicker 
                    key={index} 
                    keyName={`count${index}`} 
                    color={ colors[index] } 
                    increment={increment} 
                  />
                )
              )}
            </>
          )}
        </>
    );
  };

export default App;
