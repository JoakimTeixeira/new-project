import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { AuthContext } from 'contexts/AuthContext';

const NavBar = () => {
  const { isLoggedIn, handleAuth } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">SlashDev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
          <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>
        </Nav>
        <Button variant="outline-danger" onClick={handleAuth}>{isLoggedIn ? 'Logout' : 'Login'}</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
