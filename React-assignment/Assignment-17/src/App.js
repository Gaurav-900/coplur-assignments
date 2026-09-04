import React from 'react';
import ToggleButton from './ToggleButton';
import SimpleCounter from './SimpleCounter';

function App() {
  return (
    <div style={{ width: '380px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h2>Assignment 17 State Hooks</h2>
      <ToggleButton />
      <SimpleCounter />
    </div>
  );
}

export default App;
