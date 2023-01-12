import React from 'react';
import {Link} from "react-router-dom";

function Welcome() {

    

    return (
        <div className='top-10'>
            <h1 className={'text-center text-3xl font-bold underline '}>Bienvenue sur Dofus pour les pro !</h1>
            <div className="w-full p-6 m-auto my-10 border-4 border-gray-900 rounded-lg   lg:max-w-xl">
                <div><p>Cette application web à été créé pour toi, joueur Dofus, afin de t'aider à savoir où tu en es rendus sur le jeu.</p>
                <div><p>Tu vas pouvoir savoir : </p>
                <ul class='list-inside list-disc'>
                    <li>Où tu en es dans les quêtes</li>
                    <li>Les Dofus que tu as obtenu</li>
                    <li>Ainsi que les donjons que tu as réalisé.</li>
                </ul></div>
                <div><p>N'hésite pus si tu es un grand fan Dofus comme nous je sais que tu as déjà ton compte ! </p>
                <Link to="/signin">
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Connexion
                    </button>
                </Link></div>
                <div><p>Et sinon t'en fais pas inscrit toi dès maintenant! C'est gratuit.</p>

                <Link to="/signup">
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Inscription
                    </button>
                </Link></div></div>
            </div>
            


        </div>
    );
}

export default Welcome;
