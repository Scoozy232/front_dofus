import React from 'react';
import {Link} from "react-router-dom";

function Welcome() {

    return (
        <div className='min-h-full relative h-full pb-10 text-white'>
            <h1 className={'text-center text-4xl font-bold text-gray-900 pt-10'}>Bienvenue sur Dofus pour les pros !</h1>
            <div className="w-full p-6 m-auto my-10  bg-gray-900 rounded-lg lg:max-w-xl">
                <div><p>Cette application web à été créé pour toi, joueur Dofus, afin de t'aider à savoir où tu en es rendus sur le jeu.</p>
                <div><p>Tu vas pouvoir savoir : </p>
                <ul className='list-inside list-disc'>
                    <li>Où tu en es dans les quêtes</li>
                    <li>Les Dofus que tu as obtenu</li>
                    <li>Ainsi que les donjons que tu as réalisé.</li>
                </ul></div>
                <div className='my-5'><p>N'hésite plus si tu es un grand fan Dofus comme nous je sais que tu as déjà ton compte ! </p>
                <Link to="/front_dofus/signin">
                    <button type="button"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-bleu">
                        Connexion
                    </button>
                </Link></div>
                <div><p>Et sinon t'en fais pas. Inscrit toi dès maintenant! C'est gratuit.</p>

                <Link to="/front_dofus/signup">
                    <button type="button"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-00 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-bleu">
                        Inscription
                    </button>
                </Link></div></div>
            </div>



        </div>
    );
}

export default Welcome;
