import React from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes >
      </Routes >
    </Router>
  );
}

export default App;
