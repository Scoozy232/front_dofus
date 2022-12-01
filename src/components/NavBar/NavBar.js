import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar className={'back navbar-dark'} expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className={'text-decoration-none'} to={"/acceuil"}>Accueil</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dofus">
                            <Link className={'text-decoration-none'} to={"/dofus"}>Dofus</Link>
                        </Nav.Link>
                        <Nav.Link to="/donjon">
                            <Link className={'text-decoration-none'} to={"/donjons"}>Donjons</Link>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <Link className={'text-decoration-none'} to={"/quetes"}>Quêtes</Link>
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
