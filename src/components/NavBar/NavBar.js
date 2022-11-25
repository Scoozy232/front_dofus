import React from 'react';
import {  Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/dofus">Dofus</Link>
        </li>
        <li>
          <Link to="/sonjons">Donjons</Link>
        </li>
        <li>
          <Link to="/quetes">Quêtes</Link>
        </li>
        <li>
          <Link to="/signup">S'inscrire</Link>
        </li>
        <li>
          <Link to="/signin">Connexion</Link>
        </li>
      </div>
    );
}

export default NavBar;
