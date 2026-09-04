import React, { useState } from 'react';

function Calculator() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [res, setRes] = useState(null);

  return (
    <div className="container mt-4">
      <h2>Calculator Component</h2>
      <div className="mb-3">
        <input type="number" value={n1} onChange={(e) => setN1(Number(e.target.value))} className="form-control mb-2" />
        <input type="number" value={n2} onChange={(e) => setN2(Number(e.target.value))} className="form-control mb-2" />
        <button className="btn btn-primary me-2" onClick={() => setRes(n1 + n2)}>Add</button>
        <button className="btn btn-secondary me-2" onClick={() => setRes(n1 - n2)}>Subtract</button>
        <button className="btn btn-success me-2" onClick={() => setRes(n1 * n2)}>Multiply</button>
      </div>
      {res !== null && <h4>Result: {res}</h4>}
    </div>
  );
}

export default Calculator;
