import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import Dashboard from './pages/dashboard';
import Reports from './pages/report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports/>} />
      </Routes>
    </Router>
  );
}

export default App;
