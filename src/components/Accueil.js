import React from 'react';
import NavBar from './NavBar/NavBar';
const Accueil = () =>{
    return (
      <div>
        <NavBar url="https://dofus-api-ynvz.onrender.com/api/auth/isConnected"/>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
        <h3>Accueil</h3>
        <div>
            <p>
                ouiiiiiiiiii
            </p>
        </div>
      </div>
    );
  }
  export default Accueil;
