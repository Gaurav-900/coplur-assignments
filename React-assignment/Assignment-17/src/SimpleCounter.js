import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(1);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>Simple Counter</h3>
      <h4>Value: {count}</h4>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '5px' }}>Decrement</button>
      <button onClick={() => setCount(count * 5)}>Multiply by 5</button>
    </div>
  );
}

export default SimpleCounter;
