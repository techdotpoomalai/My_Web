import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar_() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Icon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Service" id="service-dropdown">
              <NavDropdown.Item href="/service/web"> Web Aplication</NavDropdown.Item>
              <NavDropdown.Item href="/service/mobile">Mobile Aplication</NavDropdown.Item>
              <NavDropdown.Item href="/service/data_science">Data Science</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Demo" id="demo-dropdown">
              <NavDropdown.Item href="/demo/restapi"> Rest API</NavDropdown.Item>
              <NavDropdown.Item href="/demo/uiux">UI/UX </NavDropdown.Item>
              <NavDropdown.Item href="/demo/minisoft">Mini Software</NavDropdown.Item>
              <NavDropdown.Item href="/demo/ds">Data Science</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Button variant="outline-warning">SignIn</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

