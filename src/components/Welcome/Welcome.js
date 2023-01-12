import React from 'react';
import {Link} from "react-router-dom";

function Welcome() {

    

    return (
        <div>
            <h1 className={'text-center'}>Bienvenue sur Dofus pour les pro</h1>
            <p>Cette application web à été créé pour toi, joueur Dofus, afin de t'aider à savoir où tu en es rendus sur le jeu.</p>
            <p>Tu vas pouvoir savoir</p>
            <ul>
                <li>Où tu en es dans les quêtes</li>
                <li>Les Dofus que tu as obtenu</li>
                <li>Ainsi que les donjons que tu as réalisé.</li>
            </ul>
            <p>N'hésite pus si tu es un grand fan Dofus comme nous je sais que tu as déjà ton compte ! </p>
            <Link to="/signin">
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Connexion
                </button>
            </Link>
            <p>Et sinon t'en fais pas inscrit toi dès maintenant! C'est gratuit.</p>

            <Link to="/signup">
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Inscription
                </button>
            </Link>


        </div>
    );
}

export default Welcome;
