import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">Конвертер</Link>
              <Link to="/currency" className="nav-link">Валюты</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
