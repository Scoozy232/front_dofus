import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import donjon from '../../assets/navBar/donjon.png'
import quest from '../../assets/navBar/quest.png'


let isDropdownActive = false;

function reportWindowSize() {
    document.getElementById("dropdown").classList.add('hidden');
}

window.onresize = reportWindowSize;


function dropdown() {
    isDropdownActive = !isDropdownActive;
    if (isDropdownActive) {
        document.getElementById("dropdown").classList.remove('hidden');
    } else {
        document.getElementById("dropdown").classList.add('hidden');
    }
}

function NavBar() {
    return (
        <nav className="mt-0 w-full border-gray-200 dark:bg-gray-900 p-3">
            <div className="container mx-auto flex items-center justify-between	px-4">
                <div className="flex text-sm">
                    <ul className="list-reset flex justify-between flex-1 lg:flex-none items-center">
                        <li className="mr-14">
                            <Link to={"/accueil"} className="flex items-center">
                                <img src={turquoise} className="h-6 mr-3 sm:h-9" alt="dpp logo"/>
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dofus pour les pros</span>
                            </Link>
                        </li>
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"/dofus"}>
                                <img className="h-8 mr-3 sm:h-9" src={emeraude} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Dofus</span>
                            </Link>
                        </li>
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"/donjons"}>
                                <img className="h-8 mr-3 sm:h-9" src={donjon} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Donjons</span>
                            </Link>
                        </li>
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"/quetes"}>
                                <img className="h-8 mr-3 sm:h-9" src={quest} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Quetes</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="justify-end content-center hidden lg:inline">
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
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id={"menuBurger"}
                     onClick={dropdown}
                     className="space-y-2 lg:hidden">
                    <div className="w-8 h-0.5 bg-white"/>
                    <div className="w-8 h-0.5 bg-white"/>
                    <div className="w-8 h-0.5 bg-white"/>
                </div>

            </div>
            <div id={"dropdown"} className={"hidden"}>
                <ul>
                    <li className={"pr-6 pl-6"}>
                        <div className={"pb-3 pt-3"}>
                            <Link to={"/dofus"}>
                                <img className="h-8 mr-3 sm:h-9" src={emeraude} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Dofus</span>
                            </Link>
                        </div>
                    </li>
                    <li className={"pr-6 pl-6"}>
                        <div className={" pb-3 pt-3"}>
                            <Link to={"/donjons"}>
                                <img className="h-8 mr-3 sm:h-9" src={donjon} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Donjons</span>
                            </Link>
                        </div>
                    </li>
                    <li className={"pr-6 pl-6"}>
                        <div className={" pb-3 pt-3"}>
                            <Link to={"/quetes"}>
                                <img className="h-8 mr-3 sm:h-9" src={quest} alt={'image'}/>
                                <span
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page">Quetes</span>
                            </Link>
                        </div>
                    </li>
                    <li className={"pr-6 pl-6 pb-4"}>
                        <div className={"pb-3 pt-3"}>
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
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
