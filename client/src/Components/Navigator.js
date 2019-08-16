import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navigator = () => (

    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">People</Nav.Link>
            <Nav.Link href="#features">Frequency</Nav.Link>
        </Nav>
    </Navbar>


)

export default Navigator