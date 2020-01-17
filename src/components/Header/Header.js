import React from 'react';

import './Header.css';
import Container from "react-bootstrap/Container";

export default class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <ul className="header-list">
          <li className="header-list__item">
            <a href="/" className="header-list__link">Конвертер</a>
          </li>
          <li className="header-list__item">
            <a href="/currency" className="header-list__link">Валюты</a>
          </li>
        </ul>
      </Container>
    )
  }
}
