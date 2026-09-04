import React from 'react';
import Counter from './Counter';
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ width: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h1>Assignment 10</h1>
      <Counter />
      <UserProfile username="alex123" email="alex@example.com" isAdmin={true} />
      <UserProfile username="sam_green" email="sam@example.com" isAdmin={false} />
    </div>
  );
}

export default App;
