import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Accueil from './components/Accueil';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={NavBar} />
        <Route index element={Accueil} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
