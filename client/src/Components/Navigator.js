import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigator = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/" data-testid="nav-title">
      Frequency App
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" data-testid="nav-people">
        People
      </Nav.Link>
      <Nav.Link href="/frequency" data-testid="nav-frequency">
        Frequency
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigator;
