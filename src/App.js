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
                <Route path="/front_dofus" element={<Welcome/>}/>
                <Route path="front_dofus/dofus" element={<ListMenu title={"Liste des dofus"} url={baseUrl+"api/dofus"} img="dofus"/>}/>
                <Route path='front_dofus/dofus/:id' element={<PageDetail/>}/>
                <Route path="front_dofus/donjons" element={<ListMenu title={"Liste des donjons"} url={baseUrl+"api/donjon"} img="donjon"/>}/>
                <Route path='front_dofus/donjon/:id' element={<PageDetail/>}/>
                <Route path="front_dofus/quetes" element={<ListMenu title={"Liste des quêtes"} url={baseUrl+"api/quest"} img="quest"/>}/>
                <Route path='front_dofus/quest/:id' element={<PageDetail/>}/>
                <Route path="front_dofus/signup" element={<LoginRegister url={baseUrl+"api"}/>}/>
                <Route path="front_dofus/signin" element={<Login url={baseUrl+"api"}/>}/>
                <Route path="front_dofus/accueil" element={<Accueil/>}/>
                <Route path="front_dofus/signout" element={<Welcome/>}/>
                <Route path="*" element={<p> ERREUR 404 </p>}/> {/*futur 404*/}
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
