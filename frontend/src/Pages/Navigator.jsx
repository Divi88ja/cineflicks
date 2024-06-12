import { Outlet } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <div className="content">
      <Navbar className="nav" bg="prop" variant="dark">
        <Container>
          <Navbar.Brand className="navtext">
            <span>C</span>INE<span>F</span>LICKS
          </Navbar.Brand>
          <Nav className="temp me-auto">
            <Nav.Link className="temp" href="/home">Home</Nav.Link>
            <Nav.Link className="temp" href="/movie">Movies</Nav.Link>
            <Nav.Link className="temp" href="/AboutUs">AboutUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
      <Outlet />
    </div>
  );
}
