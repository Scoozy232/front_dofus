import React from 'react';
import NavBar from '../NavBar/NavBar';

function PageDetail() {
    return (
        <div>
            <NavBar url="http://localhost:3001/api/auth/isConnected"/>
            <h1 className={'text-center'}>Dofus Emeraude</h1>
            <h2> Effet</h2>
            <h2> stats native</h2>
            <h3>niveau : 100</h3>

            <h3>Donjons liés</h3>
            <ul>
                <li>premier</li>
                <li>deuxieme</li>
                <li>troisieme</li>
            </ul>

            <p>Obtenu : <img/></p>

        </div>
    );
}

export default PageDetail;
