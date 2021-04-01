import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../styles/Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="navbar" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem id="item">
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem id="item">
              <NavLink href="/match">Match</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand id="brand">Pet Finder</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;
