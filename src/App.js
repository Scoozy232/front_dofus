import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from "./components/CardItem/CardItem";


function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="dofus" element={<CardItem/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
