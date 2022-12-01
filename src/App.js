import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from "./components/CardItem/CardItem";
import ListMenu from "./components/ItemMenu/ListMenu";
import Welcome from "./Welcome/Welcome";
import LoginRegister from './components/LoginRegister/LoginRegister';
import Login from './components/Login/Login';


function App() {
    return (
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="dofus" element={<ListMenu title={"Liste des dofus"}/>}/>
                    <Route path="donjons" element={<ListMenu title={"Liste des donjons"}/>}/>
                    <Route path="quetes"element={<ListMenu title={"Liste des quêtes"}/>}/>
                    <Route path="signup" element={<LoginRegister/>}/>
                    <Route path="signin" element={<Login/>}/>
                    <Route path="*" element={<Welcome/>}/> {/*futur 404*/}
                </Routes>
            </BrowserRouter>
    );
}

export default App;
