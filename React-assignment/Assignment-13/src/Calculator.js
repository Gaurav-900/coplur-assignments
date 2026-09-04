import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (val) => {
    setInput((prev) => prev + val);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // Simple expression evaluation for calculator
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      const num = parseFloat(input);
      setResult(Math.sqrt(num));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calc-container">
      <h2>Advanced Calculator</h2>
      <div className="calc-screen">
        <div className="calc-input">{input || '0'}</div>
        <div className="calc-result">{result !== '' ? `= ${result}` : ''}</div>
      </div>
      <div className="calc-buttons">
        <button onClick={handleClear} className="btn-func">C</button>
        <button onClick={handleDelete} className="btn-func">DEL</button>
        <button onClick={handleSquareRoot} className="btn-func">√</button>
        <button onClick={() => handleClick('/')} className="btn-op">/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="btn-op">*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="btn-op">-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="btn-op">+</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('%')} className="btn-op">%</button>
        <button onClick={handleCalculate} className="btn-equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
