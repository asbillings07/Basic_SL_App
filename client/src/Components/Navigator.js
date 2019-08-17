import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigator = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Frequency App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">People</Nav.Link>
      <Nav.Link href="/frequency">Frequency</Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigator;
