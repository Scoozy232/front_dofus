import React from 'react';
import { Outlet, Link } from "react-router-dom";


function NavBar() {
    return (
        <div className='d-flex justify-content-between'>
            <div className='d-flex flex-row'>
                <button className='list-group-item list-group-item-action m-2'>
                    <Link className=' text-decoration-none' to="/">Accueil</Link>
                </button>
                <button className='list-group-item list-group-item-action m-2'>
                    <Link  className=' text-decoration-none' to="/dofus">Dofus</Link>
                </button>
                <button className='list-group-item list-group-item-action m-2'>
                    <Link  className=' text-decoration-none' to="/donjons">Donjons</Link>
                </button>
                <button className='list-group-item list-group-item-action m-2'>
                    <Link  className=' text-decoration-none' to="/quetes">Quêtes</Link>
                </button>
            </div>
            <div className='d-flex flex-row'>
                <button className='btn btn-success m-2'>
                    <Link  className='text-light text-decoration-none' to="/signup">S'inscrire</Link>
                </button>
                <button className='btn btn-success m-2'>
                    <Link  className='text-light text-decoration-none' to="/signin">Connexion</Link>
                </button>
            </div>
            <Outlet /> 
        </div>
        
    );
}

export default NavBar;
