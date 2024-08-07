
import './style/App.css';
import Welcome from './components/Welcome';
import Communication from './components/Communication';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/communication" element={<Communication />} /> */}
        <Route path="/" element={<Welcome />} />

      </Routes>
    </Router>
  );
}

export default App;

