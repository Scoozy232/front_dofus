import React from 'react';
import NavBar from './NavBar/NavBar';
const Accueil = () =>{
    return (
      <div className='min-h-full relative h-full pb-10 text-white'>
      <NavBar url="https://dofus-api-ynvz.onrender.com/api/auth/isConnected"/>
              <h1 className={'text-center text-4xl font-bold text-gray-900 pt-10'}>Bienvenue sur Dofus pour les pros !</h1>
              <div className="w-full p-6 m-auto my-10  bg-gray-900 rounded-lg lg:max-w-xl">
                  <div><p>Cette application web à été créé pour toi, joueur Dofus, afin de t'aider à savoir où tu en es rendus sur le jeu.</p>
                  <div><p>Tu vas pouvoir savoir : </p>
                  <ul className='list-inside list-disc'>
                      <li>Où tu en es dans les quêtes</li>
                      <li>Les Dofus que tu as obtenu</li>
                      <li>Ainsi que les donjons que tu as réalisé.</li>
                  </ul></div>
                  </div>
              </div>
  
  
  
          </div>
    );
  }
  export default Accueil;


