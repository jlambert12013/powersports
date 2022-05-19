import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../assests/logo.svg";

function Header() {
  return (
    <header>
      <Navbar bg="light" top="fixed" expand="md" className="px-5 border-0">
        <LinkContainer to="/">
          <NavbarBrand>
            <Image src={logo} alt="Logo" />
          </NavbarBrand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
export default Header;
