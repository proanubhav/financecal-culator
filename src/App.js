
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import CalculatorForm from './components/CalculatorForm';

const App = () => {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />          
          <Route path="finance-calculator" element={<CalculatorForm />} />          
        </Routes>
        <Footer />
      </Router>
    );
  };

export default App;
