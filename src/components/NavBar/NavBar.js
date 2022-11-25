import React from 'react';
import {  Link } from "react-router-dom";


function NavBar() {
    return (
        <div className='d-flex justify-content-between'>
            <div className='d-flex flex-row'>
                <li className='list-group-item m-2'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='list-group-item m-2'>
                    <Link to="/dofus">Dofus</Link>
                </li>
                <li className='list-group-item m-2'>
                    <Link to="/sonjons">Donjons</Link>
                </li>
                <li className='list-group-item m-2'>
                    <Link to="/quetes">Quêtes</Link>
                </li>
            </div>
            <div className='d-flex flex-row'>
                <li className='list-group-item m-2'>
                    <Link to="/signup">S'inscrire</Link>
                </li>
                <li className='list-group-item m-2'>
                    <Link to="/signin">Connexion</Link>
                </li>
            </div>
        </div>
    );
}

export default NavBar;
