import React from 'react';
import TodoList from './TodoList';
import Weather from './Weather';

function App() {
  return (
    <div style={{ width: '450px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h2>Assignment 18 - Hooks & API</h2>
      <TodoList />
      <Weather />
    </div>
  );
}

export default App;
