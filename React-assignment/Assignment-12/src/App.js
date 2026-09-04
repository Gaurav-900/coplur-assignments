import React from 'react';
import UserProfile from './UserProfile';
import ScrollToTop from './ScrollToTop';

function App() {
  const user = {
    name: 'Jane Doe',
    bio: 'Software developer interested in React and web design.'
  };

  return (
    <div style={{ width: '500px', margin: '20px auto', fontFamily: 'sans-serif', minHeight: '150vh' }}>
      <h1>Assignment 12</h1>
      <UserProfile user={user} />

      <div style={{ marginTop: '100px' }}>
        <h3>Scroll down to test Scroll To Top button</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll down further...</p>
        <div style={{ height: '800px' }}></div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
