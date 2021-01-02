import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import {Link} from 'react-router-dom';
//import './Navigation.css';
 
const Navbar = () => {
   
  return (
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <ReactBootstrap.Navbar.Brand href="http://localhost:3000">
          The Apaws Diary
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <Link to="/">
              <ReactBootstrap.Nav.Link href="#Home">
                List All Posts
              </ReactBootstrap.Nav.Link>
            </Link>
            <Link to="./create">
              <ReactBootstrap.Nav.Link href="#Diary">
                Add New Post
              </ReactBootstrap.Nav.Link>
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};
export default Navbar;