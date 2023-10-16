/*import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;*/

import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">"
            <Container>
                <Navbar.Brand href="/">LuxeRidesWorld</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Menu;