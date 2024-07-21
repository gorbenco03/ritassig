import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import InsuranceInfoPage from './pages/persFiz';
import StartPage from './pages/startPage';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/insurance" element={<MainPage/>} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/persFiz" element={<InsuranceInfoPage/>} />
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
