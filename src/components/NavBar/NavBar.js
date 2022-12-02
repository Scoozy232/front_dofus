import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import emeraude from '../../assets/dofus/emeraude.png'
import donjon from '../../assets/navBar/donjon.png'
import quest from '../../assets/navBar/quest.png'


function NavBar() {
    return (
        <Navbar className={'back navbar-dark'} expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className={'text-decoration-none'} to={"/acceuil"}>Dofus pour les pros</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dofus">
                            <Link className={'text-decoration-none'} to={"/dofus"}>
                                <img src={emeraude} alt={'image'}/>
                            </Link>
                        </Nav.Link>
                        <Nav.Link to="/donjon">
                            <Link className={'text-decoration-none'} to={"/donjons"}>
                                <img src={donjon} alt={'image'}/>
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <Link className={'text-decoration-none'} to={"/quetes"}>
                                <img src={quest} alt={'image'}/>
                            </Link>
                        </Nav.Link>
                    </Nav>

                    {/*<div>*/}
                            <Nav.Link className={'me-5'}>
                                <Link className='text-light text-decoration-none' to="/signup">S'inscrire</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-light text-decoration-none' to="/signin">Connexion</Link>
                            </Nav.Link>
                        {/*</div>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
