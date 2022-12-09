import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import donjon from '../../assets/navBar/donjon.png'
import quest from '../../assets/navBar/quest.png'


function divBar() {
    return (
        // <div className={'back divbar-dark'} expand="lg">
        //     <div>
        //         <div>
        //             <Link className={'text-decoration-none'} to={"/accueil"}>Dofus pour les pros</Link>
        //         </div>
        //         <div aria-controls="basic-divbar-div"/>
        //         <div id="basic-divbar-div">
        //             <div className="me-auto">
        //                 <div href="/dofus">
        //                     <Link className={'text-decoration-none'} to={"/dofus"}>
        //                         <img src={emeraude} alt={'image'}/>
        //                     </Link>
        //                 </div>
        //                 <div to="/donjon">
        //                     <Link className={'text-decoration-none'} to={"/donjons"}>
        //                         <img src={donjon} alt={'image'}/>
        //                     </Link>
        //                 </div>
        //                 <div className={'me-auto'}>
        //                     <Link className={'text-decoration-none'} to={"/quetes"}>
        //                         <img src={quest} alt={'image'}/>
        //                     </Link>
        //                 </div>
        //
        //             <div>
        //                 <Link className='text-light text-decoration-none' to="/signup">S'inscrire</Link>
        //             </div>
        //             <div>
        //                 <Link className='text-light text-decoration-none' to="/signin">Connexion</Link>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to={"/accueil"} className="flex items-center">
                    <img src={turquoise} className="h-6 mr-3 sm:h-9" alt="dpp logo"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dofus pour les pros</span>
                </Link>
                <div className="flex md:order-2">
                    <Link to="/signup">
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Inscription
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Connexion
                        </button>
                    </Link>
                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={"/dofus"}>
                                <img className="h-8 mr-3 sm:h-9" src={emeraude} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Dofus</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={"/donjons"}>
                                <img className="h-8 mr-3 sm:h-9" src={donjon} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Donjons</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={"/quetes"}>
                                <img className="h-8 mr-3 sm:h-9" src={quest} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Quetes</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default divBar;
