import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">SlashDev</Navbar.Brand>
    <Nav>
      <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
