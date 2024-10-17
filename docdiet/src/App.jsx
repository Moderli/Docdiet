import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Conditions from './pages/Conditions';
import Dashboard from './pages/Dashboard';

function App() {
  const [selectedConditions, setSelectedConditions] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/conditions" 
          element={<Conditions setSelectedConditions={setSelectedConditions} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard selectedConditions={selectedConditions} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
