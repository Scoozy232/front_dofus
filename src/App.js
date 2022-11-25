import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from "./components/CardItem/CardItem";
import ListMenu from "./components/ItemMenu/ListMenu";
import Welcome from "./Welcome/Welcome";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="dofus" element={<ListMenu title={"Liste des dofus"}/>}/>
                <Route path="donjons" element={<ListMenu title={"Liste des donjons"}/>}/>
                <Route path="quetes" />
                <Route path="signup"/>
                <Route path="signin"/>
                <Route path="*" element={<Welcome />} /> {/*futur 404*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
