import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Word Word</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/AddWord">New Word</Nav.Link>
            {/* <Nav.Link href="/Quiz">Quiz</Nav.Link> */}
            <Nav.Link href="/AllCards">All Cards</Nav.Link>
            <Nav.Link href="/QuizStarted">Quiz </Nav.Link>
            {/* <Nav.Link href="/QuizSelect">Quiz Select</Nav.Link> */}
            <NavDropdown title="Levels" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Level1">Level1</NavDropdown.Item>

              <NavDropdown.Item href="/Level2">Level2</NavDropdown.Item>

              <NavDropdown.Item href="/Level3">Level3</NavDropdown.Item>

              <NavDropdown.Item href="/Level4">Level4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
