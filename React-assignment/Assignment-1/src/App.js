import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <h2>Welcome to My First React Application</h2>
        <p>This is a basic React project created with Header and Footer components.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
