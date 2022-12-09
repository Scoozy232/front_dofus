import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="tracking-tight text-gray-900 dark:text-white">Footer super stylé</h5>
                        <p className={'tracking-tight text-gray-900 dark:text-white mb-5'}>Site front + back fait par deux
                            machines</p>
                    </div>
                    <div className="mb-md-0 mb-3">
                        <h5 className="text-uppercase tracking-tight text-gray-900 dark:text-white">Participants : </h5>
                        <ul className="list-unstyled">
                            <li className={'tracking-tight text-gray-900 dark:text-white'}>
                                AUBIN Florian (iop niveau 200)
                            </li>
                            <li className={'tracking-tight text-gray-900 dark:text-white'}>
                                LOISEL EMMA (sacriette niveau 1)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-3 tracking-tight text-gray-900 dark:text-white">© 2022 Copyright:
                <a href="/"> DofusPourLesPros.com</a>
            </div>
        </footer>
    );
}

export default Footer;
