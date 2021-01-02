import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react"
import * as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  //render() {
  return (
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <ReactBootstrap.Navbar.Brand href="#home">
          The Apaws Diary
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <Link to="./Login">
              <ReactBootstrap.Nav.Link href="#Login">
                Login
              </ReactBootstrap.Nav.Link>
            </Link>
            <Link to="./Register">
              <ReactBootstrap.Nav.Link href="#Register">
                Register
              </ReactBootstrap.Nav.Link>
            </Link>
           </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};


export default Navbar;