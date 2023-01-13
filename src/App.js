import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListMenu from "./components/ItemMenu/ListMenu";
import Welcome from "./components/Welcome/Welcome";
import LoginRegister from './components/LoginRegister/LoginRegister';
import Login from './components/Login/Login';
import Footer from "./components/Footer/Footer";
import PageDetail from "./components/pageDetail/PageDetail";
import Accueil from "./components/Accueil";


function App() {

    const baseUrl = "https://dofus-api-ynvz.onrender.com";
    return (
        <BrowserRouter>
        <div className='h-full'>  
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="dofus" element={<ListMenu title={"Liste des dofus"} url={baseUrl+"api/dofus"} img="dofus"/>}/>
                <Route path='dofus/:id' element={<PageDetail/>}/>
                <Route path="donjons" element={<ListMenu title={"Liste des donjons"} url={baseUrl+"api/donjon"} img="donjon"/>}/>
                <Route path='donjon/:id' element={<PageDetail/>}/>
                <Route path="quetes" element={<ListMenu title={"Liste des quêtes"} url={baseUrl+"api/quest"} img="quest"/>}/>
                <Route path='quest/:id' element={<PageDetail/>}/>
                <Route path="signup" element={<LoginRegister url={baseUrl+"api"}/>}/>
                <Route path="signin" element={<Login url={baseUrl+"api"}/>}/>
                <Route path="accueil" element={<Accueil/>}/>
                <Route path="signout" element={<Welcome/>}/>
                <Route path="*" element={<p> ERREUR 404 </p>}/> {/*futur 404*/}
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
