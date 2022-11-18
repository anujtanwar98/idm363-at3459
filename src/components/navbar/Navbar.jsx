import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBoot } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {

  return (
    <NavbarBoot sticky="top" className="navbar bg-dark shadow-lg mb-3 text-white">
      <Container>
        <nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            UXID Headphones
          </Nav.Link>
          <Nav.Link to="/edit" as={NavLink}>
            Edit Data
          </Nav.Link>
          <Nav.Link to="/add-headphones" as={NavLink}>
            Add Headphones
          </Nav.Link>
        </nav>
        <Button style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        {/* <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)", }}>2</div> */}
        </Button>
      </Container>
    </NavbarBoot>
  );

}