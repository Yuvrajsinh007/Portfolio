import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactBar from './components/ContactBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <ContactBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;