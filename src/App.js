import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListMenu from "./components/ItemMenu/ListMenu";
import Welcome from "./components/Welcome/Welcome";
import LoginRegister from './components/LoginRegister/LoginRegister';
import Login from './components/Login/Login';
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="dofus" element={<ListMenu title={"Liste des dofus"}/>}/>
                <Route path="donjons" element={<ListMenu title={"Liste des donjons"}/>}/>
                <Route path="quetes" element={<ListMenu title={"Liste des quêtes"}/>}/>
                <Route path="signup" element={<LoginRegister/>}/>
                <Route path="signin" element={<Login/>}/>
                <Route path="*" element={<p> ERREUR 404 </p>}/> {/*futur 404*/}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
