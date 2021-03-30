import React from 'react';
import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import Results from './components/Results';



function App() {
  return (
    <div className="app">
      <Header />

      <Nav />

      <Results />
    </div>
  );
}

export default App;
