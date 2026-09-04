import React from 'react';
import SignupControlled from './SignupControlled';
import LoginUncontrolled from './LoginUncontrolled';

function App() {
  return (
    <div style={{ width: '400px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h2>Assignment 16 Forms</h2>
      <SignupControlled />
      <LoginUncontrolled />
    </div>
  );
}

export default App;
