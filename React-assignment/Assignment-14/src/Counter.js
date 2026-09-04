import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <h2>Counter Component</h2>
      <h3>Count: {count}</h3>
      <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="btn btn-warning" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
