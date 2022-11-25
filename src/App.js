import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from "./components/CardItem/CardItem";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route path="dofus" element={<CardItem/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
