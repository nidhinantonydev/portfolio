import React from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="container">
        <Sidebar />
        <MainContent />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
