import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/components/organisms/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Introducción</Nav.Link>
            <Nav.Link href="/projects">Proyectos</Nav.Link>
            <Nav.Link href="/news">Noticias</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

