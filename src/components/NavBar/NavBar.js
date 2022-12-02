import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';
import emeraude from '../../assets/dofus/emeraude.png'
import donjon from '../../assets/navBar/donjon.png'
import quest from '../../assets/navBar/quest.png'


function divBar() {
    return (
        <div className={'back divbar-dark'} expand="lg">
            <div>
                <div>
                    <Link className={'text-decoration-none'} to={"/accueil"}>Dofus pour les pros</Link>
                </div>
                <div aria-controls="basic-divbar-div"/>
                <div id="basic-divbar-div">
                    <div className="me-auto">
                        <div href="/dofus">
                            <Link className={'text-decoration-none'} to={"/dofus"}>
                                <img src={emeraude} alt={'image'}/>
                            </Link>
                        </div>
                        <div to="/donjon">
                            <Link className={'text-decoration-none'} to={"/donjons"}>
                                <img src={donjon} alt={'image'}/>
                            </Link>
                        </div>
                        <div className={'me-auto'}>
                            <Link className={'text-decoration-none'} to={"/quetes"}>
                                <img src={quest} alt={'image'}/>
                            </Link>
                        </div>

                    <div>
                        <Link className='text-light text-decoration-none' to="/signup">S'inscrire</Link>
                    </div>
                    <div>
                        <Link className='text-light text-decoration-none' to="/signin">Connexion</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default divBar;
