import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../assests/logo.svg";

function Footer() {
  return (
    <>
      <footer className="bd-footer px-5 mt-2 bg-light">
        <Container>
          <Row className="text-center py-5">
            <Col
              className="d-flex justify-content-center pb-3"
              xs={12}
              md={{ span: 3, offset: 1 }}
            >
              <Image src={logo} fluid />
            </Col>
            <Col xs={6} md={2}>
              <h5>Brands</h5>
              <Nav className="d-block">
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
            </Col>
            <Col xs={6} md={2}>
              <h5>Contact</h5>
              <Nav className="d-block">
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
            </Col>
            <Col xs={6} md={2}>
              <h5>Finance</h5>
              <Nav className="d-block">
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
            </Col>
            <Col xs={6} md={2}>
              <h5>Links</h5>
              <Nav className="d-block">
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
            </Col>
          </Row>
        </Container>
      </footer>
      <Container
        fluid
        className="pb-5 d-flex justify-content-center bg-light align-items-center"
      >
        <Row>
          <Col xs={12}> Alabama Powersports &copy; 2022</Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
