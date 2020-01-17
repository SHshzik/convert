import React from 'react';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <ul className="header-list">
          <li className="header-list__item">
            <Link to="/" className="header-list__link">Конвертер</Link>
          </li>
          <li className="header-list__item">
            <Link to="/currency" className="header-list__link">Валюты</Link>
          </li>
        </ul>
      </Container>
    )
  }
}
