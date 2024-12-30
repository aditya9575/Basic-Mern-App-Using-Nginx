import React from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import FeedbackForm from './components/FeedbackForm';

import './app.css';



function App() {
  return (
   
    <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
  </div>
   
  );
}

export default App;
